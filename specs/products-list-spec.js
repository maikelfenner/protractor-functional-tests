'use strict';

var ProductsListPage = require('../pages/ProductsListPage.js');

describe('ProductsListPage scenarios', function() {
    var page;
  
    beforeEach(function() {
      page = new ProductsListPage();
      page.get();
    })
  
    it('#03 - Visualizar detalhes de produto', function() {
      var productPage = page.clickFirstProduct();

      expect(productPage.getProductImage().isPresent);
      expect(productPage.getProductName().isPresent);
      expect(productPage.getProductDescription().isPresent);
    });
});