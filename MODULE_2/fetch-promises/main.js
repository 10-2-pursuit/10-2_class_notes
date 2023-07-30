console.log("hey this is working")
const url = "http://www.themealdb.com/api/json/v1/1/random.php"

const button = document.getElementById("getData"); 
const recipee = document.getElementById("recipee")
const title = document.getElementById("title")
const category = document.getElementById("category")
const ingredientsList = document.getElementById("ingredients-list")

button.addEventListener("click", function() {
   console.log("firing click")
   // fetch returns a promise that we can PIPE into using .then()
   fetch(url)
   // once we pipe into it we need to process it into usable json
    .then(data => data.json())
    // json is passed to our next .then()
    .then(json => populateRecipee(json))
    .catch(err => alert("request failed - please try again- dingus.", err));
    

});

const populateRecipee = (json) => {
    const meal = json.meals[0];
    ingredientsList.innerHTML = null;
    for (let key in meal) {
        if (key.includes('strIngredient')) {
            if (meal[key]) {
                const li = document.createElement("li");
                li.textContent = meal[key];
                ingredientsList.append(li);
            } 
        }
    }
    title.textContent = meal.strMeal;
    category.textContent = meal.strCategory;
}