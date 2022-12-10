const express = require("express")
const bodyParser = require("body-parser");



const todos=[]
const app = express()
const port = process.env.PORT || 3000;
const date = new Date();
const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
}
const today=date.toLocaleDateString("en-us",options)


app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname+"/public"))
app.set("view engine", "ejs")



app.get("/",(req, res)=> {
    res.render("list",{"listTitle":today,"todos":todos});
})
app.post("/",(req, res)=> {
    const todo = req.body.todo;
    todos.push(todo);
    res.redirect("/")
})

app.listen(port, () => {
    console.log(`Server is Running on Port ${port}`)
})