

'use strict';

const { argv } = require('yargs');

// Task to run the test workflow on any changes to the target files
module.exports = function avaTask(gulp, plugins, config) {
    return () => gulp.src(config.ava.files)
        .pipe(plugins.plumber())
        .pipe(plugins.ava({
            nyc: true, // NYC is the command line version of Istanbul
            verbose: true,
            failFast: !!argv.ff,
        }));
};
