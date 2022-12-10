// Imports
const express = require("express")
const bodyParser = require("body-parser");
const date = require(__dirname + "/date")


// Constants
const todos = []
const app = express()
const port = process.env.PORT || 3000;
const today = date.getDay();

// App Methods
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + "/public"))
app.set("view engine", "ejs")


// Routes
app.get("/", (req, res) => {
    res.render("list", { "listTitle": today, "todos": todos });
})
app.post("/", (req, res) => {
    const todo = req.body.todo;
    todos.push(todo);
    res.redirect("/")
})


app.listen(port, () => {
    console.log(`Server is Running on Port ${port}`)
})