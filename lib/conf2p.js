/* eslint-env node, mocha */
function conf2p(filepath) {
    this.rl = require('readline').createInterface({
        input: require('fs').createReadStream(filepath)
    })

    this.ret = ''
    this.dic = {}
    this._do = function () {
        var that = this
        this.rl.on('line', function (line) {
            if (line.trim().length > 0 && line.slice(0, 1) !== '#') {
                var matchs = /([^=]+)=([^=]+)/.exec(line)
                if (matchs && matchs.length >= 3) {
                    that.ret = that.ret + ' --' + matchs[1] + '=' + matchs[2]
                    that.dic[matchs[1]] = matchs[2]
                }
            }
        })
    }
    this.toString = function () {
        if (this.ret === '') this._do()
        var that = this
        return new Promise(function (resolve, reject) {
            that.rl.on('close', function () {
                resolve(that.ret)
            })
        })
    }
    this.toDic = function() {
        if(this.dic === {}) this._do()
        var that = this
        return new Promise(function (resolve, reject) {
            that.rl.on('close', function () {
                resolve(that.dic)
            })
        })
        
    }
}
module.exports = conf2p