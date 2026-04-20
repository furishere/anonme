import mongoose, { model, Schema } from "mongoose";
import 'dotenv/config'

const connectDB = async () => {
try {
    await mongoose.connect(process.env.MONGODB_URL)

    console.log("MongoDB Connected!")
} catch(e){
    console.log("Connection error", e)
}
}

export default connectDB
