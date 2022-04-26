const express = require("express")
const app = express()

app.set('view engine', 'ejs');
app.use(express.static(__dirname));
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", (req, res) => {
    console.log("POST request sent");
    
})

app.listen(3000, () => {
    console.log("listening on port 3000 -> http://localhost:3000/");
});