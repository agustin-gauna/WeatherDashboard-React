import { UilSearch } from "@iconscout/react-unicons/";
import { useState, useEffect } from "react";
import {
  getCity,
  getCityOpenweather,
  getWeather,
} from "../weatherService/accuWeather";
import RenderWeather from "./RenderWeather";

const SearchInput = () => {
  const [citySearch, setCitySearch] = useState("tokyo");
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const [accuWeatherData, openWeatherData] = await Promise.all([
          getCity(citySearch).then((data) => getWeather(data.Key)),
          getCityOpenweather(citySearch),
        ]);

        const weatherData = {
          openWeather: openWeatherData,
          accuWeather: accuWeatherData,
        };

        console.log("Datos de AccuWeather:", accuWeatherData);
        console.log("Datos de OpenWeather:", openWeatherData);

        setWeather(weatherData);
      } catch (error) {
        console.error("Error al obtener los datos del clima:", error);
      }
    };

    fetchWeatherData(); // Llamar a la función para cargar los datos del clima al montar el componente
  }, [citySearch]); // Ejecutar el efecto cada vez que cambie la ciudad buscada

  const enviarDatos = async (e) => {
    e.preventDefault();
    // const datos = await getCity(citySearch);
    // const resultado = await getWeather(datos.Key);
    // setWeather(resultado);

    try {
      // llamada a las apis en simultaneo
      const [accuWeatherData, openWeatherData] = await Promise.all([
        getCity(citySearch).then((data) => getWeather(data.Key)),
        getCityOpenweather(citySearch),
      ]);

      const weatherData = {
        openWeather: openWeatherData,
        accuWeather: accuWeatherData,
      };

      // console.log("Datos de AccuWeather:", accuWeatherData);
      // console.log("Datos de OpenWeather:", openWeatherData);

      setWeather(weatherData);
    } catch (error) {
      console.error("error en obtener los datos");
    }
  };

  // console.log(weather);

  return (
    <div className="w-full">
      <header className="flex flex-col md:flex-row mb-8">
        <div className="flex items-center gap-1 mb-4 md:mb-0">
          <img src="/WeatherLab.svg" alt="WeatherLab logo" />
          <h1 className="text-white font-bold text-2xl">WeatherLab</h1>
        </div>

        <form
          className="md:ml-10 flex-grow flex relative md:items-center"
          onSubmit={enviarDatos}
        >
          <input
            className="bg-[#353535] py-3 pl-6 pr-6 rounded-lg text-white w-full"
            placeholder="Buscar ciudad..."
            onChange={(e) => setCitySearch(e.target.value)}
          />

          <UilSearch className="absolute block cursor-pointer right-4 text-white top-2.5" />
        </form>
      </header>

      {weather && <RenderWeather weather={weather} />}
    </div>
  );
};

export default SearchInput;
