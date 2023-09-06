const Category = require("../models/Category");
const Recipe = require("../models/Recipe");

/**
 *
 * GET /
 * HomePage
 */
exports.homepage = async (req, res) => {
  try {
    const limitNumber = 5;
    const categories = await Category.find({}).limit(limitNumber);
    const latest = await Recipe.find({}).sort({ _id: -1 }).limit(limitNumber);

    const thai = await Recipe.find({ category: "Thai" }).limit(limitNumber);
    const american = await Recipe.find({ category: "American" }).limit(
      limitNumber
    );
    const chinese = await Recipe.find({ category: "Chinese" }).limit(
      limitNumber
    );
    const food = { latest, thai, american, chinese };

    res.status(200).json({ categories, food });

    // res.render("index", { title: "Home", categories, food });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message || "error occured" });
  }
};

/**
 *
 * GET /categories
 * Categories
 *
 */
exports.exploreCategories = async (req, res) => {
  try {
    const limitNumber = 20;
    const categories = await Category.find({}).limit(limitNumber);
    res.status(200).json({ categories });
  } catch (error) {
    res.status(500).send({ message: error.message || "error occured" });
  }
};

/**
 *
 * GET /categories/:id
 * recipes by category name
 *
 */
exports.recipesByCategory = async (req, res) => {
  try {
    let categoryName = req.params.name;
    const limitNumber = 20;
    const food = await Recipe.find({ category: categoryName }).limit(
      limitNumber
    );
    res.status(200).json({ food });
  } catch (error) {
    res.status(500).send({ message: error.message || "error occured" });
  }
};

/**
 *
 * GET /recipe/:id
 * get recipe details
 *
 */
exports.exploreRecipe = async (req, res) => {
  try {
    let recipeId = req.params.id;
    const recipe = await Recipe.findById(recipeId);
    res.status(200).json({ recipe });
  } catch (error) {
    res.status(500).send({ message: error.message || "error occured" });
  }
};

/**
 *
 * GET /explore-latest
 * Explore Latest
 *
 */
exports.exploreLatest = async (req, res) => {
  try {
    const limitNumber = 20;
    const recipe = await Recipe.find({}).limit(limitNumber);

    res.status(200).json({ recipe });
  } catch (error) {
    res.status(500).send({ message: error.message || "error occured" });
  }
};

/**
 *
 * GET /explore-latest
 * Explore Latest
 *
 */
exports.exploreRandom = async (req, res) => {
  try {
    const count = await Recipe.find().countDocuments();
    const random = Math.floor(Math.random() * count);
    const recipe = await Recipe.findOne().skip(random).exec();
    res.status(200).json({ recipe });
  } catch (error) {
    res.status(500).send({ message: error.message || "error occured" });
  }
};

/**
 *
 * Post /search
 * Search
 *searchTerm
 */
exports.searchRecipe = async (req, res) => {
  try {
    let { searchTerm } = req.body;
    const recipe = await Recipe.find({
      $text: { $search: searchTerm, $diacriticSensitive: true },
    });
    res.status(200).json({ recipe });
  } catch (error) {
    res.status(500).send({ message: error.message || "error occured" });
  }
};

/**
 *
 * Post /submitRecipe
 * Submit Recipe
 *
 */
exports.submitRecipeOnPost = async (req, res) => {
  try {
    let imageUploadFile;
    let uploadPath;
    let newImageName;

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(500).json({ message: "No file where uploaded." });
    } else {
      imageUploadFile = req.files.image;
      newImageName = Date.now() + imageUploadFile.name;

      uploadPath =
        require("path").resolve("./") + "/public/uploads/" + newImageName;

      imageUploadFile.mv(uploadPath, (err) => {
        if (err) return res.status(500).json(err);
      });
    }
    const newRecipe = await Recipe.create({
      name: req.body.name,
      description: req.body.description,
      email: req.body.email,
      ingredients: req.body.ingredients,
      category: req.body.category,
      image: newImageName,
    });
    res.status(200).json({ newRecipe, message: "Recipe been has added" });
  } catch (error) {
    const errors = {};
    Object.keys(error.errors)
      .map((err) => error.errors[err].properties)
      .forEach((err) => {
        errors[err.path] = err.message;
      });
    res.status(500).send({ message: errors || "error occured" });
  }
};
