import express from "express"
import 'dotenv/config'
import connectDB  from "./config/db.js"
import authrouter from "./routes/authRoutes.js"
import { userRouter } from "./routes/profileRoutes.js"
import { messageRouter } from "./routes/messageRoutes.js"

const app = express()
app.use(express.json())

connectDB()

app.use("/api/auth", authrouter)
app.use("/api/user", userRouter)
app.use("/api/user", messageRouter)

app.listen(8000, () => {
    console.log("im on")
    
})
