'use strict';

var ShoppingCartPage = require('../pages/ShoppingCartPage.js');
var ProductPage = require('../pages/ProductPage.js');

describe('ShoppingCart page scenarios', function() {
    var page;
  
    beforeEach(function() {
      page = new ShoppingCartPage();
      page.get();
    });
  
    it('#07 - Ver produtos no carrinho de compras - vazio', function() {
      expect(page.getPageTitle()).toEqual('Your Cart');  
      expect(page.getProductsInCartList().isPresent()).toBe(false);
    });

    it('#08 - Continuar comprando', function() {
      var productsListPage = page.clickContinueShoppingButton();

      expect(productsListPage.isShoppingCartPresent()).toBe(true);
      expect(productsListPage.getPageTitle()).toEqual('Products');
    });

    it('#09 - Ver produtos no carrinho de compras - com produtos', function() {
      var productPage = new ProductPage();
      productPage.get();
      productPage.clickAddToCartButton();

      page.get();

      expect(page.getProductsInCartList().isPresent()).toBe(true);

      var firstProductInCart = page.getFirstProductInCart();
      
      expect(firstProductInCart.all(by.css('.cart_quantity')).first().getText()).toEqual('1');
    });

    it('#10 - Proceder para pagamento da compra', function() {
      var checkoutOnePage = page.clickCheckoutButton();
      
      expect(checkoutOnePage.getPageTitle()).toEqual('Checkout: Your Information');
    });
});