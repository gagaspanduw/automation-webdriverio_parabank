const { assert } = require("chai");
const homePage = require("../pageobjects/home.page");

describe('Validation Scenario', () => {
    it('In Home Page, check home button logo navigation url', async () =>{
        await homePage.open()
        await homePage.clickHomeIcon()
        let url = await browser.getUrl()
        assert.equal(url, 'https://parabank.parasoft.com/parabank/index.htm');
    })

    it('In Home Page, check about button logo navigation url', async () =>{
        await homePage.open()
        await homePage.clickAboutIcon()
        let url = await browser.getUrl()
        assert.equal(url, 'https://parabank.parasoft.com/parabank/about.htm');
    })

    it('In Home Page, check contact button logo navigation url', async () =>{
        await homePage.open()
        await homePage.clickContactIcon()
        let url = await browser.getUrl()
        assert.equal(url, 'https://parabank.parasoft.com/parabank/contact.htm');
    })

    it('In Home Page, check about us link menu navigation url', async () =>{
        await homePage.open()
        await homePage.clickContactIcon()
        let url = await browser.getUrl()
        assert.equal(url, 'https://parabank.parasoft.com/parabank/contact.htm');
    })
    it('In Home Page, check services link menu navigation url', async () =>{
        await homePage.open()
        await homePage.clickContactIcon()
        let url = await browser.getUrl()
        assert.equal(url, 'https://parabank.parasoft.com/parabank/contact.htm');
    })

    it('In Home Page, check products link menu navigation url', async () =>{
        await homePage.open()
        await homePage.clickContactIcon()
        let url = await browser.getUrl()
        assert.equal(url, 'https://parabank.parasoft.com/parabank/contact.htm');
    })

    it('In Home Page, check locations link menu navigation url', async () =>{
        await homePage.open()
        await homePage.clickContactIcon()
        let url = await browser.getUrl()
        assert.equal(url, 'https://parabank.parasoft.com/parabank/contact.htm');
    })

    it('In Home Page, check admin page link menu navigation url', async () =>{
        await homePage.open()
        await homePage.clickContactIcon()
        let url = await browser.getUrl()
        assert.equal(url, 'https://parabank.parasoft.com/parabank/contact.htm');
    })

    it('In Home Page, check services readmore button navigation url', async () =>{
        await homePage.open()
        await homePage.clickServicesReadmoreLink()
        let url = await browser.getUrl()
        assert.equal(url, 'https://parabank.parasoft.com/parabank/services.htm');
    })

    it('In Home Page, check news readmore button navigation url', async () =>{
        await homePage.open()
        await homePage.clickNewsReadmoreLink()
        let url = await browser.getUrl()
        assert.equal(url, 'https://parabank.parasoft.com/parabank/news.htm');
    })
})