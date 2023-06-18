import React, { useState, useEffect, useMemo } from "react";
import "./App.css";
import Recipes from './recipes.json';
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//import { faMinusCircle, faPlus } from "@fortawesome/free-solid-svg-icons"

 Recipes = ({ recipes, selectedIngredient }) => {
  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) =>
      recipe.ingredients.includes(selectedIngredient)
    );
  }, [recipes, selectedIngredient]);

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {filteredRecipes.map((recipe) => (
          <li key={recipe.name}>
            <h3>{recipe.name}</h3>
            <img src={recipe.imageUrl} alt={recipe.name} />
            <p>{recipe.description}</p>
            <h4>Ingredients:</h4>
            <ul>
              {recipe.ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
            <h4>Steps:</h4>
            <ol>
              {recipe.steps.map((step) => (
                <li key={step.stepNumber}>
                  <img src={step.imageUrl} alt={step.description} />
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Ingredients = ({ recipes, onAddIngredient, onRemoveIngredient }) => {
  const [availableIngredients, setAvailableIngredients] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState(null);

  useEffect(() => {
    const ingredients = new Set();
    recipes.forEach((recipe) => {
      recipe.ingredients.forEach((ingredient) => {
        ingredients.add(ingredient);
      });
    });
    setAvailableIngredients(Array.from(ingredients));
  }, [recipes]);

  const handleAddIngredient = () => {
    if (selectedIngredient && !availableIngredients.includes(selectedIngredient)) {
      onAddIngredient(selectedIngredient);
      setAvailableIngredients([...availableIngredients, selectedIngredient]);
    }
  };

  const handleRemoveIngredient = () => {
    if (selectedIngredient && availableIngredients.includes(selectedIngredient)) {
      onRemoveIngredient(selectedIngredient);
      setAvailableIngredients(availableIngredients.filter((ingredient) => ingredient !== selectedIngredient));
      setSelectedIngredient(null);
    }
  };

  return (
    <div>
      <label htmlFor="ingredient-select">Select an ingredient:</label>
      <select
        id="ingredient-select"
        value={selectedIngredient}
        onChange={(e) => setSelectedIngredient(e.target.value)}
      >
        <option value="">--Select an ingredient--</option>
        {availableIngredients.map((ingredient) => (
          <option key={ingredient} value={ingredient}>
            {ingredient}
          </option>
        ))}
      </select>
      <button onClick={handleAddIngredient}>Add ingredient</button>
      <button onClick={handleRemoveIngredient}>Remove ingredient</button>
      {selectedIngredient && (
        <Recipes recipes={recipes} selectedIngredient={selectedIngredient} />
      )}
    </div>
  );
};

export default Ingredients;