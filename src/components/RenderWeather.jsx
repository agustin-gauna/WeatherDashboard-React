import React from "react";

import {
  UilLocationPoint,
  UilWind,
  UilSun,
  UilSunset,
  UilTear,
  UilEye,
} from "@iconscout/react-unicons";

//importaciones para sliders
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RenderWeather = ({ weather }) => {
  if (!weather || !weather.openWeather) {
    return (
      <div className="bg-[#1E1E1E] text-center w-full rounded-lg flex flex-col items-center mt-20  gap-8 py-16 px-6 md:px-32 ">
        <img className="w-[300px]   " src="/Error-img2.svg" alt="" />
        <p className="text-[#353535] font-bold">
          Oops, it looks like we've encountered a little problem. We couldn't
          find the city you entered. Could you please check the spelling or try
          another nearby city?
        </p>
      </div>
    );
  }
  const accuWeatherData = weather.accuWeather;
  const openWeatherData = weather.openWeather;

  const {
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    visibility,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  } = openWeatherData;

  // hora local

  const date = new Date(dt * 1000);

  const options = {
    weekday: "long", // Nombre completo del día de la semana
    hour: "numeric", // Hora (formato de 24 horas)
    minute: "numeric", // Minutos
  };

  const formatedDate = date.toLocaleString("en-EN", options);

  // funcion para calcular hora del dia

  const dayDuration = (sunrise, sunset) => {
    const duration = (sunset - sunrise) * 1000;

    const hours = Math.floor(duration / (1000 * 60 * 60));
    const minutes = Math.floor(duration % (1000 * 60 * 60)) / (1000 * 60);

    return `${hours}h ${minutes.toFixed(0)}m`;
  };

  // configuracion de los sliders
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1536, // 2xl
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 1280, // xl
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 1024, // Ajustar para pantallas medianas
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 5,
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

  const settings2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1536, // 2xl
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1280, // xl
        settings: {
          slidesToShow: 5,
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
          slidesToShow: 5,
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
    <main>
      <section className=" m-auto mb-4 flex flex-col gap-4 lg:flex-row  lg:gap-8">
        <div className="flex flex-col gap-2 text-white px-4 py-8  bg-[#1E1E1E] rounded-lg lg:p-8 justify-center ">
          <div className="flex gap-1 items-center">
            <UilLocationPoint />
            <p className="font-bold text-xl lg:text-5xl">{`${name}, ${country}`}</p>
          </div>

          <p className="font-medium text-sm md:text-xl"> {formatedDate}</p>
        </div>

        <div className=" bg-[#1E1E1E] text-white rounded-lg py-8 flex flex-col md:flex-row md:items-end justify-around gap-6 px-4 flex-grow">
          <div className="flex flex-col gap-6 ">
            <div>
              <p className="font-bold text-3xl lg:text-5xl">{details}</p>
            </div>

            <div className="">
              <div className="flex gap-1 items-center">
                <img
                  src={`http://openweathermap.org/img/wn/${icon}.png`}
                  alt="Weather Icon"
                />
                <p className="font-bold text-5xl ">{`${temp.toFixed()}°`}</p>
              </div>

              <div>
                <p>Real feel: {`${feels_like.toFixed()}°`}</p>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-1">
            <div className="flex items-center gap-2">
              <UilWind className="size-8" />
            </div>

            <div>
              <p className="text-xl font-bold">Wind speed</p>
              <p className="">{`${speed} km/h`}</p>
            </div>
          </div>
        </div>
      </section>

      <section className=" m-auto flex flex-col gap-4 mb-4 md:flex-row ">
        <div className="bg-[#1E1E1E] rounded-lg px-4 py-8 text-white flex flex-col gap-2 flex-grow lg:px-8">
          <h4 className="font-bold">Sunrise and Sunset </h4>

          <div className="flex gap-1 items-center ">
            <UilSun size={32} />
            <p className="font-bold text-2xl">
              {new Date(sunrise * 1000).toLocaleTimeString()}
            </p>
          </div>

          <div className="flex gap-1 items-center ">
            <UilSunset size={32} />
            <p className="font-bold text-2xl">
              {new Date(sunset * 1000).toLocaleTimeString()}
            </p>
          </div>

          <p>
            length of day{" "}
            <span className="font-bold">{dayDuration(sunrise, sunset)}</span>
          </p>
        </div>

        <div className="bg-[#1E1E1E] rounded-lg px-4 py-8 text-white flex flex-col justify-between lg:px-8 flex-grow">
          <div className="flex gap-1 items-center ">
            <img
              className="w-20"
              src={`http://openweathermap.org/img/wn/${icon}.png`}
              alt="Weather Icon"
            />
            <p className="font-bold text-4xl">{`${temp_min.toFixed()}°`} Min</p>
          </div>

          <div className="flex gap-1 items-center ">
            <img
              className="w-20"
              src={`http://openweathermap.org/img/wn/${icon}.png`}
              alt="Weather Icon"
            />
            <p className="font-bold text-4xl">{`${temp_max.toFixed()}°`} Max</p>
          </div>
        </div>
        <div className="bg-[#1E1E1E] rounded-lg px-4 py-8 text-white flex flex-col gap-2 lg:px-8">
          <div className="flex gap-1 items-center ">
            <UilTear size={24} />
            <h4 className="font-bold">Humidity</h4>
          </div>

          <div className="flex items-end">
            <p className="font-bold text-8xl">{humidity}</p>
            <p>%</p>
          </div>
        </div>
        <div className="bg-[#1E1E1E] rounded-lg px-4 py-8 text-white flex flex-col gap-2 lg:px-8">
          <div className="flex gap-1 items-center ">
            <UilEye size={24} />
            <h4 className="font-bold">Visibility</h4>
          </div>

          <div className="flex items-end">
            <p className="font-bold text-3xl">{visibility}</p>
            <p>km</p>
          </div>
        </div>
      </section>

      <section className="m-auto flex flex-col gap-4">
        <div className="bg-[#1E1E1E] p-8 rounded-lg">
          <p className="text-white font-bold mb-4">Hourly Forecast</p>
          <Slider {...settings} className="flex justify-center ">
            {accuWeatherData.twelveHourForecast.map((hour, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center m-auto gap-6 w-24  text-white border-2 border-[#353535] rounded-lg py-4 text-center"
              >
                <p className="text-sm font-bold inline-block">
                  {new Date(hour.dateTime).toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  })}
                </p>

                <img
                  className="w-20 inline-block m-auto"
                  src={`http://openweathermap.org/img/wn/${icon}.png`}
                  alt="Weather Icon"
                />

                <p className="text-sm font-bold inline-block">{`${hour.temperature.toFixed()}°C`}</p>
              </div>
            ))}
          </Slider>
        </div>

        <div className="bg-[#1E1E1E] p-8 rounded-lg">
          <p className="text-white font-bold mb-4">Daily Forecast</p>
          <Slider {...settings2} className="flex justify-center ">
            {accuWeatherData.fiveDayForecast.map((day, index) => {
              const date = new Date(day.date);
              const dayOfWeek = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ][date.getDay()];

              return (
                <div
                  key={index}
                  className="custom-width  flex flex-col justify-center items-center m-auto text-white gap-6 w-32 border-2 border-[#353535] text-center  py-4  rounded-lg"
                >
                  <p className="text-sm font-bold ">
                    {index === 0 ? "Today" : dayOfWeek}
                  </p>

                  <p className="text-sm">
                    {date.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </p>

                  <img
                    className="w-20 inline-block m-auto"
                    src={`http://openweathermap.org/img/wn/${icon}.png`}
                    alt="Weather Icon"
                  />

                  <p className="text-sm font-bold inline-block">
                    {day.maximum.toFixed()}°C | {day.minimum.toFixed()}°C
                  </p>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </main>
  );
};

export default RenderWeather;
