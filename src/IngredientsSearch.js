import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMinusCircle, faPlus } from "@fortawesome/free-solid-svg-icons"

const IngredientsSearch = () => {

  return (
  <div id="the-app">
      <section className="ingredient-search">
        <h2>Search Recipes By Ingredient</h2>
        <form className="ingredient-picker">
          <select placeholder="Add an ingredient">
            <option disabled="">Pick an ingredient</option>
          </select>
          <button>
            <FontAwesomeIcon icon={faPlus} className="icon" />
          </button>
        </form>
        <ul className="ingredients">
          <li className="recipe-ingredient">
            <span>Eggs</span>
            <FontAwesomeIcon icon={faMinusCircle} className="icon" />
          </li>
          <li className="recipe-ingredient">
            <span>Bread</span>
            <FontAwesomeIcon icon={faMinusCircle} className="icon" />
          </li>
          <li className="recipe-ingredient">
            <span>Cheese</span>
            <FontAwesomeIcon icon={faMinusCircle} className="icon" />
          </li>
          <li className="recipe-ingredient">
            <span>Bacon</span>
            <FontAwesomeIcon icon={faMinusCircle} className="icon" />
          </li>
        </ul>
      </section>

     </div>
  )
}

export default IngredientsSearch