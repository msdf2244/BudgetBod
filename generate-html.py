import json

database = json.load(open("recipes.json", "r"))

def main():

    for key, value in database.items():
        html_file = open("recipes/" + value["name"] + ".html", "w")

        name = value["name"]
        img_path = value["img_path"]
        ingredients = value["ingredients"]
        instructions = value["instructions"]
        calories = value["calories"]
        fat = value["fat"]
        proteins = value["protein"]
        carbohydrates = value["carbohydrates"]
        html = f"""
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="../CSS_Files/makeup.css">
            <link rel="stylesheet" href="../CSS_Files/recipes.css">
            <title>Document</title>
        </head>
        <body>

            <!--Navbar -->
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a class="active" href="Recipes.html">Recipes</a></li>
                <li><a href="About.html">About Us</a></li>
            </ul>
            <div class="grid-container">
                <div class="title-bar">
                    {name}
                </div>
                <div class="image-container">
                    <img src="./{img_path}" alt="{name}">
                </div>
                <div class="card-container">
                    <div class="card-title">
                        Recipe
                    </div>
                    <div class="card-body">
                        <table>
                        <th>Ingredients</th>
                        <th>Measurements</th>
                        <th>Price</th>
        """
        for ingredient in ingredients:
            html += "<tr>"
            html += "<td>" + ingredient + "</td>"
            html += "<td></td>"
            html += "<td></td>"
            html += "</tr>"
        html += f"""
        </table>
        </div>
        <div class="card-container">
            <div class="card-title">
                Instructions
            </div>
            <div class="card-body">
                {instructions}
            </div>
        </div>
        """
        html += f"""
        <div class="card-container">
            <div class="card-title">
                Nutritional Information
            </div>
            <div class="card-body">
                <table>
                    <tr>
                        <td>Calories</td>
                        <td>{calories}</td>
                    </tr>
                    <tr>
                        <td>Protein</td>
                        <td>{proteins}</td>
                    </tr>
                    <tr>
                        <td>Fat</td>
                        <td>{fat}</td>
                    </tr>
                    <tr>
                        <td>Carbohydrates</td>
                        <td>{carbohydrates}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</body>
</html>
        """
        html_file.write(html)
        html_file.close()
main()
