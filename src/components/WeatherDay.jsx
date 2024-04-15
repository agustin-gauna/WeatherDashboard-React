import React from "react";

const WeatherDay = () => {
  return (
    <div className="flex flex-col items-center m-auto text-white gap-4 border-2 border-[#353535] w-24 rounded-lg py-4 ">
      <p className="text-sm font-bold">Hoy</p>

      <p className="text-sm">4 Mar</p>

      <img src="/Vector.svg" alt="" />

      <p className="text-sm font-bold"> 24°C / 15°C</p>
    </div>
  );
};

export default WeatherDay;
