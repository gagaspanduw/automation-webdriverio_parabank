/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    // open(path) {
    //     return browser.url(`https://the-internet.herokuapp.com/${path}`)
    // }

    get inputUsernameField() {
        return $('//*[@name="username"]')
    }

    get inputPasswordField() {
        return $('//*[@name="password"]')
    }

    get buttonLogin() {
        return $('//*[@value="Log In"]')
    }

    async logout() {
        // await this.linkText('Log Out').waitForExist()
        await this.linkText('Log Out').click()
        console.log('Log out')
    }

    async login(username, password) {
        // await browser.browser.elementSendKeys(elementId, text, value)
        await this.inputUsernameField.setValue(username);
        await this.inputPasswordField.setValue(password);
        await this.buttonLogin.click();
    }

    linkText(text) {
        return $(`=${text}`)
    }

    open(path) {
        return browser.url(`https://parabank.parasoft.com/parabank/${path}`)
    }
}
