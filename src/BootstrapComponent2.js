import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, CardGroup, Card, Pagination } from "react-bootstrap";

function RecipeSelector() {
  const [selectedType, setSelectedType] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [activeIndex, setActiveIndex] = useState(1);
  const ITEMS_PER_PAGE = 2; // Change this to set the number of steps per page

  useEffect(() => {
    fetch("/recipesbootstrap.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error(error));
  }, []);

  const filteredRecipes = recipes.filter(
    (recipe) => selectedType === "" || recipe.ingredients === selectedType
  );

  const handlePageChange = (index) => {
    setActiveIndex(index);
  };

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
              <Pagination>
                {recipe.steps
                  .slice(
                    (activeIndex - 1) * ITEMS_PER_PAGE,
                    activeIndex * ITEMS_PER_PAGE
                  )
                  .map((step, index) => (
                    <Pagination.Item
                      key={index}
                      active={index === activeIndex - 1}
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </Pagination.Item>
                  ))}
              </Pagination>
              <div>
                {recipe.steps
                  .slice(
                    (activeIndex - 1) * ITEMS_PER_PAGE,
                    activeIndex * ITEMS_PER_PAGE
                  )
                  .map((step, index) => (
                    <p key={index}>
                      {index + 1}. {step}
                    </p>
                  ))}
              </div>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
}

export default RecipeSelector;