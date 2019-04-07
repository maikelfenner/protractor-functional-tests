'use strict';
var ProductsListPage = require('./ProductsListPage.js');
var CheckoutOnePage = require('./CheckoutOnePage.js');

var ShoppingCartPage = function() {
  var pageTitleLabel = $('div.subheader'),
      productsInCartList = $$('.cart_item'),
      btnContinueShopping = element(by.cssContainingText('.btn_secondary', 'Continue Shopping')),
      btnCheckout = $('.checkout_button');

  this.get = function(){
    browser.waitForAngularEnabled(false);
    browser.get('https://www.saucedemo.com/cart.html');
  }

  this.getPageTitle = function() {
    return pageTitleLabel.getText();
  }

  this.getProductsInCartList = function() {
    return productsInCartList;
  }

  this.getFirstProductInCart = function() {
    var product = productsInCartList.first();
    
    return product;
  }

  this.clickContinueShoppingButton = function() {
    btnContinueShopping.click();

    return new ProductsListPage();
  }

  this.clickCheckoutButton = function() {
    btnCheckout.click();

    return new CheckoutOnePage();
  }
}

module.exports = ShoppingCartPage;