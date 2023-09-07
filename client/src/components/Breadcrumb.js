import { Link } from "react-router-dom";

function Breadcrumb({ children }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        {children}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
