import React from "react";

import { UilLocationPoint } from "@iconscout/react-unicons";

const CitiesToShow = ({ topCitiesInfo }) => {
  return (
    <div className="bg-[#1E1E1E] px-4 mb-4 lg:px-8 py-4 rounded-lg text-white font-bold">
      <h2 className="mb-2">Weather in other cities</h2>

      <div className="  flex flex-wrap gap-2 ">
        {topCitiesInfo.map((city, index) => (
          <div
            key={index}
            className=" flex-grow  rounded-lg px-4 py-5 border-2 border-[#353535]"
          >
            <div className="flex gap-1">
              <UilLocationPoint className="text-white" />
              <h3 className="text-white font-medium">
                {city.name}, {city.country}
              </h3>
            </div>

            <div className="flex items-center gap-1">
              <img
                className="w-14"
                src={`http://openweathermap.org/img/wn/${city.weather[0].icon}.png`}
              />
              <p className="text-white font-bold">{city.temp.toFixed()} °C</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CitiesToShow;
