fi = require("../config.json")
class ConfigUtils{

    async getUrl(){
        return await fi.url
    }

}

module.exports = {ConfigUtils}