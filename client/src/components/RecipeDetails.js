import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosFetch from "../hooks/useAxiosFetch";
import Loading from "./Loading";
import Recipe from "./Recipe";
function ExploreRandom() {
  const [recipe, setRecipe] = useState([]);
  const { id } = useParams();
  const { data , isLoading, fetchError} = useAxiosFetch(`/recipes/${id}`);

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
