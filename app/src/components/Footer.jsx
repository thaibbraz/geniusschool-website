import React from "react";
import logoreverse from "../images/geniusschool-logo-reverse.jpeg";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <img
          className="footer-logo"
          src={logoreverse}
          alt="Genius School Logo"
        />
        <div className="footer-links-logo">
          <a href="#about-us">About Us</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact-us">Contact Us</a>
        </div>
        <hr className="footer-divider" />
        <div className="footer-links sm-text">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#cookies">Cookies Settings</a>
        </div>
        <p className="footer-marker sm-text">©2024 Genius School</p>
      </footer>
    </div>
  );
};

export default Footer;
