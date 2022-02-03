const { assert } = require("chai");
const homePage = require("../pageobjects/home.page");

describe('Home Page', () => {
    it('Valid credentials', async () =>{
        await homePage.open()
        await homePage.clickHomeIcon()
        let url = await browser.getUrl()
        assert.equal(url, 'https://parabank.parasoft.com/parabank/index.htm');
    })
})