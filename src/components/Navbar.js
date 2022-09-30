import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-light _dark-nav justify-content-between pt-4 px-5 nav-text"
      id="nav-box"
    >
      <div>
        <Link to="/">
          {" "}
          <h4 id="nav-text">Pancho Labrador Jr.</h4>{" "}
        </Link>
        <Link to="/resume">
          {" "}
          <span id="_nav-link">Resume</span>{" "}
        </Link>
        <a
          href="https://github.com/plabradorjr"
          target="_blank"
          rel="noreferrer"
        >
          <span id="_nav-link">Github</span>{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/plabrador/"
          target="_blank"
          rel="noreferrer"
        >
          <span id="_nav-link">LinkedIn</span>{" "}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
