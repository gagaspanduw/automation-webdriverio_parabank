const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegisterPage extends Page {
    get registerFirstNameField() { return $('//*[@id="customer.firstName"]') }
    get registerLastNameField(){ return $('//*[@id="customer.lastName"]'); }
    get registerAddressStreetField(){ return $('//*[@id="customer.address.street"]') }
    get registerCityField(){ return $('//*[@id="customer.address.city"]') }
    get registerStateField(){ return $('//*[@id="customer.address.state"]') }
    get registerZipCodeField(){ return $('//*[@id="customer.address.zipCode"]') }
    get registerPhoneNumberField(){ return $('//*[@id="customer.phoneNumber"]') }
    get registerSsnField(){ return $('//*[@id="customer.ssn"]') }
    get registerUsernameField(){ return $('//*[@id="customer.username"]') }
    get registerPasswordField(){ return $('//*[@id="customer.password"]') }
    get registerConfirmPasswordField(){ return $('//*[@id="repeatedPassword"]') }
    get buttonRegister(){ return $('//*[@value="Register"]') }


    async inputRegisterFirstName(value) {
       await this.registerFirstNameField.setValue(value);
    }

    async inputRegisterLastName(value){
        await this.registerLastNameField.setValue(value)
    }

    async inputRegisterAddressStreet(value){
        await this.registerAddressStreetField.setValue(value)
    }

    async inputRegisterCity(value){
        await this.registerCityField.setValue(value)
    }

    async inputRegisterState(value){
        await this.registerStateField.setValue(value)
    }

    async inputRegisterZipCode(value){
        await this.registerZipCodeField.setValue(value)
    }

    async inputRegisterPhoneNumber(value){
        await this.registerPhoneNumberField.setValue(value)
    }

    async inputRegisterSsn(value){
        await this.registerSsnField.setValue(value)
    }

    async inputRegisterUsername(value){
        await this.registerUsernameField.setValue(value)
    }

    async inputRegisterPassword(value){
        await this.registerPasswordField.setValue(value)
    }

    async inputRegisterConfirmPassword(value){
        await this.registerConfirmPasswordField.setValue(value)
    }

    async clickButtonRegister(){
        await this.buttonRegister.click()
    }

    open() {
        return super.open('register.htm');
    }
}

module.exports = new RegisterPage();
