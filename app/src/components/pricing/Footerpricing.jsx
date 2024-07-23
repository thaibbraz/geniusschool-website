import React from "react";
import logoreverse from "../../images/geniusschool-logo-reverse.jpeg";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

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
        <HashLink smooth to="/#about-us">
          About Us
        </HashLink>
        <Link to="/pricing">Pricing</Link>
        <HashLink smooth to="/#contact-us">
          Contact Us
        </HashLink>
      </div>
      <hr className="footerpricing-divider" />
      <div className="footerpricing-links sm-text">
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
      <p className="footerpricing-marker sm-text">
        ©{currentYear} Genius School
      </p>
    </footer>
  );
};

export default Footerpricing;
