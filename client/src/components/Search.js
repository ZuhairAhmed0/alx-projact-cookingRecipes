import Food from "./Food";
import { useEffect, useState } from "react";
import api from "../api/base";

function Search({ search }) {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    console.log(search);
    const fetchData = async () => {
      try {
        const response = await api.post("/submit-recipe", {
          searchTerm: search,
        });
        setRecipe(response.data);
      } catch (err) {
        setRecipe([]);
      }
    };

    fetchData();
  }, [search]);

  return (
    <div>
      <h1 class="pb-4">Search Results</h1>
      <Food foods={recipe} />
    </div>
  );
}

export default Search;
