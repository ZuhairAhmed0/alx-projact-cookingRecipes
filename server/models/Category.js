const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    // category name
    name: {
        type: String,
        required: "this filed is required"
    },
    // category image
    image: {
        type: String,
        required: "this filed is required"
    }
});

module.exports = mongoose.model('category', categorySchema);