basePath = '../../app';

files = [
    JASMINE,
    JASMINE_ADAPTER,
    'js/lib/jquery/jquery.js',
    'js/lib/bootstrap/bootstrap.js',
    'js/lib/angular/angular.min.js',
    'js/lib/angularstrap/angularstrap.js',
    '../test/lib/angular-mocks.js',

    'js/*.js',
    '../test/unit/**/*.js',

    // templates
    'partials/*.html'
];

preprocessors = {
    '**/*.html': 'html2js'
};

autoWatch = true;

debugLevel = 'error';

browsers = ['Chrome'];

reporters = ['junit', 'progress'];

junitReporter = {
    outputFile: '../report/unit.xml',
    suite: 'unit'
};
