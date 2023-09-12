const { body } = require("express-validator");

// validation user inputs fields

const validate = () => {
  return [
    body("email")
      .isEmail()
      .notEmpty()
      .withMessage("Please enter your email address")
      .normalizeEmail(),
    body("name")
      .isString()
      .notEmpty()
      .withMessage("Please enter recipe name")
      .trim()
      .escape(),
    body("description")
      .isString()
      .notEmpty()
      .withMessage("Please enter description of recipe")
      .trim()
      .escape(),
    body("ingredients")
      .notEmpty()
      .withMessage("Please enter ingredients of recipe")
      .trim()
      .escape(),
    body("category")
      .isString()
      .notEmpty()
      .withMessage("Please select category of recipe")
      .trim()
      .escape(),
    body("image").custom((value, { req }) => {
      if (!req.file) {
        throw new Error("Please upload image of recipe");
      }
      return true;
    }),
  ];
};

module.exports = validate;
