import express from "express"
import 'dotenv/config'
import connectDB  from "./config/db.js"

const app = express()
app.use(express.json())

connectDB()

app.use("/api/auth",)

app.listen(8000, () => {
    console.log("im on")
    
})
