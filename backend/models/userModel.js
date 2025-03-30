import mongoose from "mongoose"
//import User from '../models/userModels.js'; 

const userSchema = new mongoose.Schema({
    name:{type:String,requiured:true},
email:{type:String,required:true,unique:true},
password:{type:String,required:true},
cartData:{type:Object,default:{}}

},{minimize:false})
const userModel = mongoose.models.user || mongoose.model("user",userSchema);
export default userModel;