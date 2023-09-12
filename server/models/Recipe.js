const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    // recipe name
    name: {
        type: String,
        required: "this filed is required"
    },
    // recipe description
    description: {
        type: String,
        required: "this filed is required"
    },
    // user submit new  recipe email
    email: {
        type: String,
        required: "this filed is required"
    },
    // recipe ingredients
    ingredients: {
        type: Array,
        required: "this filed is required"
    },
    // recipe category
    category: {
        type: String,
        enum: ['Thai', 'American', 'Chinese', 'Mexican', 'Indian', 'Spansh'],
        required: "this filed is required"
    },
    // recipe image
    image: {
        type: String,
        required: "this filed is required"
    },
});

recipeSchema.index({name: "text", description: "text"})

module.exports = mongoose.model('Recipe', recipeSchema);