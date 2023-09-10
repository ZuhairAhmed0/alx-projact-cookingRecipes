import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/base";

function SubmitRecipe() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [resOk, setResOk] = useState(false);
  const [resMessage, setResMessage] = useState("");
  const navigate = useNavigate();

  const addIngredient = () => {
    return (
      <div class="ingredientDev mb-1">
        <input
          type="text"
          name="ingredients"
          id="ingredients"
          class="form-control"
        />
      </div>
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newRecipe = {
        name,
        description,
        email,
        ingredients,
        category,
        image,
      };
      const response = await api.post("/submit-recipe", newRecipe, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setResOk(true)
      setResMessage(response.data.message)
      navigate(`/recipe/${response.data.id}`);
    } catch (err) {
      setResOk(false)
      setResMessage(err.response.data.message)
      navigate(`/submit-recipe`);
    }
  };
  return (
    <>
      <div className="px-4 by-5 my-5 text-center">
        <h1 className="display-5 fw-bold">Submit Your Recipe</h1>
        <div className="col-6-lg mx-auto">
          <p className="load">
            share amizing recipes with thousands of web developers accross the
            world. fill our form to get started
          </p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div
          className={resOk ? "col-8 alert alert-success" : "col-8 alert alert-danger"}
        >{resMessage}</div>
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="col-12">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  type="text"
                  name="description"
                  id="description"
                  cols="30"
                  rows="4"
                  className="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="col-12">
                <label htmlFor="ingredients" className="form-label">
                  Ingredients
                </label>{" "}
                <br />
                <small>Example: Ice</small>
                <div className="ingredientList">
                  <div className="ingredientDev mb-1">
                    <input
                      type="text"
                      name="ingredients"
                      id="ingredients"
                      className="form-control"
                      value={ingredients}
                      onChange={(e) => setIngredients(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="col-12">
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  id="addIngredientsBtn"
                  onClick={addIngredient}
                >
                  + ingredient
                </button>
              </div>

              <div className="col-12">
                <label htmlFor="category" className="form-label">
                  Select Category
                </label>
                <select
                  name="category"
                  id="category"
                  className="form-select form-control"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
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
                <label htmlFor="image">Product Image</label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  className="form-control"
                  accept="image/*"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Submit Recipe
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
