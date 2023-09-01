import { useEffect, useState } from "react";
import axios from "axios";
function ExploreRandom({ API_URL }) {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setRecipe(response.data.recipe);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      {recipe ? (
        <>
          <h1 className="pb-4">Explore Latest</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {recipe.name}
              </li>
            </ol>
          </nav>
          <div className="row">
            <div className="col-12 col-md-4">
              <img
                src={`/uploads/${recipe.image}`}
                className="img-fluid sticky-top"
                style={{ top: "20px" }}
                alt={recipe.name}
                loading="lazy"
              />
            </div>
            <div className="col-12 col-md-8">
              <div className="row">
                <div className="col-12">
                  <h1>{recipe.name}</h1>
                </div>
                <div className="col-12">
                  <i className="bi bi-tag"></i>
                  {recipe.category}
                </div>
                <div className="col-12" style={{ whiteSpace: "pre-line" }}>
                  <h4>Cooking Instructions</h4>
                  {recipe.description}
                </div>
              </div>

              <div className="row pt-4">
                <div className="col-12">
                  <h2>Ingredients</h2>
                  <ul className="list-group list-group-flush">
                    {recipe.ingredients &&
                      recipe.ingredients.map((ingredients, index) => {
                        return (
                          <li className="list-group-item" key={index}>
                            {ingredients}
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>No items found</p>
      )}
    </>
  );
}

export default ExploreRandom;
