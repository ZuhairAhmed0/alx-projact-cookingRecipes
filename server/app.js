const express = require("express");
const fielUpload = require("express-fileupload");
const sessoin = require("express-session");
const dotenv = require("dotenv");
const cors = require('cors')
const connectDB = require("./config/db");
const routes = require("./routes/recipeRoutes.js");

const app = express();
const port = process.env.PORT || 3500;

// confugratuion
dotenv.config({
  path: "./config/.env",
});

// connect to mongodb
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fielUpload());
app.use(cors());
app.use(
  sessoin({
    secret: "CookingBlogSecretSessoin",
    saveUninitialized: true,
    resave: true,
  })
);

app.use("/api/v1", routes);

app.listen(port, () => console.log(`listening yo port ${port}`));
