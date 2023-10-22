import { CarouselItem } from "../Carousel_Item";

const Carousel = () => {
  const items = [
    {
      title: "Software Support",
      img: "src",
      desc: "We understand your product's software systems thoroughly be involved with the product development to have a good grasp on the current state to assist customers",
    },
    {
      title: "Product Insight",
      img: "src",
      desc: "All the product insight required, from hardware peformances, software bugs, metrics are all collected by us to give feedback",
    },
    {
        title: "Hardware Support",
        img: "src",
        desc: "Our hardware specialists understand the hardware systems better to diagnose and provide solutions to your customers"
    }
  ];

  return (
    <div class="input-wrapper">
        {items.map((item) => {
            return (
                <CarouselItem title={item.title} img={item.img} desc={item.desc}/>
            )
        })}
    </div>
  );
};

export default Carousel;
