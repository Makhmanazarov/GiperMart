import React from "react";
import Slider from "react-slick";



const settings = {
  infinite: true,
  speed: 2500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 10000,
};

export const Banner = ({ children }) => {
  return (
    <div className="slider-container">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};
