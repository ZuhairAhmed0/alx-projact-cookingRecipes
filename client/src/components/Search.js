import Food from "./Food";
import { useEffect, useState } from "react";
import api from "../api/base";

function Search({ search }) {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.post("/search", {
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
      <h1 className="pb-4">Search Results</h1>
      <Food foods={recipe} />
    </div>
  );
}

export default Search;
