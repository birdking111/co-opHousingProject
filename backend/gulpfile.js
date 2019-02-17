

/* eslint-disable */

'use strict';

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const config = require('./package.json');
const _ = require('lodash');

function getTask(task, config) {
    return require(`./gulp-tasks/${task}`)(gulp, plugins, config); // eslint-disable-line
}

// =========== TASKS ============ //
gulp.task('ava', getTask('ava', config));
gulp.task('ava:auto', gulp.series('ava'), () => {
    gulp.watch(_.flatten([config.ava.source, config.ava.files]), gulp.series('ava'));
});

// Lint both source files and test files
// TODO: Use Ava plugin for best test style practices
gulp.task('lint', getTask('eslint', config));

// Run tests and watch
gulp.task('test', gulp.series('lint', 'ava'), () => {
    gulp.watch(_.flatten([config.ava.source, config.ava.files]), ['lint', 'ava']);
});