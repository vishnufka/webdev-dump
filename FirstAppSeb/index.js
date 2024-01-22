const express = require("express")
const path = require("path")
const app = express()
const port = 3000

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

app.get("/", (req, res) => {
    const num = 52
    res.render("home", { num })
})

app.get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params
    res.render("home", { subreddit })
    //res.send(`Welcome to the subreddit: ${subreddit}`)
})

app.get("/search", (req, res) => {
    const { q, fruit } = req.query
    res.send({ q, fruit })
    console.log({ q, fruit })
})

app.get("/cats", (req, res) => {
    res.send("meow")
})

app.get("/dogs", (req, res) => {
    res.send("wooof")
})

app.use(() => {
    console.log("new request received!")
})
