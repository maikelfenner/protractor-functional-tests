describe('demo test', function() {
	
    it('access index page', function() {
        browser.waitForAngularEnabled(false);
        browser.get('https://www.saucedemo.com/');

        expect(browser.getTitle()).toEqual('Swag Labs');
    });
});