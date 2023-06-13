import React, { useState, useEffect } from 'react';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/recipesTest.json')
      .then(response => response.json())
      .then(data => setRecipes(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Recipe List Test</h1>
      <ul>
         {recipes.map(recipe => (
          <li key={recipe.id}>
            <div><br></br></div>
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </li>
        ))} 
      </ul>
     </div>
  );
}

export default RecipeList;