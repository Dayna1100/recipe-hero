import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, CardGroup, Card } from "react-bootstrap";

// const recipes = [
//   {
//     name: "Toast",
//     description: "Creamy pasta with chicken",
//     image: "./images/bread.jpg",
//     ingredients: "Toast",
//     difficulty: "medium",
//   },
//   {
//     name: "Cheesy Bacon",
//     description: "Mexican-style tacos with beef",
//     image: "./images/cheesy-bacon.jpg",
//     ingredients: "Cheesy Bacon",
//     difficulty: "easy",
//   },
//   {
//     name: "Framed Egg",
//     description: "Spicy curry with chicken and veggies",
//     image: "./images/framed-egg-1.jpg",
//     ingredients: "Framed Egg",
//     difficulty: "hard",
//   },
// ];

function RecipeSelector() {
  const [selectedType, setSelectedType] = useState("");
  const[recipes, setRecipes] = useState([]);

useEffect(() => {
  fetch('/recipesbootstrap.json')
      .then(response => response.json())
      .then(data => setRecipes(data))
      .catch(error => console.error(error));
  }, []);
  
  const filteredRecipes = recipes.filter(
    (recipe) =>
      (selectedType === "" || recipe.ingredients === selectedType)
    );

  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Ingredient Type</Form.Label>
          <Form.Control
            as="select"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="">All Types</option>
            <option value="Toast">Toast</option>
            <option value="Cheesy Bacon">Cheesy Bacon</option>
            <option value="Framed Egg">Framed Egg</option>
          </Form.Control>
        </Form.Group>
      </Form>
      <CardGroup>
        {filteredRecipes.map((recipe) => (
          <Card key={recipe.name}>
            <Card.Img variant="top" src={recipe.image} />
            <Card.Body>
              <Card.Title>{recipe.name}</Card.Title>
              <Card.Text>{recipe.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
}

export default RecipeSelector;