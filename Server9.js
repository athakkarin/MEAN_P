const express = require("express")
const app = express()
const productRoute = require("./Routes/product.routes")
const categoryRoute = require("./Routes/category.routes")
const mongoose = require("mongoose")
const categoryController = require("./Controller/categoryController")
 
app.use(express.urlencoded({extended:true}))
app.use(express.json())



//product 
app.use("/admin",productRoute)


//category
app.use("/admin",categoryRoute)


//http://localhost:9999/admin/


//db
mongoose.connect("mongodb://127.0.0.1:27017/meanp").then( () => {
    console.log("dbConnected...");
})

app.listen(9999)