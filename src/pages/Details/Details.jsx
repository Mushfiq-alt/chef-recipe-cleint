import { Container } from "react-bootstrap";
import DetailsRecipeList from "../DetailsRecipeList/DetailsRecipeList";
import { useLoaderData } from "react-router-dom";

import Pdf from "react-to-pdf";
import React from "react";
const ref = React.createRef();

const Details = () => {
  const chefDetails = useLoaderData();
  const chefRecipes = chefDetails.recipes;    

  return (
    <div>
      <Container ref={ref} className="mt-5 w-75">
        <div className="mx-auto  text-center">
          <div className="me-3">
            <img
              className="rounded-4 my-0 "
              style={{ width: "30%", height: "80%" }}
              src={chefDetails.img_url}
              alt=""
            />
          </div>
          <div className="my-4">
            <h3 className="pb-2 fw-bold text-uppercase">
              Name: {chefDetails.chef_name}
            </h3>
            <h4 className="pb-2 fw-bold text-uppercase">
              Experience: {chefDetails.chef_experience}
            </h4>
            <h5 className="pb-2 fw-bold text-uppercase">
              Recipes: {chefDetails.no_of_recipes}
            </h5>
            <h6 className="pb-5 fw-bold text-uppercase">
              Likes: {chefDetails.rating}
            </h6>
            <h3 className="pb-2 fw-bold text-uppercase">Bio</h3>
            <h6>{chefDetails.bio}</h6>
          </div>
        </div>

        <hr />

        <h1
          className="text-center fw-bold text-uppercase"
          style={{ marginTop: "30px", marginBottom: "50px" }}
        >
          The Recipes
        </h1>
        <div className="row row-cols-1 row-cols-md-3 mx-auto w-100">
          {chefRecipes.map((chefRecipe, index) => {
            return (
              <div key={index} className="col mb-3">
                <DetailsRecipeList chefRecipe={chefRecipe} />
              </div>
            );
          })}
        </div>
      </Container>
      <div className="my-3 text-center">
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <button className="btn btn-dark rounded-0 p-4" onClick={toPdf}>
              Generate Pdf
            </button>
          )}
        </Pdf>
      </div>
    </div>
  );
};

export default Details;
