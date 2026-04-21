import mongoose, { model, Schema } from "mongoose";

const messageSchema = new Schema({
    text : {
        type : String,
        trim : true,
    },
    image :{
        type : String,
        trim : true,
        default : null
    },
    reply :{
        type : String,
        trim : true,
        default : null
    },
    userId : {
        type : Schema.Types.ObjectId,
        ref : "User",
        required : true,
        index  : true
    }
}, {timestamps : true})

// timestamps: true → auto creates createdAt, updatedAt

const messageModel = model("Message", messageSchema)

export {messageModel}