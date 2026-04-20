import mongoose, { model, Schema } from "mongoose";

const messageSchem = new Schema({
    text : {
        type : String
    },
    image :{
        type : String,
    },
    userId : {
        type : Schema.Types.ObjectId,
        ref : "User",
        required : true
    }
}, {timestamps : true})

// timestamps: true → auto creates createdAt, updatedAt

const messageModel = model("Message", messageSchem)

export {messageModel}