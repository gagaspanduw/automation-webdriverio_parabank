const Page = require('./page');

class AboutPage extends Page {
    get inputUsername() {
        return $('#username');
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open() {
        return super.open('about.htm');
    }
}

module.exports = new AboutPage();
