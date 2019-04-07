'use strict'

var ProductsListPage = function() {
  var pageTitleLabel = $('div.product_label'),
      shoppingCartElement = $('#shopping_cart_container');

  this.isShoppingCartPresent = function() {
    return shoppingCartElement.isPresent();
  }      

  this.getPageTitle = function() {
    return pageTitleLabel.getText();
  }
}

module.exports = ProductsListPage;