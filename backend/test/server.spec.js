

'use strict';

const test = require('ava');

const server = require('../server');

test('server object exists', async t => {
    const resolvedServer = await server;
    t.true(typeof resolvedServer === 'object');
});
