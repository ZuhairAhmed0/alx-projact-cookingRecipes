import { Link } from "react-router-dom";

function Food({ foods }) {
  return (
    <div className="row row-cols-2 row-cols-lg-5 g-3 g-gl-3">
      {foods && foods.length ? (
        foods.map((recipe) => {
          return (
            <Link
              key={recipe._id}
              to={`recipes/${recipe._id}`}
              className="col text-center category__link"
            >
              <div className="category__img category__img-large shadow">
                <img
                  src={`https://api-cookingrecipes.onrender.com/uploads/${recipe.image}`}
                  alt={recipe.name}
                  loading="lazy"
                />
              </div>
              <div className="pt-1">{recipe.name}</div>
            </Link>
          );
        })
      ) : (
        <p>No Recipes to display</p>
      )}
    </div>
  );
}

export default Food;
