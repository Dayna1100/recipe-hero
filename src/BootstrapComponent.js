import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, CardGroup, Card } from "react-bootstrap";



function RecipeSelector() {
  const [recipes, setRecipes] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");

useEffect(() => {
  fetch('/recipesbootstrap.json')
      .then(response => response.json())
      .then(data => setRecipes(data))
      .catch(error => console.error(error));
  }, []);
  
  const filteredRecipes = recipes.filter(
    (recipe) =>
      (selectedType === "" || recipe.ingredients === selectedType) &&
      (selectedDifficulty === "" || recipe.difficulty === selectedDifficulty)
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
        <Form.Group>
          <Form.Label>Difficulty</Form.Label>
          <Form.Control
            as="select"
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
          >
            <option value="">All Difficulty Levels</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
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