import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema({
    userId : {
        type  : Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    text : {
        type : String,
        trim : true
    },
    reply : {
        type : String,
        trim : true,
        default : null
    }
},{
    timestamps : true
})

export const Message = mongoose.model("Message", messageSchema)