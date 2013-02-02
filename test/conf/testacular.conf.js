basePath = '../../app';

files = [
    JASMINE,
    JASMINE_ADAPTER,
    'js/lib/angular/angular.min.js',
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

browsers = ['Chrome'];

junitReporter = {
    outputFile: 'test_out/unit.xml',
    suite: 'unit'
};
