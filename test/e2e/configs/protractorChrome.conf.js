module.exports.config = require('./createProtractorConf.js')({
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
        args: ["--incognito"],
        prefs: {
          'profile.default_content_setting_values.geolocation': 2
        }
    }
  }
});
