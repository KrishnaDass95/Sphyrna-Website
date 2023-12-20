import "./carousel.css"
import { CarouselItem } from "../Carousel_Item";

const Carousel = () => {
  const items = [
    {
      title: "Software Support",
      src: require("../../media/software.svg"),
      desc: "Our deep understanding of your software, fostered through ongoing product development involvement, translates into exceptional customer support. We anticipate questions, resolve issues swiftly, and empower your users to get the most out of your product.",
    },
    {
      title: "Product Insight",
      src: require("../../media/insight.svg"),
      desc: "We gather comprehensive product insights, from hardware performance to software bugs and user metrics, to continuously improve your experience.",
    },
    {
        title: "Hardware Support",
        src: require("../../media/hardware.svg"),
        desc: "Don't let hardware headaches slow you down. Our expert specialists pinpoint problems fast and deliver solutions that keep your business running smoothly"
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
