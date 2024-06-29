import React from "react";
import "./Footer.css"; // Ensure this CSS file exists with the provided styles
import instagramIcon from "./image/in.png";
import xIcon from "./image/tw.png";
import linkedinIcon from "./image/li.png";
import facebookIcon from "./image/meta.png";
import logo from "./image/logo.png";
import home from "./image/hi.png";
import message from "./image/msg.png";
import call from "./image/ci.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="social-media">
          <p>Follow us on</p>
          <div className="social-icons">
            <a href="https://www.instagram.com">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://www.x.com">
              <img src={xIcon} alt="X" />
            </a>
            <a href="https://www.linkedin.com">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://www.facebook.com">
              <img src={facebookIcon} alt="Facebook" />
            </a>
          </div>
        </div>
        <div className="contact-info">
          <Link to="/about" onClick={scrollToTop}>About us</Link>
          <Link to="/contact" onClick={scrollToTop}>Contact us</Link>
          <Link to="/myOrders" onClick={scrollToTop}>Order</Link>
          <Link to="/privacy" onClick={scrollToTop}>Privacy Policy</Link>
          <Link to="/returnAndCancellation" onClick={scrollToTop}>Return and Cancellation</Link>
          <Link to="/help" onClick={scrollToTop}>Help</Link>
          <Link to="/EPR_Page" onClick={scrollToTop}>EPR Compliance</Link>
        </div>
        <div className="address">
          <p>
            <img src={home} alt="Address" /> Aung Fatehpur, Uttar Pradesh
            India-212665
          </p>
          <p>
            <img src={message} alt="Email" /> contact@vigybag.com
          </p>
          <p>
            <img src={call} alt="Phone" /> +91 1234567890
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 VigyBag. All rights reserved</p>
        <nav>
          <Link to="/" onClick={scrollToTop}>Home</Link>
          <Link to="/our-services" onClick={scrollToTop}>Our Services</Link>
          <Link to="/terms-and-conditions" onClick={scrollToTop}>Terms & Conditions</Link>
          <Link to="/faq" onClick={scrollToTop}>FAQ</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
