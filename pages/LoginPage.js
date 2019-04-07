'use strict';
var ProductsListPage = require('./ProductsListPage.js')

var LoginPage = function(){
  var loginButton = $('input[type="submit"]'),
      usernameInput = $('#user-name'),
      passwordInput = $('#password'),
      errorField = $('h3');

  this.get = function() {
    browser.waitForAngularEnabled(false);
    browser.get('https://www.saucedemo.com/');
  }

  this.getUsernameInput = function() {
    return usernameInput;
  }

  this.getPasswordInput = function() {
    return passwordInput;
  }

  this.getErrorField = function() {
    return errorField;
  }

  this.login = function (username, password) {
    usernameInput.sendKeys(username)
    passwordInput.sendKeys(password);
    loginButton.click();
  }

  this.validLogin = function() {
    usernameInput.sendKeys('standard_user')
    passwordInput.sendKeys('secret_sauce');
    loginButton.click();

    return new ProductsListPage();
  }

  this.failMessage = function() {
    return errorField.getText();
  }
}

module.exports = LoginPage;