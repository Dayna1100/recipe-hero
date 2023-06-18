import "./App.css";
import React, { useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMinusCircle, faPlus } from "@fortawesome/free-solid-svg-icons"


function RecipeIngredients() {
  const [ingredients, setIngredients] = useState([]);

  const recipes = [
    {
      name: 'Framed Eggs',
      imageUrl: 'framed-egg.jpg',
      ingredients: ['Eggs', 'Bread'],
    },
    {
      name: 'Cheesy Eggs',
      imageUrl: 'cheesy-eggs.jpg',
      ingredients: ['Eggs', 'Cheese'],
    },
    {
      name: 'Toast',
      ingredients: ['Bread'],
    },
    {
      name: 'Scrambled Eggs',
      imageUrl: 'scrambled-eggs.webp',
      ingredients: ['Eggs'],
    },
    {
      name: 'Cheesy Bacon',
      imageUrl: 'cheesy-bacon.jpg',
      ingredients: ['Bacon', 'Cheese'],
    },
  ];

  const handleAdd = (ingredient) => {
    setIngredients([...ingredients, ingredient]);
  };

  const handleRemove = (ingredient) => {
    const updatedIngredients = ingredients.filter(
      (item) => item !== ingredient
    );
    setIngredients(updatedIngredients);
  };

  // const hasRecipeIngredients = (recipe) => {
  //   return recipe.ingredients.some((ingredient) =>
  //     ingredients.includes(ingredient)
  //   );
  // };

  return (
    <div>
      <h2>Search Recipes By Ingredient</h2>
      <form className="ingredient-picker">
          <select placeholder="Add an ingredient">
            <option enabled="">Pick an ingredient</option>
          </select>
          <button onClick={() => handleAdd()}>
            <FontAwesomeIcon icon={faPlus} className="icon" />
          </button> 
        </form> 
      <ul>
        {recipes.map((recipe) => (
        // hasRecipeIngredients(recipe) ?
          <li key={recipe.name}>
            <h3>{recipe.name}</h3>
          
            <ul className="ingredients">
              {recipe.ingredients.map((ingredient) => (
                <li key={ingredient} className="recipe-ingredient">
                  <span>{ingredient}</span>
                  <button onClick={() => handleRemove(ingredient)}><FontAwesomeIcon icon={faMinusCircle} className="icon" /></button>
                  <button onClick={() => handleAdd(ingredient)}><FontAwesomeIcon icon={faPlus} className="icon" /></button>                  
                </li>
              ))}
            </ul>
          </li>
        // ) : null
        ))}
      </ul>
      <h3>My Ingredients:</h3>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeIngredients;