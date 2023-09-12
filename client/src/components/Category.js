import React from "react";
import { Link } from "react-router-dom";
function Category({ categories }) {
  return (
    <>
      {categories &&
        categories.map(({ _id: id, name, image }) => (
          <Link
            key={id}
            to={name}
            className="col text-center category__link"
          >
            <div className="category__img category__img--large shadow">
              <img
                src={`/images/${image}`}
                alt={name}
                loading="lazy"
              />
            </div>
            <div className="py-3">{name}</div>
          </Link>
        ))}
    </>
  );
}

export default Category;
