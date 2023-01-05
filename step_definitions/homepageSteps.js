const { assert } = require('chai')
const{Given, When, Then} = require('cucumber')
const { SearchResultsPageLocators } = require('../locators/searchresultspage')
const {BasePage} = require('../pageobject/basepage')
const { SearchPagePO } = require('../pageobject/searchpage')
const { SearchResultsPO } = require('../pageobject/searchresultspage')
const {ConfigUtils} = require('../utils/configutils')
const basePage = new BasePage()
const searchPage = new SearchPagePO()
const searchResultsPage = new SearchResultsPO()
const configUtils = new ConfigUtils()
Given("User in on google homepage",async function(){
     await BasePage.driver.get(configUtils.getUrl())
     
})

When("User searches for {string}",async function(textSearch){
     await searchPage.enterInputInSearch(textSearch)
})

Then("title should be displayed as {string}", async function(title){
     textOnPage = await searchResultsPage.getTitleFromPage()
     await assert.equal(textOnPage,title)
})

Then("subtitle should be displayed as {string}", async function(subtitle){
     textOnPage = await searchResultsPage.getSubtitleFromPage()
     await assert.equal(textOnPage,subtitle)
})

Then("tabs {string} should be dispalyed",async function(texts){
     console.log(texts)
     text_arr = await texts.split(",")
     console.log(text_arr)

     for(let txt of text_arr){
          let a = await searchResultsPage.isElementDisplayed(txt)
          await assert.isTrue(a, txt+ " is not dispalyed on search results page")
     } 
})

Then("total number of results displayed are {string}",async function(numberofresults){
     noOfResults = await parseInt(numberofresults)
     assert.equal(noOfResults,await searchResultsPage.getTotalNumberOfResults())
})

