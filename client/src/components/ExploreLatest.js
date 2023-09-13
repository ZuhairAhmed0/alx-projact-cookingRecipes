import { useEffect, useState } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";
import Breadcrumb from "./Breadcrumb";
import Food from "./Food";
import Loading from "./Loading";

function ExploreLatest() {
  const [foods, setFoods] = useState([]);
  const { data, isLoading, fetchError } = useAxiosFetch("/recipes/latest");

  useEffect(() => {
    setFoods(data.recipe);
  }, [data]);

  return (
    <>
      <h1 className="pb-4">Explore Latest</h1>
      <Breadcrumb title="Explore Latest" />
      {isLoading && <Loading />}
      {!isLoading && fetchError && <h1>{fetchError}</h1>}
      {!isLoading && !fetchError && data && <Food foods={foods} />}
    </>
  );
}

export default ExploreLatest;
