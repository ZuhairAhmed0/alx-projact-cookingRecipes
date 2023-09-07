import Home from "./components/Home";
import About from "./components/About";
import Missing from "./components/Missing";
import ExploreLatest from "./components/ExploreLatest";
import ExploreRandom from "./components/ExploreRandom";
import RecipeDetails from "./components/RecipeDetails";
import Categories from "./components/Categories";
import Recipes from "./components/Recipes";
import SubmitRecipe from "./components/SubmitRecipe";
import Contact from "./components/Contact";
import Layout from "./Layout";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  return (
    <Routes>
      <Route path="/" element={<Layout setSearch={setSearch} />}>
        <Route index element={<Home search={search} />} />
        <Route path="explore-latest" element={<ExploreLatest />} />
        <Route path="explore-random" element={<ExploreRandom />} />
        <Route path="recipe/:id" element={<RecipeDetails />} />
        <Route path="categories" element={<Categories />} />
        <Route path="categories/:name" element={<Recipes />} />
        <Route path="submit-recipe" element={<SubmitRecipe />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
