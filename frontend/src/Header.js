// import logo from "";
function Header() {
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <a
        href="/"
        className="d-flex flex-wrap align-items-center col-md-3 mb-md-0 text-dark text-decoration-none"
      >
        <img
          src="/images/logo.svg"
          width="229"
          height="68"
          alt="Cooking blog - made with Node.js"
        />
      </a>
      <ul className="nav col12 co-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <a href="/" className="nav-link px-2 link-secondary">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="nav-link px-2 link-secondary">
            About
          </a>
        </li>
        <li>
          <a
            href="/submit-recipe"
            id="SubmitRecipe"
            className="nav-link px-2 link-secondary"
          >
            Submit
          </a>
        </li>
        <li>
          <a href="/" className="nav-link px-2 link-secondary">
            Contact
          </a>
        </li>
      </ul>
      <div className="col-md-3 text-end">
        <form action="/search" method="post">
          <input
            type="text"
            name="searchTerm"
            id=""
            className="form-control"
            placeholder="Search"
            aria-label="search"
          />
        </form>
      </div>
    </header>
  );
}

export default Header;
