// Karma configuration
// Generated on Thu Nov 14 2013 01:22:18 GMT+0100 (CET)

module.exports = function (config) {

    config.set({
        frameworks: ['ng-scenario'],
        files: ['../e2e/**/*.js'],
        urlRoot: '/_karma_/',
        proxies: {
            '/': 'http://localhost:3001/'
        },
        autoWatch: false,
        singleRun: true,
        colors: true,
        logLevel: config.LOG_INFO,
        reporters: ['progress'],
        browsers: ['Chrome']
    });
};
