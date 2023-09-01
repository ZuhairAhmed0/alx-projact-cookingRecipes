import { useEffect, useState } from "react";
import axios from "axios";
import Food from "./Food";

function Home({ API_URL }) {
  const [categories, setCategories] = useState([]);
  const [food, setFood] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        const results = response.data;
        setCategories(results.categories);
        setFood(results.food);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
            <a
              href="/explore-latest"
              className="btn btn-dark btn-lg px-4 me-md-2"
            >
              Explore latest
            </a>
            <a
              href="/explore-random"
              className="btn btn-outline-secondary btn-lg px-4 me-md-2"
            >
              Show Random
            </a>
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
        {categories.map((category) => (
          <a
            key={category._id}
            href={`/categories/${category.name}`}
            className="col text-center category__link"
          >
            <div className="category__img shadow">
              <img
                src={`/images/${category.image}`}
                alt={category.name}
                loading="lazy"
              />
            </div>
            <div className="py-3">{category.name}</div>
          </a>
        ))}
        <a href="/categories" className="col text-center category__link">
          <div className="category__img shadow">
            <img
              src="/images/view-all.jpg"
              alt="View All Categories"
              loading="lazy"
            />
          </div>
          <div className="py-3">View All</div>
        </a>
      </div>
      {/* Categpries End */}
      {/* <!-- Latest Start --> */}
      <section className="pt-4 pb-4">
        <div className="d-flex align-items-center mb-2">
          <h2>Latest Recipes</h2>
          <a href="/explore-latest" className="ms-auto">
            View More
          </a>
        </div>

        <div className="row row-cols-2 row-cols-lg-5 g-3 g-gl-3">
          {food.latest &&
            food.latest.map((recipe) => {
              return <Food recipe={recipe} key={recipe._id} />;
            })}
        </div>
      </section>
      {/* <!-- Latest End --> */}

      {/* <!-- Thai Start --> */}
      <section className="pt-4 pb-4">
        <div className="d-flex align-items-center mb-2">
          <h2>Thai Recipes</h2>
          <a href="/recipe/thai" className="ms-auto">
            View More
          </a>
        </div>

        <div className="row row-cols-2 row-cols-lg-5 g-3 g-gl-3">
          {food.latest &&
            food.latest.map((recipe) => {
              return <Food recipe={recipe} key={recipe._id} />;
            })}
        </div>
      </section>
      {/* <!-- Thai End --> */}

      {/* <!-- American Start --> */}
      <section className="pt-4 pb-4">
        <div className="d-flex align-items-center mb-2">
          <h2>American Recipes</h2>
          <a href="/recipe/american" className="ms-auto">
            View More
          </a>
        </div>

        <div className="row row-cols-2 row-cols-lg-5 g-3 g-gl-3">
          {food.latest &&
            food.latest.map((recipe) => {
              return <Food recipe={recipe} key={recipe._id} />;
            })}
        </div>
      </section>
      {/* <!-- American End --> */}
      {/* <!-- chinese Start --> */}
      <section className="pt-4 pb-4">
        <div className="d-flex align-items-center mb-2">
          <h2>Chinese Recipes</h2>
          <a href="/recipe/chinese" className="ms-auto">
            View More
          </a>
        </div>

        <div className="row row-cols-2 row-cols-lg-5 g-3 g-gl-3">
          {food.latest &&
            food.latest.map((recipe) => {
              return <Food recipe={recipe} key={recipe._id} />;
            })}
        </div>
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
            <a
              href="/submit-recipe"
              className="btn btn-primery btn-dark btn-lg"
            >
              Submit Recipe
            </a>
          </div>
        </div>
      </section>

      {/* Submit End */}
    </>
  );
}
export default Home;