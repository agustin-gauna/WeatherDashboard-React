import React from "react";
import Slider from "react-slick";
import WeatherHour from "./WeatherHour";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderForHour = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1536, // 2xl
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 1280, // xl
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 1024, // Ajustar para pantallas medianas
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640, // Ajustar para pantallas pequeñas (móviles)
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="bg-[#1E1E1E] p-8 rounded-lg">
      <Slider {...settings} className="flex justify-center">
        <WeatherHour />
        <WeatherHour />
        <WeatherHour />
        <WeatherHour />
        <WeatherHour />
        <WeatherHour />
        <WeatherHour />
        <WeatherHour />
        <WeatherHour />
        <WeatherHour />
        <WeatherHour />
        <WeatherHour />
        <WeatherHour />
      </Slider>
    </div>
  );
};

export default SliderForHour;
