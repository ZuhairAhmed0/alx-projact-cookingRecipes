import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import useAxiosFetch from "../hooks/useAxiosFetch";
import Recipe from "./Recipe"
function ExploreRandom() {
  const [recipe, setRecipe] = useState([]);
  const {id} = useParams()
  const { data } = useAxiosFetch(`/recipe/${id}`);

  useEffect(() => {
    setRecipe(data.recipe);
  }, [data]);

  return <Recipe recipe={recipe}/>;
}

export default ExploreRandom;