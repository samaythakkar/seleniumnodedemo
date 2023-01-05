const {AfterStep, BeforeStep,Before,BeforeAll, After, Status, setDefaultTimeout} = require('cucumber');
const {Builder, Browser, By, Key, until} = require( 'selenium-webdriver');
const {BasePage} = require('../../pageobject/basepage')
BeforeAll( function(){
      console.log("THIS IS BEFORE ALL EXECUTED");
});


Before({timeout: 2 * 50000},async function(){
      const driver = await new Builder().forBrowser(Browser.CHROME).build();
      BasePage.driver = driver
      setDefaultTimeout(30 * 1000);

});

After({timeout: 2*5000},async function(testCase){
      var me = await this;

    if (testCase.result.status === Status.FAILED) {
         await BasePage.driver.takeScreenshot().then(async function(screenshot) {
             await me.attach(screenshot, "image/png");
        });
    }

 BasePage.driver.quit()
})