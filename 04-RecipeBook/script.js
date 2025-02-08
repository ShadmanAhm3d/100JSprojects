const API_KEY = "1154559996c24d58a0fb1362b92b686a";

async function getRecipes() {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`,
  );

  const data = await response.json();
  return data.recipes; // Returns the array of recipes
}

const isEmptyEl = (el) => {
  return el.innerHTML.trim().length === 0;
};

const recipesCard = document.querySelector(".wrapper-app");

function showRecipesCard(recipes) {
  // Clear the wrapper if it already has content
  if (!isEmptyEl(recipesCard)) {
    recipesCard.innerHTML = ''; // Clear the inside of the wrapper
  }


  

  // Render the recipes
  recipes.forEach((recipe) => {
    const containerDiv = document.createElement("div");
    containerDiv.className = "containerCard";

    const cardTitle = document.createElement("h2");
    cardTitle.innerText = recipe.title;

    const cardIngredient = document.createElement("p");
    cardIngredient.innerHTML = `Ingredients: ${recipe.extendedIngredients
      .map((ingredient) => ingredient.original)
      .join(", ")}`;

    const sourceUrlButton = document.createElement("button");
    sourceUrlButton.innerText = "View Recipe";
    sourceUrlButton.onclick = () => {
      window.open(recipe.sourceUrl, "_blank");
    };

    // Append all the fields to the wrapper
    recipesCard.appendChild(containerDiv);
    containerDiv.appendChild(cardTitle);
    containerDiv.appendChild(cardIngredient);
    containerDiv.appendChild(sourceUrlButton);
  });
}

async function initializer() {
  console.log("Initializing...");
  const recipes = await getRecipes(); // Await the resolved recipes array
  showRecipesCard(recipes); // Pass the array to showRecipesCard

  // Attach search functionality
  const searchButton = document.querySelector("#searchButton");
  searchButton.addEventListener("click", (e) => {
    searchSomething(e, recipes);
  });
}

// Implementing Search Functionality
function searchSomething(e, recipes) {
  e.preventDefault();
  const input = document.querySelector("#inputfeild");
  const inputValue = input.value.toLowerCase(); // Convert to lowercase for case-insensitive search

  // Filter recipes based on the input value
  const filteredRecipes = recipes.filter((recipe) => {
    return recipe.title.toLowerCase().includes(inputValue);
  });

  console.log(filteredRecipes);

  // Display only the filtered recipes
  showRecipesCard(filteredRecipes);
}

initializer();

