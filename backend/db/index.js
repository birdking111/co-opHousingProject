

'use strict';

const dbHost = process.env.DB_HOST;
const dbDatabase = process.env.DB_DATABASE;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const Sequelize = require('sequelize');
/*
const sequelize = new Sequelize(dbDatabase, dbUser, dbPassword, {
    host: dbHost,
    dialect: 'postgres',
    operatorsAliases: false,

    
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },

    dialectOptions: {
        encrypt: false, // Use this if you're on Windows Azure
    },
    
});
*/
const sequelize = new Sequelize('postgres://talon:changeme@db:5432/talon')

// Creating a new database instance from the connection details:
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// Exporting the database object for shared use:
module.exports = sequelize;
