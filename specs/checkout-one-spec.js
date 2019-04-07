'use strict';

var CheckoutOnePage = require('../pages/CheckoutOnePage.js');

describe('CheckoutOne page scenarios', function() {
    var page;
  
    beforeEach(function() {
      page = new CheckoutOnePage();
      page.get();
    })
  
    it('#11 - Pagamento da compra sem informa código postal', function() {
      page.continue('John', 'Doe', '');

      expect(page.getErrorField().isPresent());
      expect(page.failMessage()).toEqual('Error: Postal Code is required');
    });

    it('#12 - Pagamento da compra com dados válidos', function() {
      var checkoutTwoPage = page.validContinue();
      
      expect(checkoutTwoPage.getPageTitle()).toEqual('Checkout: Overview');
      expect(checkoutTwoPage.getFinishButton().isPresent());
    });
});