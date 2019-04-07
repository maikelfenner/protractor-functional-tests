'use strict';

var ec = protractor.ExpectedConditions;
var CheckoutTwoPage = require('../pages/CheckoutTwoPage.js');
var CheckoutCompletePage = require('../pages/CheckoutCompletePage.js')

describe('CheckoutTwoPage page scenarios', function() {
    var page;
  
    beforeEach(function() {
      page = new CheckoutTwoPage();
      page.get();
    })
  
    it('#13 - Finalizar compra', function() {
      var checkoutCompletePage = page.clickFinishButton();

      expect(checkoutCompletePage.getPageTitle()).toEqual('Finish');
      expect(checkoutCompletePage.getPageHeaderContent()).toEqual('THANK YOU FOR YOUR ORDER');
    });
});