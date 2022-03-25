const express = require("express")

const app = express()

app.use(express.static('public'))
app.use('/css', express.static(__dirname + "public/css"))
app.use('/img', express.static(__dirname + "public/img"))

//Set Views
app.set("views", "./views")
app.set("view engine", "ejs")


app.get("/", function (req, res) {
    res.render('index')
})


app.listen(8080)
console.log("rodando")