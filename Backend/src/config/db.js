export const JWT_USER_SECRET = process.env.JWT_USER_SECRET
import mongoose from "mongoose"

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("MongoDB connected")
  } catch (err) {
    console.log("DB error:", err)
  }
}