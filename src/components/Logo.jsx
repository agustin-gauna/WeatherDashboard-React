import "@fontsource-variable/plus-jakarta-sans";

const Logo = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between ">
      <div className="flex items-center gap-1 mb-4 md:mb-0">
        <img src="/WeatherLab.svg" alt="WeatherLab logo" />
        <h1 className="text-white font-bold text-2xl">WeatherLab</h1>
      </div>
    </div>
  );
};

export default Logo;
