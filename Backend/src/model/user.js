import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    email : {
        type : String,
        required : true,
        trim :  true,
        unique : true,
        lowercase : true
    },
    password :{
        type : String,
        required : true,
        trim : true,
    },
    username : {
        type : String,
        required : true,
        trim : true,
        unique : true,
        lowercase : true,
    },
    bio : {
        type : String,
        trim : true,
        default : ""
    },
    avatar : {
        type : String,
        default : ""
    }
},{
    timestamps : true
})

export const User = mongoose.model("User", userSchema)