
'use strict';

const Boom = require('boom');
const db = require('../db/db');

// Login handler for settings up the cookie-authenticated sessions
const getUser = async (request, h) => {
    let users;
    let params;
    if (request.query.email) {
        params = { email: request.query.email };
    } else if (request.query.oauthToken) {
        params = { oauthToken: request.query.oauthToken };
    } else {
        return Boom.badRequest('No parameter given');
    }
    try {
        if (params.email) {
            users = await db.getUserByEmail(params);
        } else if (params.oauthToken) {
            users = await db.getUserByOAuthToken(params);
        } else {
            return Boom.badRequest('No parameter given');
        }
    } catch (e) {
        // Hapi errors get kicked up the chain
        if (Boom.isBoom(e)) {
            throw e;
        }
        // Could not find the user, throw a 404
        if (e.message === 'No data returned from the query.') {
            throw Boom.notFound(`No user with this parameter: ${params}`);
        }
        // Catch all 500 error
        throw Boom.badImplementation(e.message);
    }
    if (!users || users.length === 0) {
        throw Boom.notFound(`No user with this parameter: ${params}`);
    }
    if (users.length > 1) {
        throw Boom.badRequest(`More than one user for this parameter: ${params}`);
    }
    const user = {
        userId: users.userId,
        email: users.email,
        name: users.name,
        dateCreated: users.dateCreated,
        dateUpdated: users.dateUpdated,
        hash: users.hash,
        active: users.active,
    };
    return h.response(user).code(200);
};

// Login handler for settings up the cookie-authenticated sessions
const createUserWithHash = async (request, h) => {
    try {
        const params = {
            email: request.payload.email,
            hash: request.payload.hash,
            name: request.payload.name,
        };
        const user = await db.createUserWithHash(params);
        return h.response(user).code(200);
    } catch (e) {
        // Hapi errors get kicked up the chain
        if (Boom.isBoom(e)) {
            throw e;
        }
        // Could not find the user, throw a 404
        if (e.message === 'duplicate key value violates unique constraint "users_email_key"') {
            throw Boom.badRequest('A user with email already exists.');
        }
        // Catch all 500 error
        throw Boom.badImplementation(e.message);
    }
};

// Login handler for settings up the cookie-authenticated sessions
const createUser = async (request, h) => {
    try {
        const params = {
            email: request.payload.email,
            name: request.payload.name,
        };
        const user = await db.createUser(params);
        return h.response(user).code(200);
    } catch (e) {
        // Hapi errors get kicked up the chain
        if (Boom.isBoom(e)) {
            throw e;
        }
        // Could not find the user, throw a 404
        if (e.message === 'duplicate key value violates unique constraint "user_info_email_key"') {
            throw Boom.badRequest('A user with email already exists.');
        }
        // Catch all 500 error
        throw Boom.badImplementation(e.message);
    }
};

const updateUser = async (request, h) => {
    try {
        const user = await db.updateUser(request.payload);
        return h.response(user).code(200);
    } catch (e) {
        // Hapi errors get kicked up the chain
        if (Boom.isBoom(e)) {
            throw e;
        }
        // Catch all 500 error
        throw Boom.badImplementation(e.message);
    }
};


module.exports = {
    getUser,
    createUser,
    createUserWithHash,
    updateUser,
};
