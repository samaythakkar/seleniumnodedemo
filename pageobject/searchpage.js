const { BasePage } = require("./basepage");
const {SearchPageLocators} = require("../locators/searchpage")

class SearchPagePO extends BasePage{

    searchPageLocators = new SearchPageLocators()

    async enterInputInSearch(search_text){
        await this.sendInput(this.searchPageLocators.search_input,search_text)
        await this.pressEnter(this.searchPageLocators.search_input)
    }

    async clickSearchBtn(){
        await this.clickElement(this.searchPageLocators.search_btn)
    }
    
}
module.exports = {SearchPagePO}