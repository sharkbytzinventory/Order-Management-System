import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbr">
        <div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h2 className="logo">
            <span>
              <img src="home.svg" style={{ paddingTop: "0.4rem" }} />
            </span>
            Order Mangement
          </h2>
        </Link>
        </div>
        <div>
        <nav>
          <Link to="/login">Login</Link>
        </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
