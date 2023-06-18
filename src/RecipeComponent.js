import React, { useState, useEffect } from 'react';
import recipeData from './recipes.json';
import "./App.css";

const RecipeComponent = () => {
  const [recipes, setRecipes] = useState(recipeData);
  const [ingredients, setSearchIngredients] = useState('');

//   useEffect(() => {
//     const filteredRecipes = recipeData.filter((recipe) => {
//       // Filter the recipes based on the Ingredients
//       return recipe.ingredients.some((ingredient) =>
//         ingredient.toLowerCase().includes(ingredients.toLowerCase())
//       );
//     });
//     setRecipes(filteredRecipes);
//   }, [ingredients]);

useEffect(() => {
    fetch("./recipes.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data.recipes))
      .catch((error) => console.log(error));
  }, []);

  const handleInputChange = (e) => {
    setSearchIngredients(e.target.value);
  };
//test
  return (
    <div>
      <h1>Recipe List</h1>
      <input type="text" value={ingredients} onChange={handleInputChange} />
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.name}>
            <h2>{recipe.name}</h2>
            <ul>
                <li key={recipe.ingredients}>{recipe.ingredient}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeComponent;