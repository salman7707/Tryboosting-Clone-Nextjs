import mongoose from "mongoose"
import { Schema, models, model } from "mongoose"


const NewSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
},{timestamps:true})

const User = models.User1 || model("User1", NewSchema)
export default User;