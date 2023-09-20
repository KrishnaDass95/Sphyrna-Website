import { NavLink } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {

    return(
        <div className="input-wrapper">
            <div className="navbar">
                <div className="navbar-item-left">
                    <NavLink className="nav-link" to="/">SPHYRNA</NavLink>
                </div>
                <div className="navbar-items-right">
                    <NavLink className="nav-link" to="/about">About</NavLink>
                    <NavLink className="nav-link" to="/careers">Careers</NavLink>
                    <NavLink className="nav-link" to="/contact-us">Contact</NavLink>
                </div>

            </div>
            
            
            
            </div>
    )

}

export default Navbar;