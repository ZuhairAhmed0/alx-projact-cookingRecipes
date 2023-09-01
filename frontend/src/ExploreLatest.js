import { useEffect, useState } from "react";
import axios from "axios";
import Food from "./Food";

function ExploreLatest({ API_URL }) {
  const [food, setFood] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setFood(response.data.recipe);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <h1 className="pb-4">Explore Latest</h1>

      <div className="row row-cols-2 row-cols-lg-5 g-3 g-gl-3">
        {food &&
          food.map((recipe) => {
            return <Food recipe={recipe} key={recipe._id} />;
          })}
      </div>
    </>
  );
}

export default ExploreLatest;
