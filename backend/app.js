
'use strict';

require('dotenv').config();

const apiServer = require('./server');

async function startServer() {
    const server = await apiServer;
    await server.start();

    console.log(`Server started at ${server.info.uri}`);
}

startServer();
