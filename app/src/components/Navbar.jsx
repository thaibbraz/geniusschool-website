import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "bootstrap/dist/css/bootstrap.min.css";
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
              <HashLink
                smooth
                className="nav-link"
                aria-current="page"
                to="/#video-section"
              >
                About Us
              </HashLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href={`mailto:thiago@geniuschool.com?subject=Contact%20Us`}
              >
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
