import React from "react";

import { UilGithub, UilLinkedin } from "@iconscout/react-unicons";

const Footer = () => {
  return (
    <div className="border-t-2 border-[#1E1E1E] text-[#313131] py-8 flex flex-col gap-2 lg:flex-row lg:justify-between">
      <p>
        <span className="font-bold">WeatherLab</span> - Proyecto final de Gauna
        Agustín, Tecnicatura en Programación - Práctica Profesionalizante.
      </p>

      <div className="flex gap-2">
        <a href="">
          <UilGithub />
        </a>
        <a href="">
          <UilLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
