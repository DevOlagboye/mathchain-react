import React from "react";
import "./Footer.css";
import footerLogo from "../../assets/images/LOGO——white.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-details">
        <div className="footer-text">
          <img src={footerLogo} alt="Footer Logo" />
        </div>
        <div className="footer-subscribe"></div>
      </div>
    </div>
  );
};

export default Footer;
