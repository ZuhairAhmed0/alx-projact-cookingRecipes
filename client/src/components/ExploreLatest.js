import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosFetch from "../hooks/useAxiosFetch";
import Food from "./Food";

function ExploreLatest() {
  const [foods, setFoods] = useState([]);
  const { data } = useAxiosFetch("/explore-latest");

  useEffect(() => {
    setFoods(data.recipe);
  }, [data]);

  return (
    <>
      <h1 className="pb-4">Explore Latest</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
          Explore Latest
          </li>
        </ol>
      </nav>
      <Food foods={foods} />
    </>
  );
}

export default ExploreLatest;
