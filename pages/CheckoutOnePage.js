'use strict';

var CheckoutTwoPage = require('./CheckoutTwoPage.js');

var CheckoutOnePage = function() {
  var pageTitleLabel = $('div.subheader'),
      continueButton = $('input[type="submit"]'),
      firstNameInput = $('#first-name'),
      lastNameInput = $('#last-name'),
      zipCodeInput = $('#postal-code'),
      errorField = $('h3');

  this.get = function() {
    browser.waitForAngularEnabled(false);
    browser.get('https://www.saucedemo.com/checkout-step-one.html');
  }

  this.getPageTitle = function() {
    return pageTitleLabel.getText();
  }

  this.getFirstNameInput = function() {
    return firstNameInput;
  }

  this.getLastNameInput = function() {
    return lastNameInput;
  }

  this.getZipCode = function() {
    return zipCode;
  }

  this.getErrorField = function() {
    return errorField;
  }

  this.continue = function (firstName, lastName, zipCode) {
    firstNameInput.sendKeys(firstName)
    lastNameInput.sendKeys(lastName);
    zipCodeInput.sendKeys(zipCode);
    continueButton.click();
  }

  this.validContinue = function() {
    firstNameInput.sendKeys('John')
    lastNameInput.sendKeys('Doe');
    zipCodeInput.sendKeys('123456')
    continueButton.click();

    return new CheckoutTwoPage();
  }

  this.failMessage = function() {
    return errorField.getText();
  }
}

module.exports = CheckoutOnePage;