import { useEffect, useState } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";
import Breadcrumb from "./Breadcrumb";
import Food from "./Food";

function ExploreLatest() {
  const [foods, setFoods] = useState([]);
  const { data, isLoading, fetchError } = useAxiosFetch("/explore-latest");

  useEffect(() => {
    setFoods(data.recipe);
  }, [data]);

  return (
    <>
      <h1 className="pb-4">Explore Latest</h1>
      <Breadcrumb>
        <li className="breadcrumb-item active" aria-current="page">
          Explore Latest
        </li>
      </Breadcrumb>
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && fetchError && <h1>{fetchError}</h1>}
      {!isLoading && !fetchError && data && <Food foods={foods} />}
    </>
  );
}

export default ExploreLatest;
