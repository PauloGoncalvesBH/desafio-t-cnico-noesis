const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

module.exports = providedConfig => {
  const defaultConfig = {
    baseUrl: 'https://www.unimed.coop.br/',
    directConnect: true,
    specs: ['../spec/*.spec.js'],
    onPrepare: () => {
      browser.waitForAngularEnabled(false);
      jasmine.getEnv().addReporter(
        new SpecReporter({
          suite: {
            displayNumber: true
          },
          spec: {
            displayFailed: true,
            displayPending: true,
            displayDuration: true,
            displayStackTrace: false
          },
          summary: {
            displayFailed: false
          }
        })
      );
      afterEach(() => {
        browser.manage().deleteAllCookies();
        return browser.executeScript('sessionStorage.clear(); localStorage.clear();');
      });
    },
    jasmineNodeOpts: {
      print: function() {}
    }
  };

  return { ...defaultConfig, ...providedConfig };
};
