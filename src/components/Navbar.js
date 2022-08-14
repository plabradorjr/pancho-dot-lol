import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-horizontal navbar-expand-lg navbar-dark bg-dark-dark">
      <div className="container justify-content">
        <div className="col-md-6">
          <Link to="/">
            <p className="navbar-brand mt-3">Pancho Labrador Jr.</p>
          </Link>
        </div>
        <div className="col-md-6 text-right">
          <Link to="/resume">
            <span className="navbar-brand" href="#" style={{ fontSize: 16 }}>
              Resume
            </span>
          </Link>

          <a
            className="navbar-brand"
            style={{ fontSize: 16 }}
            href="https://github.com/plabradorjr"
            target="_blank"
            rel="noreferrer"
          >
            <span className="nav-link-inner--text">Github</span>
          </a>
          <a
            className="navbar-brand"
            style={{ fontSize: 16 }}
            href="https://www.linkedin.com/in/plabrador/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="nav-link-inner--text">LinkedIn</span>
          </a>
          <a
            className="navbar-brand text-right"
            style={{ fontSize: 16 }}
            href="https://twitter.com/0xSer"
            target="_blank"
            rel="noreferrer"
          >
            <span className="nav-link-inner--text">Twitter</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
