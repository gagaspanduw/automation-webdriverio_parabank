const Page = require('./page');

class HomePage extends Page {
    get flashAlert() {
        return $('#flash');
    }

    get homeIconButton() {
        return $('.home')
    }

    get aboutIconButton() {
        return $('.aboutus')
    }

    get contactIconButton() {
        return $('.contact')
    }

    get parabankLogo() {
        return $('//*[@title="ParaBank"]')
    }

    get servicesReadmore() {
        return $('//*[@id="rightPanel"]/p[1]/a')
    }

    get newsReadmore() {
        return $('//*[@id="rightPanel"]/p[2]/a')
    }

    async clickParaBankLogo() {
        await this.parabankLogo.click()
    }

    async clickHomeIcon() {
        await this.homeIconButton.click()
    }

    async clickAboutIcon() {
        await this.aboutIconButton.click()
    }

    async clickContactIcon() {
        await this.contactIconButton.click()
    }

    async clickAboutUsLink() {
        await linkText('About Us').click()
    }

    async clickServicesLink() {
        await linkText('Services').click()
    }

    async clickProductsLink() {
        await linkText('Products').click()
    }

    async clickLocationsLink() {
        await linkText('Products').click()
    }

    async clickAdminPageLink() {
        await linkText('Products').click()
    }

    async clickServicesReadmoreLink() {
        await this.servicesReadmore.click()
    }

    async clickNewsReadmoreLink() {
        await this.newsReadmore.click()
    }
    
    open() {
        return super.open('');
    }
}

module.exports = new HomePage();
