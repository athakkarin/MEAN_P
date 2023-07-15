const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ProductSchema = new Schema({
  productName: String,
  price: Number,
  qty: Number,
  categoryId :{
    type:mongoose.Schema.Types.ObjectId ,
    ref:"Category"
  }  
});


const ProductModel = mongoose.model('Product', ProductSchema)

module.exports = ProductModel