import React from "react";
import logoreverse from "../../images/geniusschool-logo-reverse.jpeg";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const Footerpricing = () => {
  const currentYear = format(new Date(), "yyyy");
  return (
    <footer className="footerpricing">
      <Link to="/">
        <img
          className="footerpricing-logo"
          src={logoreverse}
          alt="Genius School Logo"
        />
      </Link>
      <div className="footerpricing-links-logo">
        <a href="#about-us">About Us</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact-us">Contact Us</a>
      </div>
      <hr className="footerpricing-divider" />
      <div className="footerpricing-links sm-text">
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Service</a>
        <a href="#cookies">Cookies Settings</a>
      </div>
      <p className="footerpricing-marker sm-text">
        ©{currentYear} Genius School
      </p>
    </footer>
  );
};

export default Footerpricing;
