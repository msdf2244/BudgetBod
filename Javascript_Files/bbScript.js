/* 
    The goal of this is to allow the navigation between the pages while also
    filling in the necessary information for each page to be displayed (i.e.
    nutritional information, instructions, ingredients, and prices)
 */

const zero = 0;

fetch('recipes.json')
    .then(function (response) {return response.json();})
    .then(function (data) {appendData(data);})
    .catch(function (err){console.log(err);});

function fillTitle(){
    const string = "Title";
    document.getElementById("title").innerHTML = `${string}`;
}

function addImag(){
    const imageURL = "https://ih1.redbubble.net/image.1294815071.8342/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg";
    document.getElementById("FoodImage").innerHTML = `<img src= ${imageURL}>`;
}

function addRows(){
    const numRows = 3;
    theInner = document.getElementById("IngTable");
    for(i = 0; i < numRows; i++) {   
        theInner.innerHTML += `<tr>
            <td>Item${i}: ...</td> 
            <td>Ingredient Amt: ...</td>
            <td>Price: ...</td>
        </tr>`;
    }
}

function addInst(){
    const instruct = "These are the instructions";
    document.getElementById("InstructionCard").innerHTML = `${instruct}`;
}

function addNutr(){
    document.getElementById("nutritionInfo").innerHTML = `<tr>
        <td>Calories</td> 
        <tr>
            <td>Calories</td>
            <td>${zero}</td>
        </tr>
        <tr>
            <td>Protein</td>
            <td>${zero}</td>
        </tr>
        <tr>
            <td>Fat</td>
            <td>${zero}</td>
        </tr>
        <tr>
            <td>Carbohydrates</td>
            <td>${zero}</td>
        </tr>`;
}
