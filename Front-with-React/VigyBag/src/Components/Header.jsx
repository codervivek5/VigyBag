import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo  from "../Images/favicon.webp"
import { FaBarsStaggered } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";



const Header = () => {
  const [isNavshowing, setIsNavshowing] = useState(false);
  const loc = useLocation();

  const closeNavHandler = () => {
    if (window.inner < 800) {
      setIsNavshowing(false);
    } else setIsNavshowing(true);
  };
  return (
    <nav>
      <div className="container nav_container">
        <div className="nav_logo">
          <Link to="/" className="stic">
            <img src={Logo} alt=""  height={"10px"}/>
          </Link>
          <h3>VigyBag</h3>
        </div>

        {/* ==================================in Mobile Mode======================================================= */}
        { isNavshowing && (
          <ul className="nav_up">
            <li>
              <Link to="/" onClick={() => setIsNavshowing(!isNavshowing)}>
                Home
              </Link>
            </li>
           
            <li>
              <Link to="/create" onClick={() => setIsNavshowing(!isNavshowing)}>
              Create Post
              </Link>
            </li>
            <li>
              <Link
                to="/authors"
                onClick={() => setIsNavshowing(!isNavshowing)}
              >
               Authors
              </Link>
            </li>
            <li>
              <Link to="/logout" onClick={() => setIsNavshowing(!isNavshowing)}>
                Logout
              </Link>
            </li>
          </ul>
        )}
        {isNavshowing && (
          <ul className="nav_up">
            <li>
              <Link to="/" onClick={() => setIsNavshowing(!isNavshowing)}>
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/authors"
                onClick={() => setIsNavshowing(!isNavshowing)}
              >
               About Us
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={() => setIsNavshowing(!isNavshowing)}>
                Login
              </Link>
            </li>
          </ul>
        )}

        {/* ==================================in laptopmode======================================================= */}

        { (
          <ul className="nav_menu">
            
            <li>
              <Link to="/create">
                {loc.pathname === "/create" ? (
                  <b>Home</b>
                ) : (
                  <p>Home</p>
                )}
              </Link>
            </li>
            <li>
              <Link to="/About Us">
                {loc.pathname === "/About Us" ? <b>About Us</b> : <p>About Us</p>}
              </Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        )}

       

        {/* ==================================CLose ======================================================= */}
        <button
          className="nav_toggle-btn"
          onClick={() => setIsNavshowing(!isNavshowing)}
        >
          {isNavshowing ? (
            <AiOutlineClose color="white" />
          ) : (
            <FaBarsStaggered />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Header;
