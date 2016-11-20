/* eslint-env node, mocha */
function conf2p(filepath) {
    var rl = require('readline').createInterface({
        input: require('fs').createReadStream(filepath)
    })

    var ret = ''
    rl.on('line', function (line) {
        if (line.trim().length > 0 && line.slice(0, 1) !== '#') {
            var matchs = /([^=]+)=([^=]+)/.exec(line)
            if (matchs.length >= 3) {
                ret = ret + ' --' + matchs[1] + '=' + matchs[2]
            }
        }
    })
    return new Promise(function (resolve, reject) {
        rl.on('close', function () {
            resolve(ret)
        })
    })
}
module.exports = conf2p