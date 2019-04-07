'use strict'

var ProductPage = require('./ProductPage.js')

var ProductsListPage = function() {
  var pageTitleLabel = $('div.product_label'),
      shoppingCartElement = $('#shopping_cart_container'),
      products = $$('.inventory_item');

  this.get = function(){
    browser.waitForAngularEnabled(false);
    browser.get('https://www.saucedemo.com/inventory.html');
  }

  this.isShoppingCartPresent = function() {
    return shoppingCartElement.isPresent();
  }      

  this.getPageTitle = function() {
    return pageTitleLabel.getText();
  }

  this.clickFirstProduct = function() {
    var product = products.first();
    product.all(by.tagName('a')).first().click();
    return new ProductPage();
  }
}

module.exports = ProductsListPage;