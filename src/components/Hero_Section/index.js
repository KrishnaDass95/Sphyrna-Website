import Button from "../common_components/Button_Component";
import { Image } from "../common_components/Images";
import "./hero.css";

const Hero_Section = () => {
  return (
    <div className="input-wrapper">
      <div className="hero-section">
        <div className="hero-left">
          <div className="header-text">Discover World Class Support</div>

          <div className="para-text">
            Are you looking to support every functional area of your product?
            Look no further!
          </div>
          <Button text="Join Us"></Button>
        </div>
        <div className="hero-right">
            <Image src={"./hero-image.jpeg"} alt={"cycling"}></Image>
        </div>
      </div>
    </div>
  );
};

export default Hero_Section;
