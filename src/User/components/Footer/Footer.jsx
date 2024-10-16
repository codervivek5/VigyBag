import React from "react";
import "./Footer.css";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/Logo.svg";
import googlePlay from "../../../assets/google-play.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="flex-shrink-0 ">
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              alt="VigyBag Logo"
              style={{
                height: "12vh",
                zIndex: "1",
                marginLeft: "40px",
                filter: "drop-shadow(1px 1px)",
              }}
            />
          </Link>

          <div
            className="text-center  md:text-left mb-4 md:mb-0 md:mr-8"
            style={{
              marginLeft: "20px",
              marginTop: "20px",
            }}>
            <a
              href="https://play.google.com/store/apps/details?id=com.vigybag"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a73e8] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg inline-flex items-center hover:bg-blue-700 transition duration-300">
              <img
                src={googlePlay}
                alt="Google Play"
                className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3"
              />
              <span>
                <div className="text-xs">GET IT ON</div>
                <div className="text-base sm:text-lg md:text-xl font-semibold">
                  Google Play
                </div>
              </span>
            </a>
          </div>
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
          <Link to="/about-us" onClick={scrollToTop}>
            About Us
          </Link>
          <Link to="/contact" onClick={scrollToTop}>
            Contact us
          </Link>
          <Link to="/career" onClick={scrollToTop}>
            Careers
          </Link>
          <Link to="/certificate" onClick={scrollToTop}>
            Certification Page
          </Link>
          <Link to="/contributors" onClick={scrollToTop}>
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
          <Link to="/privacy-policy" onClick={scrollToTop}>
            Privacy Policy
          </Link>
          <Link to="/return-and-cancellation" onClick={scrollToTop}>
            Return and Cancellation
          </Link>
          <Link to="/epr" onClick={scrollToTop}>
            EPR Compliance
          </Link>
          <Link to="/terms-and-condition" onClick={scrollToTop}>
            Terms & Conditions
          </Link>
          <Link to="/shipping" onClick={scrollToTop}>
            shipping
          </Link>
        </div>
        <div className="flex flex-col justify-items-end items-start md:justify-center">
          <p className="text-center text-gray-400 text-sm md:justify-center underline">
            Registered Office Address:
          </p>{" "}
          <hr />
          <div className="address flex flex-col justify-start items-start text-sm hover:cursor-pointer">
            <a
              href="https://www.google.com/maps?q=Kanpur,+Uttar+Pradesh+208025"
              target="_blank"
              rel="noopener noreferrer">
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
                  colors="primary:#ffffff,secondary:#ffffff"></lord-icon>{" "}
                Kanpur, Uttar Pradesh 208025
              </p>
            </a>
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
                colors="primary:#ffffff"></lord-icon>{" "}
              <a href="mailto:vigybag@gmail.com">vigybag@gmail.com</a>
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
                colors="primary:#ffffff"></lord-icon>{" "}
              <a href="tel:1234567890">+91 1234567890</a>
            </p>
          </div>
          <br />
          <div className="social-media flex flex-col justify-center items-center">
            <p className="text-sm text-center text-gray-400 sm:items-center underline">
              SOCIALS:
            </p>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/vigybag/"
                target="_blank"
                rel="noopener noreferrer">
                <FaInstagram size={30} style={{ color: "#E4405F" }} />
              </a>
              <a
                href="https://www.x.com"
                target="_blank"
                rel="noopener noreferrer">
                <BsTwitterX size={25} style={{ color: "#ffffff" }} />{" "}
                {/* X color */}
              </a>
              <a
                href="https://www.linkedin.com/posts/codervivek_startup-teamwork-innovation-activity-7211097005408890880-haWJ?"
                target="_blank">
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
              <a
                href="https://www.facebook.com/profile.php?id=61553496839072"
                target="_blank">
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

              <a href="https://web.whatsapp.com/" target="_blank">
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
              <a
                href="https://discord.com/invite/xujgQevyZ4"
                target="_blank"
                rel="noopener noreferrer">
                <FaDiscord size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="footer-bottom text-sm">
        <p>© {new Date().getFullYear()} VigyBag. All rights reserved</p>
        <img
          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg"
          alt="Payment methods"></img>
        <nav>
          <Link to="/service" onClick={scrollToTop}>
            Our Services
          </Link>
          <Link to="/gift-card" onClick={scrollToTop}>
            Gift Cards
          </Link>
          <Link to="/payment-page" onClick={scrollToTop}>
            payments
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
