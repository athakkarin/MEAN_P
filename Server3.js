const express = require("express")
const order = require("./Order")



const app = express() 

app.get("/welcome",function(req,res){
    res.end("Welcome")
})

app.get("/vieworders",order.viewOrders)
app.get("/vieworderbyid",order.viewOrderById)
app.post("/view",order.viewOrderById)



app.listen(9999)