
'use strict';

const { argv } = require('yargs');

const isFixed = file => file.eslint != null && file.eslint.fixed;

// Task used to use an ESConfig to lint all targeted files
module.exports = function eslintTask(gulp, plugins) {
    return () => gulp.src(['**/*.js'])
        .pipe(plugins.eslint({ fix: Boolean(argv.fix) }))
        .pipe(plugins.eslint.format())
        .pipe(plugins.eslint.failAfterError())
        .pipe(plugins.if(isFixed, gulp.dest('.')));
};
