import express from "express"

const app = express()

app.use(express.json())

app.get("/",(req, res) => {
    res.send("im here")
})

app.listen(3000, () => 
    console.log("im okay")
)