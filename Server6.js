const express = require("express")
const productController = require("./Controller/productController")

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.post("/addproduct",productController.addProduct)
app.get("/getallproducts",productController.getAllProducts)
app.delete("/deleteproductbyid/:productId",productController.deleteProductById)


app.listen(9999,function(){
    console.log("Server Started On 9999");
})