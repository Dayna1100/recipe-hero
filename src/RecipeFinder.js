import React, { useState } from 'react';
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlus } from '@fortawesome/free-solid-svg-icons';


function IngredientsSearch({ recipes }) {
  const [ingredients, setIngredients] = useState([]);

  const handleAdd = (ingredient) => {
    setIngredients([...ingredients, ingredient]);
  };

  const handleRemove = (ingredient) => {
    const updatedIngredients = ingredients.filter(
      (item) => item !== ingredient
    );
    setIngredients(updatedIngredients);
  };

  return (
    <section className="ingredient-search">
      <h2>Search Recipes By Ingredient</h2>
      <form className="ingredient-picker">
        <select placeholder="Add an ingredient">
          <option disabled>Pick an ingredient</option>
          {recipes
            .flatMap((recipe) => recipe.ingredients)
            .filter(
              (ingredient, index, self) =>
                index === self.indexOf(ingredient) // remove duplicate ingredients
            )
            .map((ingredient) => (
              <option key={ingredient}>{ingredient}</option>
            ))}
        </select>
        <button>
          <FontAwesomeIcon icon={faPlus} className="icon" />
        </button>
        <button>
          <FontAwesomeIcon icon={faMinusCircle} className="icon" />
        </button>
      </form>
      <ul className="ingredients">
        {ingredients.map((ingredient) => (
          <li key={ingredient} className="recipe-ingredient">
            <span>{ingredient}</span>
            <FontAwesomeIcon
              icon={faMinusCircle}
              className="icon"
              onClick={() => handleRemove(ingredient)}
            />
            <FontAwesomeIcon
              icon={faPlus}
              className="icon"
              onClick={() => handleAdd(ingredient)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default IngredientsSearch;