import { useEffect, useState } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";
import Recipe from "./Recipe";
function ExploreRandom() {
  const [recipe, setRecipe] = useState([]);
  const { data, isLoading, fetchError } = useAxiosFetch("/explore-random");

  useEffect(() => {
    setRecipe(data.recipe);
  }, [data]);

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && fetchError && <h1>{fetchError}</h1>}
      {!isLoading && !fetchError && data && <Recipe recipe={recipe} />}
    </>
  );
}

export default ExploreRandom;
