module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['browserify', 'jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'src/vendor/angular/angular.min.js',
            'src/vendor/angular-mocks/angular-mocks.js',
            'src/js/main.js',
            'src/views/**/*.html',
            'tests/unit/**/*.spec.js'
        ],

        plugins: [
            'karma-browserify',
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-mocha-reporter'
        ],

        // list of files to exclude
        exclude: [
            'build/',
            'node_modules/'
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'src/js/main.js': ['browserify'],
            'tests/unit/**/*.spec.js': ['browserify']
        },

        browserify: {
            debug: true,
            transform: ['bulkify']
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,

        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    });
};