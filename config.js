let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['specs/*.js'],
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
    }
  },
  onPrepare: function() {
    var specReporter = new SpecReporter({
      displayFailuresSummary: true,
      displayFailuredSpec: true,
      displaySuiteNumber: true,
      displaySpecDuration: true
    });

    jasmine.getEnv().addReporter(specReporter);
  }
};