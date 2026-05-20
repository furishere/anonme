import express from "express"
import "dotenv/config"
import { authRouter } from "./routes/authRouter.js"
import { connectDb } from "./config/db.js"
import { profileRouter } from "./routes/profileRouter.js"
import { messageRouter } from "./routes/messageRouter.js"
import cors from "cors"
const app = express()

const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cors({
    origin : ["https://anonme.vercel.app",
        "http://localhost:5173"
    ],
    credentials : true
}))

connectDb()


app.use("/uploads", express.static("src/uploads"))
app.use("/api/auth", authRouter)
app.use("/api/profile",profileRouter)
app.use("/api/message",messageRouter)

app.listen(PORT, () => {
    console.log("server running on port", PORT);
});