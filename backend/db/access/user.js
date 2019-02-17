'use strict';

const Sequelize = require('sequelize');
const sequelize = require('../index');


const User = sequelize.define('user',
    {
        userId: {type: Sequelize.INTEGER, primaryKey:true, autoIncrement: true},
        email: Sequelize.STRING,
        name: Sequelize.STRING,
        active: {type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true},
        hash: {type: Sequelize.STRING, allowNull: false},
    },
    {
        defaultScope: {
            where: {
                active: true
            }
        }

    }
)
/*
function updateColumnsAndValues(params) {
    // const skipColumns = ['id', 'active', 'date_created']; //
    let columns = '';
    Object.keys(params).forEach((key) => {
        if (key !== 'UserId' && key !== 'Active' && key !== 'DateCreated' && key !== 'DateUpdated') {
            columns += `${key} = :${key}, `;
        }
    });
    columns += 'DateUpdated = getdate()';
    return columns;
}
/*
function createUserWithHash(params) {
    return sequelize.query('INSERT INTO Users (Email, Hash, Name) VALUES '
    + '(:email, :hash, :name);',
    {
        replacements: {
            email: params.email, hash: params.hash, name: params.name
        },
        type: Sequelize.QueryTypes.INSERT,
    });
}
*/
function createUser(params) {
    return sequelize.query('INSERT INTO Users (Email, Name) VALUES '
    + '(:email, :name);',
    {
        replacements: {
            email: params.email, name: params.name,
        },
        type: Sequelize.QueryTypes.INSERT,
    });
}
/*
function getUserByEmail(params) {
    return sequelize.query('SELECT * from USERS where Email = :email',
        { replacements: { email: params.email }, type: Sequelize.QueryTypes.SELECT });
}
*/
function createUserWithHash(params){
    return User.create({
        email: params.email,
        hash: params.hash,
        name:  params.name
    })
}


function getUserByEmail(params){
    return User.findOne({where: {email: params.email}})
}

function getUserByOAuthToken(params) {
    //return User.findOne({where: {oauthToken: params.oauthToken}})
    return sequelize.query('SELECT * from Users where OAuthToken = :oauthToken',
        { replacements: { oauthToken: params.oauthToken }, type: Sequelize.QueryTypes.SELECT });
}

function updateUser(params) {
    return User.find({where: {email: params.email}}).then( user => {return user.updateAttributes(params)})
    //User.update({name: params.name, email: params.email, hash: params.hash}, {where {email: params.email}})
}

module.exports = {
    createUserWithHash,
    createUser,
    getUserByEmail,
    getUserByOAuthToken,
    updateUser,
};
