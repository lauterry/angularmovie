basePath = '../../app';

files = [
  ANGULAR_SCENARIO,
  ANGULAR_SCENARIO_ADAPTER,
  '../test/e2e/*.js'
];

autoWatch = false;

preprocessors = {
    '**/*.html': 'html2js'
};

browsers = ['Chrome'];

singleRun = true;

proxies = {
    '/': 'http://localhost:3001/'
};

reporters = ['junit', 'dots'];

junitReporter = {
  outputFile: '../report/e2e.xml',
  suite: 'e2e'
};

port = 9877;
runnerPort = 9101;
