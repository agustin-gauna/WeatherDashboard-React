import React from "react";

const MaxMinTemperature = () => {
  return (
    <div className="bg-[#1E1E1E] rounded-lg px-4 py-8 text-white flex flex-col justify-between lg:px-8 flex-grow">
      <div className="flex gap-1 items-center ">
        <img className="w-20" />
        <p className="font-bold text-4xl">15° Min</p>
      </div>

      <div className="flex gap-1 items-center ">
        <img className="w-20" />
        <p className="font-bold text-4xl">15° Max</p>
      </div>
    </div>
  );
};

export default MaxMinTemperature;
