import React, { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaUserCircle, FaBars, FaTimes, FaSearch } from "react-icons/fa";

const Navbar = ({ isAdmin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const username = localStorage.getItem("username");
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const handleDropdownToggle = () => setShowDropdown(prev => !prev);

  const handleClickOutside = e => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.setItem("isLoggedIn", false);
      localStorage.removeItem("username");
      alert("Logout Successful.");
      navigate("/login");
    }
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <Link to="/" style={styles.logoLink}>FashionApp</Link>
      </div>

      {/* Hamburger for mobile */}
      <div style={styles.hamburger} onClick={toggleNavbar}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Nav menu */}
      <ul style={{ ...styles.navMenu, ...(isOpen ? styles.navMenuActive : {}) }}>
        <li><Link to="/fashion" style={styles.navLink}>Fashion</Link></li>
        <li><Link to="/gifts" style={styles.navLink}>Gifts</Link></li>
        <li><Link to="/furniture" style={styles.navLink}>Furniture</Link></li>
        <li><Link to="/stationery" style={styles.navLink}>Stationery</Link></li>
        <li><Link to="/bodycare" style={styles.navLink}>Body-Care</Link></li>
      </ul>

      {/* Search bar */}
      <div style={styles.searchContainer}>
        <FaSearch color="#666" />
        <input
          type="text"
          placeholder="Search products..."
          style={styles.searchInput}
          // onChange=...
        />
      </div>

      {/* User actions */}
      <div style={styles.userSection}>
        {isLoggedIn ? (
          <div style={styles.userProfile} ref={dropdownRef}>
            <div style={styles.userName} onClick={handleDropdownToggle}>
              <FaUserCircle size={24} style={{ marginRight: 6 }} />
              Hi, {username || "User"}
            </div>
            {showDropdown && (
              <div style={styles.dropdownMenu}>
                <Link to="/dashboard" style={styles.dropdownItem}>Dashboard</Link>
                <button onClick={handleLogout} style={styles.dropdownItemButton}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <div>
            <Link to="/login" style={styles.authButton}>Login</Link>
            <Link to="/register" style={{ ...styles.authButton, marginLeft: 10 }}>Register</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

// Inline styling: you can move this to a CSS or styled-components file as preferred
const styles = {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#222",
    color: "#fff",
    padding: "10px 20px",
    position: "sticky",
    top: 0,
    zIndex: 999,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 24,
  },
  logoLink: {
    color: "#ff4081",
    textDecoration: "none",
  },
  hamburger: {
    display: "none",
    cursor: "pointer",
  },
  navMenu: {
    display: "flex",
    listStyle: "none",
    gap: "20px",
  },
  navMenuActive: {
    position: "absolute",
    top: 60,
    left: 0,
    width: "100%",
    flexDirection: "column",
    backgroundColor: "#222",
    padding: 20,
    display: "flex",
  },
  navLink: {
    color: "#ccc",
    textDecoration: "none",
    fontWeight: 500,
    transition: "color 0.3s ease",
  },
  searchContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#333",
    padding: "5px 10px",
    borderRadius: 20,
    marginLeft: 20,
  },
  searchInput: {
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    color: "#fff",
    marginLeft: 5,
    width: 150,
  },
  userSection: {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
    position: "relative",
  },
  userProfile: {
    cursor: "pointer",
    userSelect: "none",
  },
  userName: {
    display: "flex",
    alignItems: "center",
    fontWeight: 600,
    color: "#ff4081",
  },
  dropdownMenu: {
    position: "absolute",
    top: 40,
    right: 0,
    backgroundColor: "#333",
    borderRadius: 6,
    boxShadow: "0px 4px 8px rgba(0,0,0,0.3)",
    minWidth: 150,
    zIndex: 1000,
    padding: 10,
  },
  dropdownItem: {
    display: "block",
    color: "#fff",
    textDecoration: "none",
    padding: "8px 10px",
    borderRadius: 4,
    transition: "background-color 0.2s ease",
    marginBottom: 6,
  },
  dropdownItemButton: {
    display: "block",
    width: "100%",
    padding: "8px 10px",
    borderRadius: 4,
    border: "none",
    backgroundColor: "#ff4081",
    color: "#fff",
    fontWeight: 600,
    cursor: "pointer",
  },
  authButton: {
    backgroundColor: "#ff4081",
    color: "#fff",
    padding: "6px 12px",
    borderRadius: 20,
    textDecoration: "none",
    fontWeight: 600,
    transition: "background-color 0.3s ease",
  },
  
  // Responsive (add media queries by moving styles to CSS file or use styled-components)
  // Here just an example to enable hamburger menu on small screens
  '@media (max-width: 768px)': {
    navbar: {
      flexWrap: "wrap",
    },
    hamburger: {
      display: "block",
    },
    navMenu: {
      display: "none",
      flexDirection: "column",
      width: "100%",
    },
  },
};

export default Navbar;
