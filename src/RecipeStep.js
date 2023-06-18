//import React, { useState, useEffect } from "react";
import "./App.css";


const RecipeStep = () => {

  return (
    <div className="recipe-step">
    <p>
    Cut out center of each bread slice using a 2 1/2- to 3-inch heart, round,
    or other shaped cookie cutter. Set slices aside, reserving both bread and cutouts.
    </p>
    <img src="/images/framed-egg-1.jpg" alt="Step 1" />
    </div>
)
}

    // function RecipeStep() {
    //     const [recipes, setRecipes] = useState([]);
      
    //     useEffect(() => {
    //       fetch("/recipes.json")
    //         .then((response) => response.json())
    //         .then((data) => setRecipes(data.recipes))
    //         .catch((error) => console.log(error));
    //     }, []);
      
    //     return (
    //       <div>
    //         {recipes.map((recipe) =>
    //           recipe.steps.map((step) => (
    //             <RecipeStep key={step.stepNumber} step={step} />
    //           ))
    //         )}
    //       </div>
    //     );
    //   }
//     const { stepNumber, description, imageUrl } = step;
  
//     return (
//       <div className="recipe-step">
//         <ul className="recipe-step-indicator">
//           <li className="active">{stepNumber}</li>
//         </ul>
//         <div className="recipe-step-description">
//           <p>{description}</p>
//           <img src={`/images/${imageUrl}`} alt={`Step ${stepNumber}`} />
//         </div>
//       </div>
//     );
//   }
  

export default RecipeStep