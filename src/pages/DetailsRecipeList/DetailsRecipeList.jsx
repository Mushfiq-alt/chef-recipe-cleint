import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const DetailsRecipeList = ({ chefRecipe }) => {
  const { name, ingredients, cooking_method, rating, imageUrl } = chefRecipe;

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const notify = () => {
    toast.success("Liked");
    setIsButtonDisabled(true);
  };

  return (
    <Card className="mb-5" style={{ width: "100%", height: "100%" }}>
      <Card.Img
        style={{ objectFit: "cover" }}
        variant="top"
        src={imageUrl}
      />
      <Card.Body className="text-center" >
        <Card.Title className="text-uppercase fw-bold"><h3>{name}</h3></Card.Title>
        <Card.Text className="fs-4 fw-bold">Ingredients</Card.Text>
        <div>
          {ingredients.map((ingredient, index) => {
            return <h6 key={index}>{ingredient}</h6>;
          })}
        </div>
        <Card.Text className="fs-4 fw-bold">Cooking method:</Card.Text>
        <p>{cooking_method}</p>
        <Card.Text className="fw-bold">Rating: {rating}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button
          disabled={isButtonDisabled}
          onClick={notify}
          variant="outline-danger"
        >
          {isButtonDisabled ? <AiFillHeart /> : <AiOutlineHeart />}
        </Button>
      </Card.Footer>
      <Toaster />
    </Card>
  );
};

export default DetailsRecipeList;
