// import { useCallback, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../api/base";

// // const reducer = (state, action) => {
// //   switch (action.type) {
// //   }
// // };

// function SubmitRecipe() {
//   // const [state, dispatch] = useReducer(reducer, {
//   //   name: "",
//   //   description: "",
//   //   email: "",
//   //   ingredients: [],
//   //   category: "",
//   //   image: "",
//   // });
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [email, setEmail] = useState("");
//   const [ingredients, setIngredients] = useState([
//     {
//       value: "",
//       id: 0,
//     },
//   ]);
//   const [category, setCategory] = useState("");
//   const [image, setImage] = useState("");
//   const [fetchError, setFetchError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const index = e.target.id;
//     setIngredients((ingredient) => {
//       const newIngredients = ingredient.slice();
//       newIngredients[index].value = e.target.value;

//       return newIngredients;
//     });
//   };
//   const handleClick = () => {
//     setIngredients((ingredient) => {
//       const lastId = ingredient[ingredient.length - 1].id;
//       return [
//         ...ingredient,
//         {
//           value: "",
//           id: lastId + 1,
//         },
//       ];
//     });
//   };

//   const handleSubmit = useCallback(
//     async (e) => {
//       e.preventDefault();
//       const formData = new FormData();
//       formData.append("name", name);
//       formData.append("description", description);
//       formData.append("email", email);
//       formData.append(
//         "ingredients",
//         ingredients.map((ig) => ig.value)
//       );
//       formData.append("category", category);
//       formData.append("image", image);

//       api
//         .post("/submit-recipe", formData, {
//           headers: { "Content-Type": "multipart/form-data" },
//         })
//         .then((response) => {
//           setFetchError(null);
//           navigate(`/recipe/${response.data.newRecipe._id}`);
//         })
//         .catch((err) => {
//           setFetchError(err.message);
//         });
//     },
//     [category, description, email, image, name, navigate]
//   );
//   return (
//     <>
//       <div className="px-4 by-5 my-5 text-center">
//         <h1 className="display-5 fw-bold">Submit Your Recipe</h1>
//         <div className="col-6-lg mx-auto">
//           <p className="load">
//             share amizing recipes with thousands of web developers accross the
//             world. fill our form to get started
//           </p>
//         </div>
//       </div>

//       <div className="row justify-content-center">
//         {fetchError && (
//           <div className="col-8 alert alert-danger">{fetchError}</div>
//         )}
//         <div className="col-8">
//           <form autoComplete="on" onSubmit={handleSubmit}>
//             <div className="row g-3">
//               <div className="col-12">
//                 <label htmlFor="email" className="form-label">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   className="form-control"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>

//               <div className="col-12">
//                 <label htmlFor="name" className="form-label">
//                   Recipe Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   id="name"
//                   className="form-control"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//               </div>

//               <div className="col-12">
//                 <label htmlFor="description" className="form-label">
//                   Description
//                 </label>
//                 <textarea
//                   type="text"
//                   name="description"
//                   id="description"
//                   cols="30"
//                   rows="4"
//                   className="form-control"
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                 ></textarea>
//               </div>

//               <div className="col-12">
//                 <label htmlFor="ingredients" className="form-label">
//                   Ingredients
//                 </label>{" "}
//                 <br />
//                 <small>Example: Ice</small>
//                 <div className="ingredientList">
//                   <div className="ingredientDev mb-1">
//                     {ingredients.map((item, i) => {
//                       return (
//                         <input
//                           type="text"
//                           name="ingredients"
//                           className="form-control mt-2"
//                           id={item.id}
//                           key={i}
//                           value={item.value}
//                           onChange={handleChange}
//                         />
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>

//               <div className="col-12">
//                 <button
//                   type="button"
//                   className="btn btn-outline-primary"
//                   id="addIngredientsBtn"
//                   onClick={handleClick}
//                 >
//                   + ingredient
//                 </button>
//               </div>

//               <div className="col-12">
//                 <label htmlFor="category" className="form-label">
//                   Select Category
//                 </label>
//                 <select
//                   name="category"
//                   id="category"
//                   className="form-select form-control"
//                   value={category}
//                   onChange={(e) => setCategory(e.target.value)}
//                 >
//                   <option value="">Select Category</option>
//                   <option value="Thai">Thai</option>
//                   <option value="American">American</option>
//                   <option value="Chinese">Chinese</option>
//                   <option value="Mexican">Mexican</option>
//                   <option value="Indian">Indian</option>
//                 </select>
//               </div>

//               <div className="col-12">
//                 <label htmlFor="image">Product Image</label>
//                 <input
//                   type="file"
//                   name="image"
//                   id="image"
//                   className="form-control"
//                   accept="image/*"
//                   onChange={(e) => setImage(e.target.files[0])}
//                 />
//               </div>
//               <div className="col-12">
//                 <button type="submit" className="btn btn-primary">
//                   Submit Recipe
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SubmitRecipe;

import { useCallback, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/base";

const initialState = {
  name: "",
  description: "",
  email: "",
  ingredients: [{ value: "", id: 0 }],
  category: "",
  image: "",
  fetchError: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_DESCRIPTION":
      return { ...state, description: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_INGREDIENT":
      const { index, value } = action.payload;
      const newIngredients = [...state.ingredients];
      newIngredients[index].value = value;
      return { ...state, ingredients: newIngredients };
    case "ADD_INGREDIENT":
      const lastId = state.ingredients[state.ingredients.length - 1].id;
      const updatedIngredients = [
        ...state.ingredients,
        { value: "", id: lastId + 1 },
      ];
      return { ...state, ingredients: updatedIngredients };
    case "SET_CATEGORY":
      return { ...state, category: action.payload };
    case "SET_IMAGE":
      return { ...state, image: action.payload };
    case "SET_FETCH_ERROR":
      return { ...state, fetchError: action.payload };
    default:
      return state;
  }
};

function SubmitRecipe() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const handleChange = useCallback((e) => {
    const index = e.target.id;
    const value = e.target.value;
    dispatch({ type: "SET_INGREDIENT", payload: { index, value } });
  }, []);

  const handleClick = useCallback(() => {
    dispatch({ type: "ADD_INGREDIENT" });
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("name", state.name);
      formData.append("description", state.description);
      formData.append("email", state.email);
      formData.append(
        "ingredients",
        state.ingredients.map((ig) => ig.value)
      );
      formData.append("category", state.category);
      formData.append("image", state.image);

      try {
        const response = await api.post("/submit-recipe", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        dispatch({ type: "SET_FETCH_ERROR", payload: null });
        navigate(`/recipe/${response.data.newRecipe._id}`);
      } catch (err) {
        dispatch({ type: "SET_FETCH_ERROR", payload: err.message });
      }
    },
    [state, navigate]
  );

  return (
    <>
      <div className="px-4 by-5 my-5 text-center">
        <h1 className="display-5 fw-bold">Submit Your Recipe</h1>
        <div className="col-6-lg mx-auto">
          <p className="load">
            Share amazing recipes with thousands of web developers across the
            world. Fill our form to get started
          </p>
        </div>
      </div>

      <div className="row justify-content-center">
        {state.fetchError && (
          <div className="col-8 alert alert-danger">{state.fetchError}</div>
        )}
        <div className="col-8">
          <form autoComplete="on" onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-12">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  value={state.email}
                  onChange={(e) =>
                    dispatch({ type: "SET_EMAIL", payload: e.target.value })
                  }
                />
              </div>
              <div className="col-12">
                <label htmlFor="name" className="form-label">
                  Recipe Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  value={state.name}
                  onChange={(e) =>
                    dispatch({ type: "SET_NAME", payload: e.target.value })
                  }
                />
              </div>
              <div className="col-12">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  className="form-control"
                  value={state.description}
                  onChange={(e) =>
                    dispatch({
                      type: "SET_DESCRIPTION",
                      payload: e.target.value,
                    })
                  }
                ></textarea>
              </div>

              <div className="col-12">
                <label htmlFor="category" className="form-label">
                  Select Category
                </label>
                <select
                  name="category"
                  id="category"
                  className="form-select form-control"
                  value={state.category}
                  onChange={(e) =>
                    dispatch({ type: "SET_CATEGORY", payload: e.target.value })
                  }
                >
                  <option value="">Select Category</option>
                  <option value="Thai">Thai</option>
                  <option value="American">American</option>
                  <option value="Chinese">Chinese</option>
                  <option value="Mexican">Mexican</option>
                  <option value="Indian">Indian</option>
                </select>
              </div>

              <div className="col-12">
                <label htmlFor="image" className="form-label">
                  Image
                </label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  className="form-control"
                  onChange={(e) =>
                    dispatch({ type: "SET_IMAGE", payload: e.target.files[0] })
                  }
                />
              </div>
              {state.ingredients.map((ingredient, index) => (
                <div className="col-12" key={ingredient.id}>
                  <label htmlFor={`ingredient-${index}`} className="form-label">
                    Ingredient {index + 1}
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      name={`ingredient-${index}`}
                      id={index}
                      className="form-control"
                      value={ingredient.value}
                      onChange={handleChange}
                    />
                    {index === state.ingredients.length - 1 && (
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={handleClick}
                      >
                        Add Ingredient
                      </button>
                    )}
                  </div>
                </div>
              ))}
              <div className="col-12 mt-3">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SubmitRecipe;