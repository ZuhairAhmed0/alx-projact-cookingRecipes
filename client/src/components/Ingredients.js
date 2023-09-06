import React from "react";

function Ingredients({ingredients}) {
  return (
    <>
      {ingredients &&
        ingredients.map((ingredient) => {
          return (
            <li className="list-group-item" key={ingredient}>
              {ingredient}
            </li>
          );
        })}
    </>
  );
}

export default Ingredients;
