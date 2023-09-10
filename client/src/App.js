import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Missing from "./components/Missing";
import ExploreLatest from "./components/ExploreLatest";
import ExploreRandom from "./components/ExploreRandom";
import RecipeDetails from "./components/RecipeDetails";
import Categories from "./components/Categories";
import Recipes from "./components/Recipes";
import SubmitRecipe from "./components/SubmitRecipe";
import Search from "./components/Search";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState([]);
  return (
    <div className="App">
      <Header search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/" element={<Search search={search} />} />
        <Route path="/explore-latest" Component={ExploreLatest} />
        <Route path="/explore-random" Component={ExploreRandom} />
        <Route path="/recipe/:id" Component={RecipeDetails} />
        <Route path="/categories" Component={Categories} />
        <Route path="/categories/:name" Component={Recipes} />
        <Route path="/submit-recipe" Component={SubmitRecipe} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
        <Route path="*" Component={Missing} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
