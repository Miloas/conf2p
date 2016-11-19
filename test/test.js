import test from 'ava'

import f from '../index'

test('foo', t => {
    t.is(f(), 'ok')
})