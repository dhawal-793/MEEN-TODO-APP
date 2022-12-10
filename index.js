const express = require("express")

const app = express()
const port = 3000;

app.get("/",(req, res)=> {
    res.send("Hello from Home Route")
})


app.listen(port, () => {
    console.log(`Server is Running on Port ${port}`)
})