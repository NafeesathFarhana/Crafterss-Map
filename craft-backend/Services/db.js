//node + mongoDB connection (mongoose is used to connect node and mongoDB)

//import mongoose
const mongoose = require('mongoose');

//connect the mongodb
mongoose.connect('mongodb://localhost:27017/Crafty')


//create a model and schema for the collection(model-collection name/schema-id and details)
const User = mongoose.model('User',{  // user - model
    name:String,
    email:String,       //schemas-it is a collections
    passwrd:String,
})
 
//table for products 
const products = mongoose.model('products',{
    name:String,
    description:String,
    supplies:String,
    productimage:String,
    userId:String
   
   



})

const Knitproducts = mongoose.model('knitproducts',{
    name1:String,
    description1:String,
    supplies1:String,
    productimage1:String,
    userId:String
   
   



})


module.exports={
    User,
    products,
    Knitproducts
}