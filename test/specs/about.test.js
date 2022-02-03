const { assert } = require("chai");
const aboutPage = require("../pageobjects/about.page");

describe('About Page Test', () => {
    it('Valid url', async () =>{
        await aboutPage.open()
        url = await browser.getUrl()
        assert.equal(url, 'https://parabank.parasoft.com/parabank/about.htm');
    })
})