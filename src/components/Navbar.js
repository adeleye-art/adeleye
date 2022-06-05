import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import { FaBars, FaTimes, FaSearch, FaHeart } from "react-icons/fa";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <Link to="/">
        <h1>DEVHIRE</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <FaSearch size={20} style={{ color: "#fff", marginRight: 10 }} />
          <Link to="/">Home</Link>
        </li>
        <li>
          <FaHeart size={20} style={{ color: "#fff", marginRight: 10 }} />
          <Link to="favorite.js">Favorite</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
