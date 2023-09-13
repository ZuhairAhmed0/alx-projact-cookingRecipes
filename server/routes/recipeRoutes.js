const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");
const multer = require("multer");
const path = require("path");
const validate = require("../middlewares/validtion");


// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});


// Check file type for allowed extensions
function checkFileType(file, cb) {
  const allowedExtensions = /jpeg|jpg|png/;

  const extname = allowedExtensions.test(path.extname(file.originalname).toLowerCase());
  if (extname) {
    cb(null, true);
  } else {
    cb(null, false);
  }
}

// Multer configuration
const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});


// Get all food and categories
router.get("/", recipeController.homepage);

// Get all categories
router.get("/categories", recipeController.exploreCategories);

// Get recipes filtered by category
router.get("/categories/:name", recipeController.recipesByCategory);

// Search for recipes
router.post("/search", recipeController.searchRecipe);

// Explore latest recipes
router.get("/recipes/latest", recipeController.exploreLatest);

// Explore random recipe
router.get("/recipes/random", recipeController.exploreRandom);

// Get recipe details by id
router.get("/recipes/:id", recipeController.recipeDetails);

// Add new recipe
router.post(
  "/submit-recipe",
  upload.single("image"), // upload recipe image using multer
  validate(), // validtion input fields using express-validtion
  recipeController.submitRecipe
);

module.exports = router;
