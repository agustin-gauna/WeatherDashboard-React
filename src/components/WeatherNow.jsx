import { UilWind } from "@iconscout/react-unicons";

const WeatherNow = () => {
  return (
    <div className=" bg-[#1E1E1E] text-white rounded-lg py-8 flex flex-col md:flex-row md:items-end justify-around gap-6 px-4 flex-grow">
      <div className="flex flex-col gap-6 ">
        <div>
          <p className="font-bold text-3xl lg:text-5xl">Sunny</p>
        </div>

        <div className="">
          <div className="flex gap-1 items-center">
            <img />
            <p className="font-bold text-5xl ">20°</p>
          </div>

          <div>
            <p>Real feel: 20°</p>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-1">
        <div className="flex items-center gap-2">
          <UilWind className="size-8" />
        </div>

        <div>
          <p className="text-xl font-bold">Wind speed</p>
          <p className="">10 km/h</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherNow;
