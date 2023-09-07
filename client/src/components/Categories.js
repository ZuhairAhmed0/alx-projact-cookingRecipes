import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosFetch from "../hooks/useAxiosFetch";
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

      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/categories">Categories</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Explore Categories
          </li>
        </ol>
      </nav>

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
