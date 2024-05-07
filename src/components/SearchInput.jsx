import { UilSearch } from "@iconscout/react-unicons/";
import { useState, useEffect } from "react";
import {
  getCity,
  getCityOpenweather,
  getWeather,
  topCities,
} from "../weatherService/accuWeather";
import RenderWeather from "./RenderWeather";
import CitiesToShow from "./CitiesToShow";
import MapShowing from "./MapShowing";

const SearchInput = () => {
  const [citySearch, setCitySearch] = useState("la plata");
  const [weather, setWeather] = useState([]);
  const [cities, setCities] = useState([
    "new york",
    "tokyo",
    "sidney",
    "brasilia",
    "ciudad de mexico",
  ]);

  const [topCitiesInfo, setTopCitiesInfo] = useState([]);

  // datos de las principales ciudades

  useEffect(() => {
    const fetchTopCitiesData = async () => {
      const fetchTopCitiesDataPromise = cities.map(async (city) => {
        try {
          const response = await topCities(city);
          return response;
        } catch (error) {
          console.log("error en traer los datos: ", error);
        }
      });
      const cityData = await Promise.all(fetchTopCitiesDataPromise);
      console.log(cityData);
      setTopCitiesInfo(cityData);
    };
    fetchTopCitiesData();
  }, []);

  //datos de la ciudad que busca el usuario

  useEffect(() => {
    setTimeout(() => {
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

      fetchWeatherData();
    }, 2000);
  }, [citySearch]);

  const enviarDatos = async (e) => {
    e.preventDefault();

    try {
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

  return (
    <div className="w-full">
      <header className="flex flex-col md:flex-row mb-16">
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

      <CitiesToShow topCitiesInfo={topCitiesInfo}></CitiesToShow>

      {weather && <RenderWeather weather={weather} />}

      <MapShowing weather={weather}></MapShowing>
    </div>
  );
};

export default SearchInput;
