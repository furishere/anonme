import express from "express"
import "dotenv/config"
import { authRouter } from "./routes/authRouter.js"
import { connectDb } from "./config/db.js"
import { profileRouter } from "./routes/profileRouter.js"
import { messageRouter } from "./routes/messageRouter.js"
import cors from "cors"
const app = express()

app.use(express.json())
app.use(cors({
    origin : "https://anonme.vercel.app/",
    credentials : true
}))

connectDb()
app.use("/uploads", express.static("src/uploads"))
app.use("/api/auth", authRouter)
app.use("/api/profile",profileRouter)
app.use("/api/message",messageRouter)

app.listen(3000, () => {
    console.log("server running on port")
})