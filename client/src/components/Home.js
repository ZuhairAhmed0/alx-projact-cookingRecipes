import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosFetch from "../hooks/useAxiosFetch";
import Category from "./Category";
import Food from "./Food";

function Home() {
  const [categories, setCategories] = useState([]);
  const [foods, setFoods] = useState([]);
  const { data } = useAxiosFetch("/");

  useEffect(() => {
    setCategories(data.categories);
    setFoods(Object.assign({}, data.food));
  }, [data]);

  return (
    <>
      <div className="row flex-reverse align-items-center g-5 py-5 mb-4">
        <div className="col-12 col-lg-6">
          <h1 className="display-5 fw-bold mb-3">
            Huge selection of delicios recipe ideas
          </h1>
          <p className="lead">
            Explore our huge selection of delicious recipe ideas including; easy
            desserts, delicious vegan and vegetarian dinner ideas, gorgeous
            pasta recipes, quick bakes, family-friendly meals and gluten-free
            recipes.
          </p>

          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Link
              to="/explore-latest"
              className="btn btn-dark btn-lg px-4 me-md-2"
            >
              Explore latest
            </Link>
            <Link
              to="/explore-random"
              className="btn btn-outline-secondary btn-lg px-4 me-md-2"
            >
              Show Random
            </Link>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <img
            src="/images/hero-image.png"
            alt="Cooking With Node.js"
            width="607"
            height="510"
            className="d-block mx-lg-auto img-fluid "
            loading="lazy"
          />
        </div>
      </div>
      {/* Categpries Start  */}
      <div className="row row-cols-2 row-cols-lg-6 g-3 g-gl-3 py-4">
        <Category categories={categories}/>

        <Link to="/categories" className="col text-center category__link">
          <div className="category__img shadow">
            <img
              src="/images/view-all.jpg"
              alt="View All Categories"
              loading="lazy"
            />
          </div>
          <div className="py-3">View All</div>
        </Link>
      </div>
      {/* Categpries End */}
      {/* <!-- Latest Start --> */}
      <section className="pt-4 pb-4">
        <div className="d-flex align-items-center mb-2">
          <h2>Latest Recipes</h2>
          <Link to="/explore-latest" className="ms-auto">
            View More
          </Link>
        </div>

        <Food foods={foods.latest} />
      </section>
      {/* <!-- Latest End --> */}

      {/* <!-- Thai Start --> */}
      <section className="pt-4 pb-4">
        <div className="d-flex align-items-center mb-2">
          <h2>Thai Recipes</h2>
          <Link to="/categories/Thai" className="ms-auto">
            View More
          </Link>
        </div>

        <Food foods={foods.thai} />
      </section>
      {/* <!-- Thai End --> */}

      {/* <!-- American Start --> */}
      <section className="pt-4 pb-4">
        <div className="d-flex align-items-center mb-2">
          <h2>American Recipes</h2>
          <Link to="/categories/American" className="ms-auto">
            View More
          </Link>
        </div>

        <Food foods={foods.american} />
      </section>
      {/* <!-- American End --> */}
      {/* <!-- chinese Start --> */}
      <section className="pt-4 pb-4">
        <div className="d-flex align-items-center mb-2">
          <h2>Chinese Recipes</h2>
          <Link to="/categories/Chinese" className="ms-auto">
            View More
          </Link>
        </div>

        <Food foods={foods.chinese} />
      </section>
      {/* <!-- chinese End --> */}
      {/* Submit Start */}
      <section className="px-4 py-5 my-5 text-center">
        <img
          src="/images/publish-recipe.png"
          className="d-block mx-auto mb-2 img-fluid"
          alt="Publish Your recipe for FREE today"
          width="566"
          height="208"
        />
        <h1 className="display-4 fw-bold">
          Publish Your recipe for FREE today
        </h1>
        <div className="dol-lg-6 mx-auto">
          <p className="load mb-4">
            Publish Your Recipe in front of thousands of people for free.
          </p>
          <div className="d-grid g-2 d-sm-flex justify-content-sm-center">
            <Link
              to="/submit-recipe"
              className="btn btn-primery btn-dark btn-lg"
            >
              Submit Recipe
            </Link>
          </div>
        </div>
      </section>

      {/* Submit End */}
    </>
  );
}
export default Home;
