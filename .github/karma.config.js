module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage'),
            require('@angular-devkit/build-angular/plugins/karma')
        ],
        client: {
            jasmine: {
                // Configuration options for Jasmine
                random: false // Disable random execution
            },
            clearContext: false // Leave Jasmine Spec Runner output visible in browser
        },
        jasmineHtmlReporter: {
            suppressAll: true // Removes duplicated traces
        },
        coverageReporter: {
            dir: require('path').join(__dirname, './coverage/angular-app'),
            subdir: '.',
            reporters: [
                { type: 'html' },
                { type: 'text-summary' }
            ]
        },
        reporters: ['progress', 'kjhtml'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome', 'ChromeHeadlessCustom'],
        customLaunchers: {
            ChromeHeadlessCustom: {
                base: 'ChromeHeadless',
                flags: ['--no-sandbox', '--disable-gpu']
            }
        },
        singleRun: false,
        restartOnFileChange: true
    });
};
