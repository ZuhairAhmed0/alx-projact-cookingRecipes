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
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Layout from "./Layout";

function App() {
  const [search, setSearch] = useState([]);
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout search={search} setSearch={setSearch} />}>
          <Route index element={<Home search={search} setSearch={setSearch}/>} />
          <Route path="recipes">
            <Route path=":id" element={<RecipeDetails />} />
            <Route path="latest" element={<ExploreLatest />} />
            <Route path="random" element={<ExploreRandom />} />
          </Route>
          <Route path="categories">
            <Route index element={<Categories />} />
            <Route path=":name" element={<Recipes />} />
          </Route>
          <Route path="submit-recipe" element={<SubmitRecipe />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
