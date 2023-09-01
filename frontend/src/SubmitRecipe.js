function SubmitRecipe() {
  return (
    <>
      <div class="px-4 by-5 my-5 text-center">
        <h1 class="display-5 fw-bold">Submit Your Recipe</h1>
        <div class="col-6-lg mx-auto">
          <p class="load">
            share amizing recipes with thousands of web developers accross the
            world. fill our form to get started
          </p>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-8 alert alert-success" aria="alert"></div>
        <div class="col-8 alert alert-danger" aria="alert"></div>
        <div class="col-8">
          <form
            action="/submit-recipe"
            autocomplete="on"
            method="post"
            enctype="multipart/form-data"
          >
            <div class="row g-3">
              <div class="col-12">
                <label for="email" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="form-control"
                />
              </div>

              <div class="col-12">
                <label for="name" class="form-label">
                  Recipe Name
                </label>
                <input type="text" name="name" id="name" class="form-control" />
              </div>

              <div class="col-12">
                <label for="description" class="form-label">
                  Description
                </label>
                <textarea
                  type="text"
                  name="description"
                  id="description"
                  cols="30"
                  rows="4"
                  class="form-control"
                ></textarea>
              </div>

              <div class="col-12">
                <label for="ingredients" class="form-label">
                  Ingredients
                </label>{" "}
                <br />
                <small>Example: Ice</small>
                <div class="ingredientList">
                  <div class="ingredientDev mb-1">
                    <input
                      type="text"
                      name="ingredients"
                      id="ingredients"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>

              <div class="col-12">
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  id="addIngredientsBtn"
                >
                  + ingredient
                </button>
              </div>

              <div class="col-12">
                <label for="category" class="form-label">
                  Select Category
                </label>
                <select name="category" id="" class="form-select form-control">
                  <option selected>Select Category</option>
                  <option value="Thai">Thai</option>
                  <option value="American">American</option>
                  <option value="Chinese">Chinese</option>
                  <option value="Mexican">Mexican</option>
                  <option value="Indian">Indian</option>
                </select>
              </div>

              <div class="col-12">
                <label for="image">Product Image</label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  class="form-control"
                  accept="image/*"
                />
              </div>

              <div class="col-12">
                <button type="submit" class="btn btn-primary">
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