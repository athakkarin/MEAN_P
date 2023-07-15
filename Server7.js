const express = require("express")
const mongoose = require("mongoose")
const productController = require("./Controller/productControllerDb")
const categoryController = require("./Controller/categoryController")
const industryController = require("./Controller/industryController")
const equityController = require("./Controller/equityController")

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

let dbUrl = "mongodb+srv://root:arootmn@cluster0.uyf4xdb.mongodb.net/?retryWrites=true&w=majority"
// let dbUrl = "mongodb://127.0.0.1:27017/meanp"

mongoose.connect(dbUrl).then( () => {
    console.log("Db connected...")
})

// Product Routes 
app.post("/addproduct2",productController.addProduct)
app.get("/products",productController.getAllProducts)
app.get("/product/:productId",productController.getProductById)
app.delete("/product/:productId",productController.deleteProductById)
app.post("/products/filter",productController.filterProducts)
app.put("/product",productController.updateProduct)


//Category Routes
app.post("/category",categoryController.addCategory)
app.get("/categories",categoryController.getAllCategory)


//industry Routes 
app.post("/industry",industryController.uploadIndustry)


//equity routes
app.post("/equity",equityController.uploadEquity)
app.get("/equity",equityController.getAllEquity)

app.listen(9999) 