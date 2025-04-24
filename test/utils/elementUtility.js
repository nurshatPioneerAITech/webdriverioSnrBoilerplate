
class elementUtility{
    async clickElement(elm){
        await elm.waitForClickable({ timeout: 30000 });
        await elm.click();
    }
    
    async enterText(elm, value){
        await elm.waitForDisplayed({ timeout: 30000 });
        await elm.setValue(value);
    }

    async waitForAnElementToLoad(elm){
        await elm.waitForClickable({ timeout: 30000 });
    }

    async elementIsDisplayed(elm){
        await elm.waitForDisplayed({ timeout: 10000 });
        return await elm.isDisplayed()
    }

    async selectValueFromDropdown(elm, drpdownOption) {
        const drpdwn = await elm
        await this.waitForAnElementToLoad(drpdwn)
        await drpdwn.click()
        const options = await $("//div[contains(@class, 'select__menu-list css')]/div[.='"+drpdownOption+"']")
        await this.waitForAnElementToLoad(options)
        await options.click()
    }

    async selectValueFromMultiSelectDropdown(elm, drpdownOption) {
        const drpdwn = await elm
        await this.waitForAnElementToLoad(drpdwn)
        await drpdwn.click()
        const options = await $("//ul[@role='listbox']/li[.='"+drpdownOption+"']")
        await this.waitForAnElementToLoad(options)
        await options.click()
    }
    
}
export default new elementUtility()