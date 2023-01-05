
const { assert } = require('chai');
const {webdriver,By,wait, WebElement, Key,until} = require('selenium-webdriver');

class BasePage {

        static driver;

        async findElement(selector) {
      
            let s=await selector.split("-->")
            let by_type = s[0]
            let locator = s[1]

            if(by_type == "xpath"){
                await BasePage.driver.wait(until.elementLocated(By.xpath(locator)),10000);
                const element = await BasePage.driver.findElement(By.xpath(locator))
                console.log("ELEMENT IS -->" + element)
                return await element
            }else if(by_type == "css"){
                await BasePage.driver.wait(until.elementLocated(By.css(locator)),10000);
                const element = await BasePage.driver.findElement(By.css(locator))
                return await element

            }
            return null;
        }
        async findElements(selector) {
      
            let s=await selector.split("-->")
            let by_type = s[0]
            let locator = s[1]

            if(by_type == "xpath"){
                await BasePage.driver.wait(until.elementsLocated(By.xpath(locator)),10000);
                const element = await BasePage.driver.findElements(By.xpath(locator))
                console.log("ELEMENT IS -->" + element)
                return await element
            }else if(by_type == "css"){
                await BasePage.driver.wait(until.elementsLocated(By.css(locator)),10000);
                const element = await BasePage.driver.findElements(By.css(locator))
                return await element

            }
            return null;
        }

        async sendInput(selector,keysToSend){
            try{
                const x = await this.findElement(selector).then((ele)=>{
                    ele.sendKeys(keysToSend)
                })
            }catch(err){
                console.log(err)
                assert.fail("Error occured while sending input to element -->" + selector+ "err -->" + err)
            }
          

        }

        async clickElement(selector){
            try{
            await this.findElement(selector).then((ele)=>{
                ele.click()
            })
        }catch(err){
            console.log(err)
            assert.fail("Error occured while clicking element -->" + selector+ "err -->" + err)

        }
            
        }

        async pressEnter(selector){
            try{
                await this.findElement(selector).then((ele)=>{
                    ele.sendKeys(Key.ENTER)
                })
            }catch(err){
                console.log(err)
                assert.fail("Error occured while pressing enter --> "+ selector + "err -->" + err)
            }
          
        }

        async getElementText(selector){
            try{

            
            let ele = await this.findElement(selector)
            let txt = await ele.getText()
            console.log("TXT IS")
            console.log(txt)
            return await txt
            } catch(err){
                console.log(err)
                assert.fail("Error occured while gettinge element text --> "+ selector + "err -->" + err)
            }
        }

        async getElementAttribute(selector,attribute){
            try{

            
            let ele = await this.findElement(selector)
            let attr = await ele.getAttribute(attribute)
            console.log("ATTR IS")
            console.log(attr) 
            return attr
        }catch(err){
            console.log(err)
            assert.fail("Error occured while getting element attribute for --> "+ selector + "err -->" + err)
        }
        }

        async isElementDisplayed(selector){
            try{
                await this.findElement(selector)
                return await true
            }catch(err){
                return await false
            }
        }
        
        async getNumberOfElements(selector){
            try{
                const eles = await this.findElements(selector)
                return await eles.length
            }catch(err){
                await assert.fail("Error occured while fetching element counts of selector --> "+ selector + "err -->" + err)
            }
        }

        
}
module.exports = {BasePage}