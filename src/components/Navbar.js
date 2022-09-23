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
          <h4 id="nav-text">Pancho Labrador Jr._</h4>{" "}
        </Link>
        <Link to="/resume">
          {" "}
          <span id="_nav-link">Resume_</span>{" "}
        </Link>
        <a
          href="https://github.com/plabradorjr"
          target="_blank"
          rel="noreferrer"
        >
          <span id="_nav-link">Github_</span>{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/plabrador/"
          target="_blank"
          rel="noreferrer"
        >
          <span id="_nav-link">LinkedIn_</span>{" "}
        </a>
        <a href="https://twitter.com/0xSer" target="_blank" rel="noreferrer">
          <span id="_nav-link">Twitter_</span>{" "}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
