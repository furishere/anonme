import express from "express"
import "dotenv/config"
import { authRouter } from "./routes/authRouter.js"
import { connectDb } from "./config/db.js"
import { profileRouter } from "./routes/profileRouter.js"
import { messageRouter } from "./routes/messageRouter.js"
const app = express()

app.use(express.json())

connectDb()
app.use("/api/auth", authRouter)
app.use("/api/profile",profileRouter)
app.use("/api/message",messageRouter)

app.listen(3000, () => {
    console.log("server running on port")
})