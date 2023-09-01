import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Missing from "./Missing";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // useHistory,
} from "react-router-dom";
import ExploreLatest from "./ExploreLatest";
import ExploreRandom from "./ExploreRandom";

function App() {
  const API_URL = "http://localhost:3000";
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home API_URL={API_URL}/>} />
          <Route path="/explore-latest" element={<ExploreLatest API_URL={`${API_URL}/explore-latest`}/>} />
          <Route path="/explore-random" element={<ExploreRandom API_URL={`${API_URL}/explore-random`}/>} />
          <Route path="/about" Component={About} />
          <Route path="*" Component={Missing} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
