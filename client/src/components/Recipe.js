import Ingredients from "./Ingredients";
import Breadcrumb from "./Breadcrumb";

function Recipe({ recipe }) {
  return (
    <>
      {recipe ? (
        <>
          <h1 className="pb-4">{recipe.name}</h1>
          <Breadcrumb title={recipe.name} />
          <div className="row">
            <div className="col-12 col-md-4">
              <img
                src={`https://api-cookingrecipes.onrender.com/uploads/${recipe.image}`}
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
                    <Ingredients ingredients={recipe.ingredients} />
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
