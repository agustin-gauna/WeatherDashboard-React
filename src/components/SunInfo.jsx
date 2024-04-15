import React from "react";

import { UilSun, UilSunset } from "@iconscout/react-unicons";

const SunInfo = () => {
  return (
    <div className="bg-[#1E1E1E] rounded-lg px-4 py-8 text-white flex flex-col gap-2 flex-grow lg:px-8">
      <h4 className="font-bold">Salida y Puesta del sol</h4>

      <div className="flex gap-1 items-center ">
        <UilSun size={32} />
        <p className="font-bold text-2xl">6:45 AM</p>
      </div>

      <div className="flex gap-1 items-center ">
        <UilSunset size={32} />
        <p className="font-bold text-2xl">19:21 PM</p>
      </div>

      <p>
        Duración del día <span className="font-bold">13h 27m</span>
      </p>
    </div>
  );
};

export default SunInfo;
