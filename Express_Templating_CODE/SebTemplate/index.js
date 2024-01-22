const express = require("express")
const path = require("path")
const fs = require("fs")
const data = require("./data.json")
const app = express()
const port = 3000

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))

app.use(express.static(path.join(__dirname, "/public")))

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

app.get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params
    const subredditData = data[subreddit]
    //const data = getJsonData(subreddit)

    if (subredditData) {
        res.render("subreddit", { data: subredditData })
    } else {
        res.render("notfound", { subreddit })
    }
})

app.get("/", (req, res) => {
    res.send("<h1>Welcome to the home page!</h1>")
})

app.get("*", (req, res) => {
    res.send("<h1>There's nothing here!</h1>")
})

function getJsonData(table) {
    const data = fs.readFileSync("data.json", "utf8")
    const json = JSON.parse(data)
    return json[table]
}
//OR SEE REQUIRE ABOVE
