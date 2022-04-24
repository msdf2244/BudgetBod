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

function main() {
    console.log(caloric_intake(basal_metabolic_rate(1, (6 * 12) + 3, 240, 20), 2));
}

main()