/* eslint-env node, mocha */
import test from 'ava'

import conf2p from '../index'

test('test',async t => {
    var obj = new conf2p(__dirname + '/testInput.conf')
    t.is(await obj.toString(),
        ' --a=3 --b=true --lite-x=disable --dir=/123/456')
})
