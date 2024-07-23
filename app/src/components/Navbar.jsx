import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "../images/geniusschool-logo.jpeg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <Link to="/">
          <img className="navbar-logo" src={logo} alt="Genius School Logo" />
        </Link>
        <div className="navbar-nav-wrapper">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/about-us">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <button className="navbar-button">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
