import { useEffect, useState } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";
import Loading from "./Loading";
import Recipe from "./Recipe";
function ExploreRandom() {
  const [recipe, setRecipe] = useState([]);
  const { data, isLoading, fetchError } = useAxiosFetch("/recipes/random");

  useEffect(() => {
    setRecipe(data.recipe);
  }, [data]);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && fetchError && <h1>{fetchError}</h1>}
      {!isLoading && !fetchError && data && <Recipe recipe={recipe} />}
    </>
  );
}

export default ExploreRandom;
