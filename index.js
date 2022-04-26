const express = require("express")
const app = express()

app.set('view engine', 'ejs');
app.use(express.static(__dirname));
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }))

// Calculates the BMR of an individual using the Mifflin-St Jeor formula
function basal_metabolic_rate(is_male, height, weight, age) {
    intermediate = (4.536 * weight) + (15.88 * height) - (5 * age);
    if (is_male) {
        return intermediate + 5;
    }
    return intermediate - 161;
}

// TODO: add error checking if activity_level is not within range
function caloric_intake(bmr, activity_level) {
    switch (activity_level) {
        case 1:
            return bmr * 1.2;
        case 2:
            return bmr * 1.375;
        case 3:
            return bmr * 1.55;
        case 4:
            return bmr * 1.725;
        case 5:
            return bmr * 1.9;
    }
}

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", (req, res) => {
    console.log("POST request sent");
    console.log(req.body)
    let gender = (req.body.gender === "Male");
    // let calories = caloric_intake(basal_metabolic_rate())
})

app.listen(3000, () => {
    console.log("listening on port 3000 -> http://localhost:3000/");
});