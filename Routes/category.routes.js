const express = require("express")
const categoryController = require("./Controller/categoryController")

const route = express.Router()



route.post("/category",categoryController.addCategory)
route.get("/categories",categoryController.getAllCategory)


module.exports = route