import { NavLink } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {

    return(
        <div className="input-wrapper">
            <div className="navbar">
                <div className="navbar-item-left">
                    <NavLink to="/">SPHYRNA</NavLink>
                </div>
                <div className="navbar-items-right">
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/careers">Careers</NavLink>
                    <NavLink to="/contact-us">Contact</NavLink>
                </div>

            </div>
            
            
            
            </div>
    )

}

export default Navbar;