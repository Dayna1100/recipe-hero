import React, { useState, useEffect } from "react";
import "./App.css";

function RecipeDescription() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/recipes.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data.recipes))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.name}>
            <div className="recipe-description">
              <img src={`images/${recipe.imageUrl}`} alt={recipe.name} />
              <p>{recipe.name}</p>
              <p>{recipe.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeDescription;

 