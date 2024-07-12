import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "../images/geniusschool-logo.jpeg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar container-fluid">
      <div className="container-fluid">
        <a href="#">
          <img className="navbar-logo" src={logo} alt="Genius School Logo" />
        </a>
        <div className="navbar-nav-wrapper">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <button className="navbar-button">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
