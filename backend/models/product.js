const mongoose=require("mongoose");

const ProductSchema=new mongoose.Schema({
    name:{ type:String, required:true},
    brand:{type:String, required:true},
    cost:{type:Number, required:true},
    image:{type:String, required:true},
    about:{type:String, required:true},
    reviews:{type:String, required:true},
    quantity:{type:String, required:true},
    discount:{type:String, required:true},
},{timestamps:true})

module.exports=mongoose.model("products",ProductSchema);