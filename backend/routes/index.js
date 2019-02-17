
'use strict';

const users = require('../routes/users');

async function registerApi(server) {
    users.registerUsers(server);
}

const plugin = {
    name: 'pawl-api',
    version: '0.0.0',
    register: registerApi,
};

module.exports = plugin;
