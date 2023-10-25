import Button from "../common_components/Button_Component";
import { Image } from "../common_components/Images";
import "./hero.css";
// import heroImage from "../common_components/Images/hero-image.jpeg";
import heroImage from "../common_components/Images/office.jpg"
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="input-wrapper">
      <div className="hero-section">
        <div className="hero-left">
          <div className="header-text">Discover World Class Support</div>

          <div className="para-text hero-para-text">
            Are you looking to support every functional area of your product?
            Look no further!
          </div>
          <NavLink className="nav-link" to="/contact-us">
            <Button text="Contact Us"></Button>
          </NavLink>
        </div>
        <div className="hero-right">
          <Image src={heroImage} alt={"cycling photo"}></Image>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
