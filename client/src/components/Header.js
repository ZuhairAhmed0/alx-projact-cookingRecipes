import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
function Header({ setSearch }) {
  const [searchResults, setSearchResults] = useState("");
  const navigate = useNavigate();

  const handleChange = (value) => {
    setSearchResults(value);
    setSearch(searchResults);
    navigate("/");
  };

  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <Link
        to="/"
        className="d-flex flex-wrap align-items-center col-md-3 mb-md-0 text-dark text-decoration-none"
      >
        <img
          src="/images/logo.svg"
          width="229"
          height="68"
          alt="Cooking blog - made with Node.js"
        />
      </Link>
      <ul className="nav col12 co-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <Link to="/" className="nav-link px-2 link-secondary">
            Home
          </Link>
        </li>

        <li>
          <Link to="about" className="nav-link px-2 link-secondary">
            About
          </Link>
        </li>
        <li>
          <Link
            to="/submit-recipe"
            id="SubmitRecipe"
            className="nav-link px-2 link-secondary"
          >
            Submit
          </Link>
        </li>
        <li>
          <Link to="contact" className="nav-link px-2 link-secondary">
            Contact
          </Link>
        </li>
      </ul>
      <div className="col-md-3 text-end">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="searchTerm"
            id=""
            className="form-control"
            placeholder="Search"
            aria-label="search"
            value={searchResults}
            onChange={(e) => handleChange(e.target.value)}
          />
        </form>
      </div>
    </header>
  );
}

export default Header;
