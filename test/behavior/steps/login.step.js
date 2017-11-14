const {client} = require('nightwatch-cucumber')
const {defineSupportCode} = require('cucumber')

defineSupportCode(({Given, Then, When}) => {
  Given('que eu acessei o site', () => {
    return client
      .url(client.globals.devServerURL)
      .waitForElementVisible('body', 1000)
  })

  When('estiver na tela de login', () => {
    return client
      .url(client.globals.devServerURL + '/#/login')
      .waitForElementVisible('#user', 1000)
  })

  Then('deve ter o campo {string} e {string}', (arg1, arg2) => {
    return client.assert.visible('#' + arg1) && client.assert.visible('#' + arg2)
  })
})
