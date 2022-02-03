const { assert } = require("chai");
const loginPage = require("../pageobjects/login.page");

describe('Login Scenario', () => {
    it('Valid credentials', async () =>{
        await loginPage.open()
        await loginPage.login('admin', 'admin')
        url = await browser.getUrl()
        assert.equal(url, 'https://parabank.parasoft.com/parabank/overview.htm');
        await loginPage.logout()
    })
    it('Empty username', async () =>{
        await browser.url(browser.options.baseUrl)
        await loginPage.login('', 'admin')
        let url = await browser.getUrl()
        assert.equal(url, 'https://parabank.parasoft.com/parabank/login.htm');
        let errors = await $('.error')
        assert.equal(await errors.getText(), 'Please enter a username and password.')
    })
    it('Empty password', async () =>{
        await browser.url(browser.options.baseUrl)
        await loginPage.login('admin', '')
        let url = await browser.getUrl()
        assert.equal(url, 'https://parabank.parasoft.com/parabank/login.htm');
        let errors = await $('.error')
        assert.equal(await errors.getText(), 'Please enter a username and password.')
    })
    it('Login without network', async () =>{
        await loginPage.open()
        await browser.pause(3000)
        //Turn off connection
        await browser.throttle({
            offline: true,
            downloadThroughput: 0,
            uploadThroughput: 0,
            latency: 1
        })
        await loginPage.login('admin', 'admin')
        url = await browser.getUrl()
        assert.equal(url, 'https://parabank.parasoft.com/parabank/login.htm');
        //Turn on connection
        await browser.throttle({
            offline: false,
            latency: 0,
            downloadThroughput: -1,
            uploadThroughput: -1
        })
        await loginPage.open()
    })
})