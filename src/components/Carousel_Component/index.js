import "./carousel.css"
import { CarouselItem } from "../Carousel_Item";

const Carousel = () => {
  const items = [
    {
      title: "Software Support",
      src: require("../../media/software.svg"),
      desc: "We understand your product's software systems thoroughly be involved with the product development to have a good grasp on the current state to assist customers",
    },
    {
      title: "Product Insight",
      src: require("../../media/insight.svg"),
      desc: "All the product insight required, from hardware peformances, software bugs, metrics are all collected by us to give feedback",
    },
    {
        title: "Hardware Support",
        src: require("../../media/hardware.svg"),
        desc: "Our hardware specialists understand the hardware systems better to diagnose and provide solutions to your customers"
    }
  ];

  return (
    <div class="input-wrapper carousel">
        {/* <div className="header-text">Our Services</div> */}
        {/* <div>------------------------------------------------------------------</div> */}
        <div className="inner">
        {items.map((item) => {
            return (
                <CarouselItem title={item.title} src={item.src} desc={item.desc}/>
            )
        })}
        </div>
    </div>
  );
};

export default Carousel;
