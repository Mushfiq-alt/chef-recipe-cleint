import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const PopularRecipes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/popular-foods")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container>
      <h1 className="my-5 text-center">Popular Dish</h1>
      <div className="d-flex flex-column flex-md-row gap-3 justify-content-between">
        {data?.map((card, index) => {
          return (
            <Card key={index} style={{ width: "100%" }}>
              <Card.Img
                style={{ height: "300px" }}
                variant="top"
                src={card.food_image}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title>{card.food_name}</Card.Title>
                  <Card.Text>{card.food_info}</Card.Text>
                </div>
                <Button className="mt-3" variant="warning">
                  Order Now
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </Container>
  );
};

export default PopularRecipes;
