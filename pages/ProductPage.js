'use strict';

var ProductPage = function() {
  var productImage = $('img.inventory_details_img'),
      productName = $('.inventory_details_name'),
      productDescription = $('#inventory_details_desc'),
      productPrice = $('.inventory_details_price'),
      productsInCartBadge = $('.shopping_cart_badge'),
      btnAddToCart = $('button.btn_primary.btn_inventory'),
      btnRemove = $('button.btn_secondary.btn_inventory'),
      btnBack = $('button.inventory_details_back_button');

  this.get = function(){
    browser.waitForAngularEnabled(false);
    browser.get('https://www.saucedemo.com/inventory-item.html?id=4');
  }

  this.getProductImage = function() {
    return productImage;
  }

  this.getProductName = function() {
    return productName;
  }

  this.getProductDescription = function() {
    return productDescription;
  }

  this.getBtnRemove = function() {
    return btnRemove;
  }

  this.getProductsInCartBadge = function() {
    return productsInCartBadge;
  }

  this.getTotalProductsInCart = function() {
    return productsInCartBadge.getText();
  }

  this.clickAddToCartButton = function() {
    btnAddToCart.click();
  }

  this.clickRemoveFromCartButton = function() {
    btnRemove.click();
  }

  this.clickBackButton = function() {
    btnBack.click();
  }
}

module.exports = ProductPage;