import { Link } from "react-router-dom";

function ViewMore({title, link}) {
  return (
    <div className="d-flex align-items-center mb-2">
      <h2>{title} Recipes</h2>
      <Link to={link} className="ms-auto">
        View More
      </Link>
    </div>
  );
}

export default ViewMore;
