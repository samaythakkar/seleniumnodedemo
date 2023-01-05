const { SearchResultsPageLocators } = require("../locators/searchresultspage")
const { BasePage } = require("./basepage");

class SearchResultsPO extends BasePage{

    searchResultsLocators = new SearchResultsPageLocators()

    async getTitleFromPage(){
        return await this.getElementText(this.searchResultsLocators.title_on_page)
    }

    async getSubtitleFromPage(){
        return await this.getElementText(this.searchResultsLocators.subtitle_on_page)
    }

    async isTextDisplayedOnPage(txt){
        return await this.isElementDisplayed(this.searchResultsLocators.text_loxcators.replace("<text_to_replace>",txt))
    }

    async getTotalNumberOfResults(){
        return await this.getNumberOfElements(this.searchResultsLocators.total_results_on_page)
    }
}

module.exports = {SearchResultsPO}