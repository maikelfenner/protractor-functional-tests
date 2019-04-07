'use strict';

var CheckoutCompletePage = require('./CheckoutCompletePage.js');

var CheckoutTwoPage = function() {
  var pageTitleLabel = $('div.subheader'),
      btnFinish = element(by.cssContainingText('.btn_action.cart_button', 'FINISH'));

  this.get = function() {
    browser.waitForAngularEnabled(false);
    browser.get('https://www.saucedemo.com/checkout-step-two.html');
  }

  this.getPageTitle = function() {
    return pageTitleLabel.getText();
  }

  this.getFinishButton = function() {
    return btnFinish;
  }

  this.clickFinishButton = function() {
    btnFinish.click();

    return new CheckoutCompletePage();
  }  
}

module.exports = CheckoutTwoPage;