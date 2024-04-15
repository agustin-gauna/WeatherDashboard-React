import { UilLocationPoint } from "@iconscout/react-unicons";

const CityText = () => {
  return (
    <div className="flex flex-col gap-2 text-white px-4 py-8  bg-[#1E1E1E] rounded-lg lg:p-8 justify-center ">
      <div className="flex gap-1 items-center">
        <UilLocationPoint />
        <p className="font-bold text-xl lg:text-5xl">Buenos Aires, AR</p>
      </div>

      <p className="font-medium text-sm md:text-xl"> 17:43 | Lunes</p>
    </div>
  );
};

export default CityText;
