const express  = require('express');
const router = express.Router();

const recipeController = require('../controllers/recipeController');

router.get('/', recipeController.homepage);
router.get('/recipe/:id', recipeController.exploreRecipe);
router.get('/categories', recipeController.exploreCategories);
router.get('/categories/:name', recipeController.recipesByCategory);
router.post('/search', recipeController.searchRecipe);
router.get('/explore-latest', recipeController.exploreLatest);
router.get('/explore-random', recipeController.exploreRandom);
router.post('/submit-recipe', recipeController.submitRecipeOnPost);
router.delete('/recipe/:id', recipeController.deleteRecipe);

module.exports = router;