import { useEffect, useState } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";
import Recipe from "./Recipe"
function ExploreRandom() {
  const [recipe, setRecipe] = useState([]);
  const { data } = useAxiosFetch("/explore-random");

  useEffect(() => {
    setRecipe(data.recipe);
  }, [data]);

  return <Recipe recipe={recipe}/>;
}

export default ExploreRandom;
