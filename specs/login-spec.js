'use strict';

var LoginPage = require('../pages/LoginPage.js');

describe('LoginPage scenarios', function() {
    var page;
  
    beforeEach(function() {
      page = new LoginPage();
      page.get();
    })
  
    it('#01 - Login com usuário ou senha inválido', function() {
      page.login('standard_user', '123456');

      expect(page.getErrorField().isPresent());
      expect(page.failMessage()).toEqual('Epic sadface: Username and password do not match any user in this service');
    });

    it('#02 - Login com usuário e senha válidos', function() {
      var productsListPage = page.validLogin();
      
      expect(productsListPage.isShoppingCartPresent()).toBe(true);
      expect(productsListPage.getPageTitle()).toEqual('Products');
    });
});