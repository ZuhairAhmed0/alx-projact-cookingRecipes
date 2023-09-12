import { useCallback, useReducer, useState } from "react";
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
function SubmitRecipe() {
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    initialState
  );
  const [fetchError, setFetchError] = useState("");
  const [submiting, isSubmiting] = useState(true);
  const navigate = useNavigate();

  const handleChange = useCallback(
    (e) => {
      const index = e.target.id;
      const value = e.target.value;
      const newIngredients = [...state.ingredients];
      newIngredients[index].value = value;
      setState({ ingredients: newIngredients });
    },
    [state]
  );

  const handleClick = useCallback(() => {
    const lastId = state.ingredients[state.ingredients.length - 1].id;
    const updatedIngredients = [
      ...state.ingredients,
      { value: "", id: lastId + 1 },
    ];
    setState({ ingredients: updatedIngredients });
  }, [state]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      isSubmiting(false);
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
        setFetchError(null);
        navigate(`/recipe/${response.data.newRecipe._id}`);
      } catch (err) {
        setFetchError(err.response?.data.message || { fail: err.message });
        isSubmiting(true);
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
        {" "}
        {fetchError.fail && (
          <div className="col-8 alert alert-danger">{fetchError.fail}</div>
        )}
        <div className="col-12 col-sm-8">
          <form autoComplete="on" onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-12">
                <label htmlFor="email" className="form-label">
                  Email{" "}
                  {fetchError.email && (
                    <span className="text-danger" style={{ fontSize: "15px" }}>
                      {" "}
                      {fetchError.email}
                    </span>
                  )}
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  value={state.email}
                  onChange={(e) => setState({ email: e.target.value })}
                />
              </div>
              <div className="col-12">
                <label htmlFor="name" className="form-label">
                  Recipe Name{" "}
                  {fetchError.name && (
                    <span className="text-danger" style={{ fontSize: "15px" }}>
                      {" "}
                      {fetchError.name}
                    </span>
                  )}
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  value={state.name}
                  onChange={(e) => setState({ name: e.target.value })}
                />
              </div>
              <div className="col-12">
                <label htmlFor="description" className="form-label">
                  Description{" "}
                  {fetchError.description && (
                    <span className="text-danger" style={{ fontSize: "15px" }}>
                      {" "}
                      {fetchError.description}
                    </span>
                  )}
                </label>
                <textarea
                  name="description"
                  id="description"
                  className="form-control"
                  value={state.description}
                  onChange={(e) => setState({ description: e.target.value })}
                ></textarea>
              </div>

              <div className="col-12">
                <label htmlFor="category" className="form-label">
                  Select Category{" "}
                  {fetchError.category && (
                    <span className="text-danger" style={{ fontSize: "15px" }}>
                      {" "}
                      {fetchError.category}
                    </span>
                  )}
                </label>
                <select
                  name="category"
                  id="category"
                  className="form-select form-control"
                  value={state.category}
                  onChange={(e) => setState({ category: e.target.value })}
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
                  Image{" "}
                  {fetchError.image && (
                    <span className="text-danger" style={{ fontSize: "15px" }}>
                      {" "}
                      {fetchError.image}
                    </span>
                  )}
                </label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  className="form-control"
                  onChange={(e) => setState({ image: e.target.files[0] })}
                />
              </div>
              {state.ingredients.map((ingredient, index) => (
                <div className="col-12" key={ingredient.id}>
                  <label htmlFor={index} className="form-label">
                    Ingredient {index + 1}{" "}
                    {fetchError.ingredients && (
                      <span
                        className="text-danger"
                        style={{ fontSize: "15px" }}
                      >
                        {" "}
                        {fetchError.ingredients}
                      </span>
                    )}
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      name="ingredients"
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
                  {submiting ? "Submit" : "please wait"}
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
