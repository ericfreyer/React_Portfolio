import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const location = useLocation();

  return (
    <nav
      className="navbar navbar-expand-sm navbar-light"
      style={{ backgroundColor: "#464646"}}>
      <li className="navbar-brand text-white-50">
        <Link to="/" className={location.pathname === "/"}>
          Eric Freyer
        </Link>
      </li>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link
              className="nav-link text-white-50"
              className={location.pathname === "/"}
            >
              Home
            </Link>
          </li>
          <li className="nav-item active">
            <Link
              className="nav-link text-white-50"
              className={location.pathname === "/portfolio"}
              id="portfolio"
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item active">
            <Link
              className="nav-link text-white-50"
              className={location.pathname === "/contact"}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavTabs;
