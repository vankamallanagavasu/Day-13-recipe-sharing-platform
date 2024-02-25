// scripts.js
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('add-recipe-form');
  const recipesList = document.getElementById('recipes');

  form.addEventListener('submit', function(event) {
      event.preventDefault();

      const name = document.getElementById('recipe-name').value;
      const description = document.getElementById('recipe-description').value;
      const ingredients = document.getElementById('recipe-ingredients').value.split(',').map(item => item.trim());
      const instructions = document.getElementById('recipe-instructions').value;

      const recipe = {
          name,
          description,
          ingredients,
          instructions
      };

      displayRecipe(recipe);
      form.reset();
  });

  function displayRecipe(recipe) {
      const li = document.createElement('li');
      li.innerHTML = `
          <h3>${recipe.name}</h3>
          <p>${recipe.description}</p>
          <h4>Ingredients:</h4>
          <ul>
              ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
          </ul>
          <h4>Instructions:</h4>
          <p>${recipe.instructions}</p>
      `;
      recipesList.appendChild(li);
  }
});
