const Category = require("../models/Category");
const Recipe = require("../models/Recipe");
const { validationResult } = require("express-validator");
/**
 *
 * GET / 
 * get all recipes and cateroies
 * 
 */
exports.homepage = async (req, res) => {
  try {
    const limitNumber = 5; // count of recipe
    const categories = await Category.find({}).limit(limitNumber);

    // explore latest recipes
    const latest = await Recipe.find({}).sort({ _id: -1 }).limit(limitNumber);

    // get thai recipes
    const thai = await Recipe.find({ category: "Thai" }).limit(limitNumber);

    // get thai american
    const american = await Recipe.find({ category: "American" }).limit(
      limitNumber
    );

    // get thai chinese
    const chinese = await Recipe.find({ category: "Chinese" }).limit(
      limitNumber
    );
    const food = { latest, thai, american, chinese };

    // send data to user
    res.status(200).json({ categories, food });
  } catch (error) {
    // errors data to user
    res.status(500).send({ message: error.message || "error occured" });
  }
};

/**
 *
 * GET /categories
 * get all Categories
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
 * GET /categories/:name
 * get recipes by category name
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
exports.recipeDetails = async (req, res) => {
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
 * GET /recipes/latest
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
 * GET /recipes/random
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
 * @searchTerm
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
 * Post /submit-recipe
 * Submit new Recipe
 *
 */
exports.submitRecipe = async (req, res) => {
  try {
    const error = validationResult(req);
    const errors = {};
    error.array().forEach((err) => {
      errors[err.path] = err.msg;
    });

    // send error to user if inputs fields validtion failed
    if (!error.isEmpty()) {
      return res.status(500).json({ message: errors });
    }

    // create new recipe and save to mongodb
    const newRecipe = await Recipe.create({
      name: req.body.name,
      description: req.body.description,
      email: req.body.email,
      ingredients: req.body.ingredients.split(","),
      category: req.body.category,
      image: req.file.filename,
    });

    // send error to user if create new recipe failed
    if(!newRecipe) {
      return res.status(500).json({ message: "Recipe added failed" });
    }

    // send new recipe date to user and successfully message
    return res
      .status(200)
      .json({ newRecipe, message: "Recipe has been added successfully" });
  } catch (error) {

    // send error to user if create new recipe failed
    res.status(500).json({ message: error.message || "error occured" });
  }
};
