// NavLogo.jsx
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";

const NavLogo = () => (
  <div className="flex-shrink-0">
    <Link to="/" className="flex items-center md:block">
      <img src={Logo} alt="VigyBag Logo" style={{ height: "7vh" }} />
    </Link>
  </div>
);

export default NavLogo;
