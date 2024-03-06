import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // toggling the state
  };

  return (
    <div className="input-wrapper">
      <nav className="navbar">
        <div className="navbar-item-left">
          <NavLink className="nav-link brand-title" to="/">
            Sphyrna
          </NavLink>
        </div>
        <NavLink className="nav-link toggle-button" to="/" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </NavLink>
        <div className={`navbar-items-right ${menuOpen ? "active" : ""}`}>
          {/* <div className="navbar-items-right"> */}
          <ul>
            <li>
              <NavLink className="nav-link nav-item" to="/about">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link nav-item"
                to="https://www.linkedin.com/company/sphyrna"
                target="_blank"
              >
                LinkedIn
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link nav-item"
                to="https://maps.app.goo.gl/cd329XNbHix73kVZ8"
                target="_blank"
              >
                Our Location
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
