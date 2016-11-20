/* eslint-env node, mocha */
import test from 'ava'

import conf2p from '../index'

test('test',async t => {
    t.is(await conf2p(__dirname + '/testInput.conf'),
        ' --a=3 --b=true --lite-x=disable --dir=/123/456')
})