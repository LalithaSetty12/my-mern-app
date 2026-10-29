const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstname:{type:String, required:true},
    lastname:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    phoneNo:{type:Number, length:10, required:true, unique:true},
    gender:{type:String, required:true},
    role:{type:String, required:true, default:"user"},
    address:{type:String, required:true, default:"N/A"},
    state:{type:String, required:true},
},{timestamps:true})

const usersModel = mongoose.model("users", userSchema)
module.exports = usersModel;