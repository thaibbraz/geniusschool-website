import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logoreverse from "../../images/geniusschool-logo-reverse.jpeg";
import { format } from "date-fns";

const Footer = () => {
  const currentYear = format(new Date(), "yyyy");
  return (
    <footer className="footer">
      <img className="footer-logo" src={logoreverse} alt="Genius School Logo" />
      <div className="footer-links-logo">
        <HashLink smooth to="/#about-us">
          About Us
        </HashLink>
        <Link to="/pricing">Pricing</Link>
        <HashLink smooth to="/#contact-us">
          Contact Us
        </HashLink>
      </div>
      <hr className="footer-divider" />
      <div className="footer-links sm-text">
        <HashLink smooth to="/#privacy">
          Privacy Policy
        </HashLink>
        <HashLink smooth to="/#terms">
          Terms of Service
        </HashLink>
        <HashLink smooth to="/#cookies">
          Cookies Settings
        </HashLink>
      </div>
      <p className="footer-marker sm-text">©{currentYear} Genius School</p>
    </footer>
  );
};

export default Footer;
