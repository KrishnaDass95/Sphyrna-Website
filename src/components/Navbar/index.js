import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {

  return (
    <div className="input-wrapper">
      <nav className="navbar">
        <div className="navbar-item-left">
          <NavLink className="nav-link brand-title" to="/">
            SPHYRNA
          </NavLink>
        </div>
        <NavLink className="nav-link toggle-button" to="/">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </NavLink>
        <div className="navbar-items-right">
          <ul>
            <li>
              <NavLink className="nav-link nav-item" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link nav-item" to="/careers">
                Careers
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link nav-item" to="/contact-us">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
