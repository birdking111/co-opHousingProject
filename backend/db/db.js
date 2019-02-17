

'use strict';

const user = require('./access/user');

const modules = [
    user,
];

const moduleExports = {};
modules.forEach(_module => {
    Object.keys(_module).forEach(key => {
        moduleExports[key] = _module[key];
    });
});

module.exports = moduleExports;
