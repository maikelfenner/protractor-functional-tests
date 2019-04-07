'use strict';

var ProductPage = require('../pages/ProductPage.js');
var ProductsListPage = require('../pages/ProductsListPage.js')

describe('ProductPage scenarios', function() {
    var page;
  
    beforeEach(function() {
      page = new ProductPage();
      page.get();
    })
  
    it('#04 - Voltar para listagem de produtos', function() {
      page.clickBackButton();

      var productsListPage = new ProductsListPage();

      expect(productsListPage.isShoppingCartPresent()).toBe(true);
      expect(productsListPage.getPageTitle()).toEqual('Products');
    });

    it('#05 - Adicionar produto para o carrinho', function() {
      page.clickAddToCartButton();

      expect(page.getProductsInCartBadge().isPresent());
      expect(page.getTotalProductsInCart()).toEqual('1');
    });

    it('#06 - Remover produto do carrinho', function() {
      expect(page.getBtnRemove().isPresent());

      page.clickRemoveFromCartButton();
    
      expect(page.getProductsInCartBadge().isPresent()).toBe(false);
    });
});