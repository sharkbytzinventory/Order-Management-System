import { Link } from "react-router-dom";

function Navbar1() {
  return (
    <>
      <div className="navbar" style={{position:"inherit"}}>
        <div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h2 className="logo">
            <span className="span">
              <img src="home.svg" style={{ paddingTop: "0.4rem" }} />
            </span>
            Order Mangement
          </h2>
        </Link>
        </div>
        <div>
        <nav>
          <Link to="/">Logout</Link>
        </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar1;
