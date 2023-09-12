const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");
const multer = require("multer");
const path = require("path");
const validate = require("../middlewares/validtion");


// config multer file name and  destination
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});


// allowed only jpeg, jpg and png image format
function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png/;

  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  if (extname) {
    cb(null, true);
  } else {
    cb(null, false);
  }
}

// multer configration
const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});


// get all food and categories
router.get("/", recipeController.homepage);

// get details of recipe  by recipe id
router.get("/recipe/:id", recipeController.exploreRecipe);

// get all categories
router.get("/categories", recipeController.exploreCategories);

// get recipes filter by category
router.get("/categories/:name", recipeController.recipesByCategory);

// search in all recipes
router.post("/search", recipeController.searchRecipe);

// explore latest recipes
router.get("/explore-latest", recipeController.exploreLatest);

// explore random recipe
router.get("/explore-random", recipeController.exploreRandom);

// add new recipe
router.post(
  "/submit-recipe",
  upload.single("image"), // upload recipe image using multer
  validate(), // validtion inputs fields using express validtion
  recipeController.submitRecipe
);

module.exports = router;
