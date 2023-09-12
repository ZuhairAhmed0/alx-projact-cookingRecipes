const express = require("express");
const helmet = require("helmet");
const path = require("path");
const sessoin = require("express-session");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const routes = require("./routes/recipeRoutes.js");

const app = express();
const port = process.env.PORT || 3500;

// confugratuion file
dotenv.config({
  path: "./config/.env",
});

// connect to mongodb
connectDB();

// stati files
app.use(express.static(path.join(__dirname, "public")));

// middleware for securty
app.use(helmet());

// middleware for cros origin resourse sharing
app.use(cors());

// express midlewares for body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// session
app.use(
  sessoin({
    secret: "CookingBlogSecretSessoin",
    saveUninitialized: true,
    resave: true,
  })
);

// api router
app.use("/api/v1", routes);

// run express server
app.listen(port, () => console.log(`listening yo port ${port}`));
