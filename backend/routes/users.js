
'use strict';

const users = require('../controllers/users');

const { NODE_ENV } = process.env;

module.exports.registerUsers = (server) => {
    server.route({
        method: 'GET',
        path: '/users',
        handler: users.getUser,
        config: {
            auth: false,
        },
    });

    server.route({
        method: 'POST',
        path: '/users',
        handler: NODE_ENV === 'dev' ? users.createUser : users.createUserWithHash,
        //handler: users.createUser,
        config: {
            auth: false,
        },
    });

    server.route({
        method: 'PUT',
        path: '/users',
        handler: users.updateUser,
        config: {
            auth: false,
        },
    });
};
