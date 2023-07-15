const CsvReaderService = require("../Services/csvreader")
const IndusteryModel = require("../Model/industryModel")

module.exports.uploadIndustry = async function(req,res){
 
    let allInudstry = await CsvReaderService.uploadIndustry()

    IndusteryModel.insertMany(allInudstry).then(data=>{
        res.json({data:data,msg:"Industery Uploaded",status:200})
    })
   
}