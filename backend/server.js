

'use strict';

require('dotenv').config();

const Hapi = require('hapi');
const BasicAuth = require('hapi-auth-basic');
const CookieAuth = require('hapi-auth-cookie');

const api = require('./routes');

const COOKIE_PASSWORD = 'this-is-a-cookie-password-do-not-sass-me-on-length';
const SESSION_LENGTH = 1 * 24 * 60 * 60 * 1000; // 1 day

const server = new Hapi.Server({
    port: process.env.SERVER_PORT || 8090,
});

// Create the session cache
// TODO: Swap for a not in-memory cache
const registerCache = async () => {
    const cache = server.cache({ segment: 'sessions', expiresIn: SESSION_LENGTH });
    server.app.cache = cache;
};

const registerAuth = async () => {
    // Register the authentication schemes
    await server.register(CookieAuth);
    await server.register(BasicAuth);

    // Create the strategies from the registered schemes
    server.auth.strategy('session', 'cookie', {
        password: COOKIE_PASSWORD,
        keepAlive: true,
        ttl: SESSION_LENGTH,
        isSecure: process.env.NODE_ENV === 'qa' || process.env.NODE_ENV === 'production',
        validateFunc: async (request, session) => {
            const cached = await request.server.app.cache.get(session.sid);

            // Set the credentials as valid and attach the full session to them
            // This may be better served as a `PostAuth` hook since we do not actually
            // do additional validation here
            const out = {
                valid: true,
                credentials: cached || {},
            };

            return out;
        },
    });

    // Make cookie authentication the default
    server.auth.default('session');
};

const registerPlugins = async () => {
    await server.register(api);
};

const init = async () => {
    await registerCache();
    await registerAuth();
    await registerPlugins();

    return server;
};

process.on('unhandledRejection', err => {
    console.error(err);
    process.exit(1);
});

module.exports = init(); // for testing?
