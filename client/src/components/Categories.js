import { useEffect, useState } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";
import Breadcrumb from "./Breadcrumb";
import Category from "./Category";
function Categories() {
  const [categories, setCategories] = useState([]);
  const { data, isLoading, fetchError } = useAxiosFetch("/categories");

  useEffect(() => {
    setCategories(data.categories);
  }, [data]);
  return (
    <div>
      <h2 className="pb-5">Explore Categories</h2>

      <Breadcrumb>
        <li className="breadcrumb-item active" aria-current="page">
          Categories
        </li>
      </Breadcrumb>

      <div className="row row-cols-2 row-cols-lg-5 g-3 g-gl-2 mb-4">
        {isLoading && <h1>Loading...</h1>}
        {!isLoading && fetchError && <h1>{fetchError}</h1>}
        {!isLoading && !fetchError && data && (
          <Category categories={categories} />
        )}
      </div>
    </div>
  );
}

export default Categories;
