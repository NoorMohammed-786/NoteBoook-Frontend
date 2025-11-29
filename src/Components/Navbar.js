import React, { useEffect } from "react";
import { Link,useLocation } from "react-router-dom";

const Navbar = () => {
  const location=useLocation();

  useEffect(() => {
  }, [location]);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Navbar
      </a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item active">
            <Link className={`nav-link ${location.pathname==="/"? "active":""}`} to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname==="/about"? "active":""}`} to="/about">
              About
            </Link>
          </li>
        </ul>

        <form className="d-flex" role="search">
         
          <Link  to="/login" className="btn btn-primary mx-1" type="submit">
            Login
          </Link>
           <Link to="/signup" className="btn btn-primary mx-" type="submit">
            Sign-Up
          </Link>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
