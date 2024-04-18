import { UilSearch } from "@iconscout/react-unicons/";
import { useState } from "react";
import {
  getCity,
  getCityOpenweather,
  getWeather,
} from "../weatherService/accuWeather";

const SearchInput = () => {
  const [citySearch, setCitySearch] = useState("");
  const [weather, setWeather] = useState([]);

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

      console.log("Datos de AccuWeather:", accuWeatherData);
      console.log("Datos de OpenWeather:", openWeatherData);

      setWeather(weatherData);
    } catch (error) {
      console.error("error en obtener los datos");
    }
  };

  console.log(weather);

  return (
    <div className="w-full">
      <form
        className="md:ml-10 flex-grow flex relative md:items-center"
        onSubmit={enviarDatos}
      >
        <input
          className="bg-[#353535] py-3 pl-6 pr-6 rounded-lg text-white w-full"
          placeholder="Buscar ciudad..."
          onChange={(e) => setCitySearch(e.target.value)}
        />

        <UilSearch className="absolute block cursor-pointer right-4 text-white" />
      </form>
    </div>
  );
};

export default SearchInput;
