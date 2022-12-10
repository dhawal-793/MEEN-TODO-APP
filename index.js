const express = require("express")
const bodyParser = require("body-parser");



const todos=[]
const app = express()
const port = 3000;


app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine", "ejs")

app.get("/",(req, res)=> {
    res.render("index");
})
app.post("/",(req, res)=> {
    const todo = req.body.todo;
    todos.push(todo);
    todos.forEach(todo => {
        console.log(todo)
    })
    res.redirect("/")
})


app.listen(port, () => {
    console.log(`Server is Running on Port ${port}`)
})