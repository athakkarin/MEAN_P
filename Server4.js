const express = require("express")
const royalCalc = require("./royalCalc")


const app = express() 

//middleware 
//bodyparser 
app.use(express.urlencoded({extended:true})) //form-data browser  
app.use(express.json()) // json-data -> ios android 


app.post("/add",royalCalc.add)

app.listen(9999)