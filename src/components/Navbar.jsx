import React from "react";
import { Link } from "react-router-dom";

import "../components/Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <span className="logo">SEV</span>
      <ul className="navbarUL">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/resources">Resources</Link>
        </li>
      </ul>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </nav>
  );
}
export default Navbar;
