const express = require("express")
const sessionController = require("./Controller/sessionController")
const app = express()

 
app.use(express.urlencoded({extended:true}))
app.use(express.json())


//controller 
app.post("/signup",sessionController.signup) 
app.get("/getallusers",sessionController.getAllUsers)

app.listen(9999)