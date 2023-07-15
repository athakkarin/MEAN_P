const fs = require("fs")
const CsvReader = require("csv-reader");
const IndustryModel = require("../Model/industryModel")
const EquityModel = require("../Model/equityModel");


function readFile() {

    let myfile = fs.createReadStream("./Seed/ind_nifty50list.csv", "utf8") // fopen("data.txt","r") 

    myfile
        .pipe(new CsvReader({ parseNumbers: true, parseBooleans: true, trim: true }))
        .on('data', function (row) {
            console.log('A row arrived: ', row[0]);
        })
        .on('end', function () {
            console.log('No more rows!');
        });

}
 
module.exports.uploadIndustry = async function(){
     
    let industryArray = []
    let myFile = fs.createReadStream("./Seed/ind_nifty50list.csv","utf8")
    let myDataFromDb =[]

    IndustryModel.find().then(data=>{
        myDataFromDb = data
  
    })
    
    let promise = new Promise((resolve,reject)=>{
        myFile.pipe(new CsvReader())
        .on('data', function (row) {
            if(industryArray.indexOf(row[1].toLowerCase()) == -1 ){ 
                industryArray.push(row[1].toLowerCase()) 
            }
        })
        .on('end', function () {
            console.log(industryArray);
            console.log("\n"+industryArray.length);
            let industryJson = []

            console.log("dbLength ",myDataFromDb.length);
            console.log("****"+myDataFromDb); 


            for(i=0;i<myDataFromDb.length;i++){
                if(industryArray.indexOf(myDataFromDb[i].name.toLowerCase()) != -1 ){ 
                    delete industryArray[industryArray.indexOf(myDataFromDb[i].name)]   

                }
            }
            industryArray.forEach(item=>industryJson.push({"name":item}))
            console.log("===>");
            console.log(industryJson);
            resolve(industryJson)
        })
    })
    let data = await promise;
    console.log("The End")
    return data;
} 



module.exports.uploadEquity = async function(){
    //seed ind_nifty50list.csv 
    let eqArray = []  // {name,isin,industry:5hb6j54h6j5hj,XXXX,XXX} 
    let myFile = fs.createReadStream("./seed/ind_nifty50list.csv","utf8")
    let industryDb  = []   // [ {name,_id,_v },{name,_id,_v},... ]
    let equityDb = [] 

    // industry -> db all 
    //select * from industry 
    IndustryModel.find().then(data=>{
        industryDb = data; 
    })

    await EquityModel.find({},{_id:0,name:1}).then(data=>{
        data.forEach(item=>equityDb.push(item.name))
        console.log("equityDb");
        console.log(equityDb);
    })

    let promise = new Promise((resolve,reject)=>{
        myFile.pipe(new CsvReader())
        .on('data',function(row){

                let industryName = row[1] // id -> industryDb
                console.log("equityDb");
                console.log(equityDb);  // [x,y,z,f,gh]
            
                for(let i=0;i<industryDb.length;i++){
                    if(industryDb[i].name.toLowerCase() == industryName.toLowerCase()   && equityDb.indexOf(row[0].toLowerCase()) == -1 ){         
                        let eq = {name:row[0],symbol:row[2],isin:row[4],industryId:industryDb[i]._id} 
                        eqArray.push(eq); 
                    }
                }

                
                               
        })
        .on('end',function(){
               
            resolve(eqArray) //return 
        })     
    })
   let data = await promise;   
    console.log("THE END");
    return data;
}