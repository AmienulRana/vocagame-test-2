import { SwipperContent } from "@/components/swipper";
import { useState } from "react";
import Slider from "react-slick";
export default function Swipper() {
  const [slideActive, setSlideActive] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    nextArrow: null,
    beforeChange: (oldInde, newIndex) => {
      console.log("Slide yang aktif:", newIndex);
      setSlideActive(newIndex);
    },
    appendDots: (dots) => (
      <div>
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`w-2.5 h-2.5 rounded-full border border-lightgreen ${
          slideActive == i ? "bg-lightgreen" : ""
        }`}
      />
    ),
  };
  return (
    <div className="mt-10 w-5/6">
      <Slider {...settings}>
        <SwipperContent
          title={"Welcome to Our App"}
          desc={
            "Enjoy an easy and secure registration and login experience. Join us to access various benefits and exclusive services."
          }
        />

        <SwipperContent
          title={"Explore Outstanding Features"}
          desc={
            "Access our advanced features designed to meet your needs.  Discover the convenience of managing your account and enjoy the full functionality of our app."
          }
        />
        <SwipperContent
          title={"Ensured Security"}
          desc={
            "We prioritize the security of your information. Register and  in with full confidence in the privacy and security of your data."
          }
        />
      </Slider>
    </div>
  );
}
