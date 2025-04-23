import report from "@wdio/allure-reporter"

class testDataUtility{
    async clickElement(elm){
        await elm.waitForClickable({ timeout: 30000 });
        await elm.click();
    }
   
    async getDatafromJson(id, json, dataToGet){
        let idfound = false
        let keyfound = false
        let data = ''
        try {
            for (var key in json) {
                if (json.hasOwnProperty(key)) {
                    if (json[key].id === id) {
                        idfound = true
                        Object.keys(json[key]).forEach(function(ob){
                            if (ob === dataToGet) {
                                keyfound = true
                                data = json[key][ob]
                            }
                        })
                    }
                }
                if(idfound) break
            } 
            if(!idfound) throw new Error ("Test data Error: Id not found in the Json file, please make sure the id is correct. Tried to get " + dataToGet + " from JSON file with id: " + id)
            
            if(!keyfound) throw new Error ("Test data Error: Requested Key is not found for the Id, in the Json file. Please make sure the key is correct. Tried to get " + dataToGet + " from JSON file with id: " + id)
        } catch (error) {
            console.log(error)
            report.addStep(error.message, [error.message], "failed")
        }    
        return data   
    }

}
export default new testDataUtility()