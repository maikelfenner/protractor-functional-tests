'use strict';

var LoginPage = require('./LoginPage.js');

var CheckoutCompletePage = function() {
  var pageTitleLabel = $('div.subheader'),
      pageHeader = $('h2.complete-header'),
      btnMenu = $('.bm-burger-button button'),
      btnLogout = $('#logout_sidebar_link');

  this.get = function() {
    browser.waitForAngularEnabled(false);
    browser.get('https://www.saucedemo.com/checkout-complete.html');
  }

  this.getPageTitle = function() {
    return pageTitleLabel.getText();
  }

  this.getPageHeaderContent = function() {
    return pageHeader.getText();
  }

  this.clickMenuButton = function() {
    btnMenu.click();
  }

  this.clickLogoutButton = function() {
    btnLogout.click();

    return new LoginPage();
  }
}

module.exports = CheckoutCompletePage;