require('babel-register')
require('babel-core')
require('babel-plugin-transform-runtime')
require('nightwatch-cucumber')({
  cucumberArgs: ['--compiler', 'js:as', '--require', 'test/behavior/steps', '--format', 'json:reports/cucumber.json', 'test/behavior/features']
})

var config = require('../../config')

// http://nightwatchjs.org/gettingstarted#settings-file
module.exports = {
  src_folders: ['test/behavior'],
  output_folder: 'reports',
  custom_assertions_path: '',

  selenium: {
    start_process: true,
    server_path: require('selenium-server').path,
    host: '127.0.0.1',
    port: 4445,
    cli_args: {
      'webdriver.chrome.driver': require('chromedriver').path
    }
  },

  test_settings: {
    default: {
      selenium_port: 4445,
      selenium_host: '12
      silent: true,
      globals: {
        devServerURL: 'http://127.0.0.1:' + (process.env.PORT || config.dev.port)
      }
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    },

    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    }
  }
}
