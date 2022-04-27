const express = require("express")
const app = express()
const recipes = require("./recipes.json")

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

async function filter_recipes(recommended_calories, budget) {
    let MAX_RECIPES = 10;
    let selected_recipes = []
    let count = 0;
    console.log(Object.keys(recipes));
    for (var key of Object.keys(recipes)) {
        let current = {}
        console.log(recipes[key]);
        let cal = recipes[key].calories;
        let price = recipes[key].price;
        console.log(cal, price);
        if (cal < recommended_calories && price < budget) {
            current["name"] = recipes[key].name;
            current["calories"] = recipes[key].calories;
            current["img_path"] = recipes[key].img_path;
            selected_recipes.push(current);
            count++;
        }
        if (count === MAX_RECIPES) {
            break;
        }
    }
    return selected_recipes
}

app.post("/", async (req, res) => {
    let is_male = req.body.gender === "Male";
    let height = parseInt(req.body.inches) + (parseInt(req.body.feet) * 12);
    let weight = parseInt(req.body.weight);
    let age = parseInt(req.body.age);

    let bmr = basal_metabolic_rate(is_male, height, weight, age);
    let calories = caloric_intake(bmr, parseInt(req.body.activity_level));
    let recommended_calories = calories / 3;
    let budget = parseInt(req.body.budget) / 90;
    let filtered_recipes = await filter_recipes(recommended_calories, budget);
    res.render("./recipes.ejs", {recipes: filtered_recipes});
})

app.post("/recipe_selection", (req, res) => {
    console.log("recipe selection POSTED");
});

app.listen(3000, () => {
    console.log("listening on port 3000 -> http://localhost:3000/");
});