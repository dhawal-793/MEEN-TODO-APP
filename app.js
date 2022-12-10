// Imports
const express = require("express")
const bodyParser = require("body-parser");
const mongoose = require("mongoose")
const date = require(__dirname + "/date")
require("dotenv").config()

// Constants
const todos = []
const app = express()
const port = process.env.PORT || 3000;
const today = date.getDay();
const mongo_url = process.env.MONGO_URL

// App Methods
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + "/public"))
app.set("view engine", "ejs")


// Database

mongoose.connect(mongo_url, { useNewUrlParser: true }, (err) => {
    if (err) throw err;
    console.log("DB Connected successfully");
});

const itemSchema = {
    name: String
}
const Item = mongoose.model("Item", itemSchema);


// Routes
app.get("/", (req, res) => {
    Item.find({}, (err, items) => {
        if (err) throw (err)

        res.render("list", { listTitle: today, todos: items });
    })
    // res.render("list", { "listTitle": today, "todos": todos });
})
app.post("/", (req, res) => {
    const todo = req.body.todo;
    const item = new Item({
        name: todo
    })
    item.save();
    res.redirect("/")
})

app.post("/delete", (req, res) => {
    const todo_id = req.body.deleteTodo;
    console.log(todo_id)
    Item.findByIdAndRemove(todo_id, (err) => {
        err ? console.log(err) : console.log("Successfully Deleted todo with id " + todo_id)
    })
    res.redirect("/")
})



app.listen(port, () => {
    console.log(`Server is Running on Port ${port}`)
})

