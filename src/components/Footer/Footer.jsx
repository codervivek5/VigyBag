import React from "react";
import "./Footer.css"; // Ensure this CSS file exists with the provided styles
import instagramIcon from "./image/in.png";
import xIcon from "./image/tw.png";
import linkedinIcon from "./image/li.png";
import facebookIcon from "./image/meta.png";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // boxShadow: "0px 0px 10px 4px #ffffff";
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="VigyBag Logo" style={{ height: "12vh" }} />
          </Link>
        </div>
        <div className="contact-info text-sm">
          <p className="font-thin text-center text-gray-400">QUICK LINKS</p>{" "}
          <hr />
          <br />
          <Link to="/" onClick={scrollToTop}>
            Home
          </Link>
          <Link to="/faq" onClick={scrollToTop}>
            FAQ
          </Link>
          <Link to="/contact" onClick={scrollToTop}>
            Contact us
          </Link>
          <Link to="/our-services" onClick={scrollToTop}>
            Our Services
          </Link>
          <Link to="/about-us" onClick={scrollToTop}>
            Meet our contributor
          </Link>
        </div>
        <div className="contact-info text-sm">
          <p className="font-thin text-center text-gray-400">CONSUMER POLICY</p>{" "}
          <hr />
          <br />
          <Link to="/myOrders" onClick={scrollToTop}>
            Order
          </Link>
          <Link to="/help" onClick={scrollToTop}>
            Help
          </Link>
          <Link to="/privacy" onClick={scrollToTop}>
            Privacy Policy
          </Link>
          <Link to="/returnAndCancellation" onClick={scrollToTop}>
            Return and Cancellation
          </Link>
          <Link to="/EPR_Page" onClick={scrollToTop}>
            EPR Compliance
          </Link>
          <Link to="/terms-and-conditions" onClick={scrollToTop}>
            Terms & Conditions
          </Link>
        </div>
        <div className="flex flex-col justify-items-end items-start">
          <p className="text-center text-gray-400 text-sm">
            Registered Office Address:
          </p>{" "}
          <hr />
          <div className="address flex flex-col justify-start items-start text-sm hover:cursor-pointer">
            <p>
              <lord-icon
                style={{
                  width: "25px",
                  height: "25px",
                  paddingTop: "0px",
                  paddingLeft: "1px",
                }}
                src="https://cdn.lordicon.com/tdtlrbly.json"
                trigger="hover"
                colors="primary:#109121,secondary:#109121"></lord-icon>{" "}
              Aung Fatehpur, Uttar Pradesh India-212665
            </p>
            <p>
              <lord-icon
                style={{
                  width: "25px",
                  height: "25px",
                  paddingTop: "0px",
                  paddingLeft: "1px",
                }}
                src="https://cdn.lordicon.com/xtzvywzp.json"
                trigger="hover"
                colors="primary:#109121"></lord-icon>{" "}
              contact@vigybag.com
            </p>
            <p>
              <lord-icon
                style={{
                  width: "25px",
                  height: "25px",
                  paddingTop: "0px",
                  paddingLeft: "1px",
                }}
                src="https://cdn.lordicon.com/srsgifqc.json"
                trigger="hover"
                colors="primary:#109121"></lord-icon>{" "}
              +91 1234567890
            </p>
          </div>
          <br />
          <div className="social-media flex flex-col justify-center items-center">
            <p className="text-sm text-center text-gray-400">SOCIALS:</p> <hr />
            <div className="social-icons">
              <a href="https://www.instagram.com">
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a href="https://www.x.com">
                <img src={xIcon} alt="X" />
              </a>
              <a href="https://www.linkedin.com">
                <lord-icon
                  style={{
                    width: "30px",
                    height: "30px",
                    paddingTop: "0px",
                    paddingLeft: "1px",
                  }}
                  src="https://cdn.lordicon.com/ftgjzwjn.json"
                  trigger="hover"></lord-icon>
              </a>
              <a href="https://www.facebook.com">
                <lord-icon
                  style={{
                    width: "30px",
                    height: "30px",
                    paddingTop: "0px",
                    paddingLeft: "1px",
                  }}
                  src="https://cdn.lordicon.com/nlsfemdg.json"
                  trigger="hover"></lord-icon>
              </a>

              <a href="https://web.whatsapp.com/">
                <lord-icon
                  style={{
                    width: "35px",
                    height: "35px",
                    paddingTop: "0px",
                    paddingLeft: "1px",
                  }}
                  src="https://cdn.lordicon.com/fjuachvi.json"
                  trigger="hover"></lord-icon>
              </a>

              <a href="https://web.whatsapp.com/">
                <lord-icon
                  style={{
                    width: "35px",
                    height: "35px",
                    paddingTop: "0px",
                    paddingLeft: "1px",
                  }}
                  src="https://cdn.lordicon.com/gzjopzvf.json"
                  trigger="hover"></lord-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="footer-bottom text-sm">
        <p>© 2024 VigyBag. All rights reserved</p>
        <img
          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg"
          alt="Payment methods"></img>
        <nav>
          <Link to="/" onClick={scrollToTop}>
            Home
          </Link>
          <Link to="/our-services" onClick={scrollToTop}>
            Our Services
          </Link>
          <Link to="/terms-and-conditions" onClick={scrollToTop}>
            Terms & Conditions
          </Link>
          <Link to="/faq" onClick={scrollToTop}>
            FAQ
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
