import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import useAxiosFetch from "../hooks/useAxiosFetch";
import Food from "./Food";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const { name } = useParams();
  const { data, isLoading, fetchError } = useAxiosFetch(`/categories/${name}`);

  useEffect(() => {
    setRecipes(data.food);
  }, [data, recipes]);
  return (
    <>
      <h2 className="pb-5">{name} Recipes</h2>

      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {name} Recipes
          </li>
        </ol>
      </nav>
      {isLoading && <h1>Loading...</h1>}
        {!isLoading && fetchError && <h1>{fetchError}</h1>}
        {!isLoading && !fetchError && data && (
          <Food foods={recipes} />
        )}
    </>
  );
}

export default Recipes;
