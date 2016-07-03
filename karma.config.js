var istanbul = require('browserify-istanbul');

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['browserify', 'source-map-support', 'jasmine'],

        files: [
            'src/vendor/karma-read-json/karma-read-json.js',
            'src/vendor/angular/angular.js',
            'src/vendor/angular-mocks/angular-mocks.js',
            'src/js/main.js',
            'tests/unit/**/*.spec.js',
            {
                pattern: 'tests/unit/mock/**/*.mock.json',
                included: false
            }
        ],

        plugins: [
            'karma-browserify',
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-source-map-support',
            'karma-mocha-reporter',
            'karma-coverage'
        ],

        exclude: [
            'build/',
            'node_modules/'
        ],

        preprocessors: {
            'src/js/main.js': ['browserify']
        },

        browserify: {
            debug: true,
            transform: ['bulkify', istanbul({
                ignore: [
                    '**/node_modules/**',
                    '**/build/**',
                    '**/tests/unit/**',
                    '**/src/js/**/index.js',
                    '**/src/js/main.js',
                    '**/src/js/utils/constants.js'
                ]
            })]
        },

        reporters: ['mocha', 'coverage'],
        port: 9877,
        colors: true,
        autoWatch: true,
        logLevel: config.LOG_INFO,
        browsers: ['PhantomJS', 'Chrome'],
        singleRun: false,
        concurrency: Infinity,
        coverageReporter: {
            type : 'html',
            dir : 'tests/unit/coverage/'
        }
    });
};
