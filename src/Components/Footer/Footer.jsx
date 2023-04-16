import React from "react";
import "./Footer.css";
import footerLogo from "../../assets/images/LOGO——white.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-details">
        <div className="footer-text">
          <img src={footerLogo} alt="Footer Logo" />
          <p>
            A hyper decentralized, fully composable and private social <br />
            graph with the same level of interoperability as Cosmos
            <br /> network.
          </p>
          <hr className="footer-hr" />
          <p>Terms of use | Disclaimer</p>
          <p>© {new Date().getFullYear()} Match Chain. All Rights Reserved.</p>
        </div>
        <div className="footer-subscribe">
          <h5>Subscribe</h5>
          <p>
            Subscribe to the newsletter to hear about Match
            <br /> Chain updates and events.
            <div className="footer-input">
              <input
                type="email"
                placeholder="Your email"
                className="footer-email"
              />
              <button className="subscribe-button">Subscribe</button>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
