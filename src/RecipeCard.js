import "./App.css";
import RecipeStepIndicator from "./RecipeStepIndicator";
import RecipeDescription from "./RecipeDescription";
import RecipeStep from "./RecipeStep";
import CommandBar from "./CommandBar";

const RecipeCard = () => {
  return (
          <div className="recipe-card">
           <h2>Framed Eggs</h2> 
          <RecipeDescription /><RecipeStep /><RecipeStepIndicator /><CommandBar />
          </div> 
   )
}

export default RecipeCard