console.log("hey this is working")
const url = "http://www.themealdb.com/api/json/v1/1/random.php"

const button = document.getElementById("getData"); 
const recipee = document.getElementById("recipee")
const title = document.getElementById("title")
const category = document.getElementById("category")
const ingredientsList = document.getElementById("ingredients-list")

button.addEventListener("click", function() {
   console.log("firing click")

});

const populateRecipee = (json) => {
    const meal = json.meals[0];
    ingredientsList.innerHTML = null;
    for (let key in meal) {
        if(key.includes('strIngredient')) {
            if (meal[key]) {
                const li = document.createElement("li")
                li.textContent = meal[key]
                ingredientsList.append(li);
            } 
        }
    }
    title.textContent = meal.strMeal;
    category.textContent = meal.strCategory;
}