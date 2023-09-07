import Ingredients from "./Ingredients";
import { Link } from "react-router-dom";

function Recipe({recipe}) {
  return (
    <>
      {recipe ? (
        <>
          <h1 className="pb-4">{recipe.name}</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
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
                    <Ingredients ingredients={recipe.ingredients}/>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>No Recipes found</p>
      )}
    </>
  );
}

export default Recipe;