import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema({
    username : {
        type : String,
        unique : true,
        required : true,

    },
    email : {
        type : String,
        required : true,
        lowercase : true,
        trim : true
    },
    password : {
        type: String,
        required : true
    },
    name : {
        type : String,
        trim : true
    },
    profileImage : {
        type : String
    }
},{timestamps : true})

const userModel = model("User", userSchema)

export {userModel}