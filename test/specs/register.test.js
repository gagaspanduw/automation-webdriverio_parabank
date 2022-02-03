const { assert } = require("chai");
const { generateRandomString } = require("../../utils/dataGenerators");
const registerPage = require("../pageobjects/register.page");

describe('Register Page', () => {
    it('Valid register', async () =>{
        await registerPage.open()
        await registerPage.inputRegisterFirstName('firstname')
        await registerPage.inputRegisterLastName('lastname')
        await registerPage.inputRegisterAddressStreet('Address Street')
        await registerPage.inputRegisterCity('Adress City')
        await registerPage.inputRegisterState('Adress State')
        await registerPage.inputRegisterZipCode('12345')
        await registerPage.inputRegisterPhoneNumber('0123456789')
        await registerPage.inputRegisterSsn('Ssn')
        await registerPage.inputRegisterUsername('')
        await registerPage.inputRegisterPassword('password')
        await registerPage.inputRegisterConfirmPassword('password')
        await registerPage.clickButtonRegister()
        let url = await browser.getUrl()
        // assert.equal(url, 'https://parabank.parasoft.com/parabank/register.htm');
        assert.equal(await $('=Your account was created successfully. You are now logged in.').getText(), 'Your account was created successfully. You are now logged in.');
        console.log(generateRandomString)
    })
})