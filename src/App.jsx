import Logo from "./components/Logo";
import CityText from "./components/CityText";
import WeatherNow from "./components/WeatherNow";
import SunInfo from "./components/SunInfo";
import MaxMinTemperature from "./components/MaxMinTemperature";
import HumidityInfo from "./components/HumidityInfo";
import VisibilityInfo from "./components/VisibilityInfo";
import SliderForHour from "./components/SliderForHour";
import SliderForDay from "./components/SliderForDay";
import Footer from "./components/Footer";
import SearchInput from "./components/SearchInput";

function App() {
  return (
    <div className="m-auto max-w-5xl">
      <header className=" m-auto mb-12 flex flex-col pt-8 pb-4 md:flex-row md:justify-between md:items-center">
        <Logo />
        <SearchInput className="w-full" />
      </header>

      <div>
        <main className=" m-auto mb-4 flex flex-col gap-4 lg:flex  lg:gap-8">
          <section className="flex flex-col lg:flex-row lg:justify-between gap-4">
            <CityText />

            <WeatherNow />
          </section>
        </main>

        <section className=" m-auto flex flex-col gap-4 mb-4 md:flex-row ">
          <SunInfo />
          <MaxMinTemperature />
          <HumidityInfo />
          <VisibilityInfo />
        </section>

        <section className="mb-4  m-auto">
          {/* seccion de clima por hora */}
          <SliderForHour />
        </section>

        <section className="mb-4  m-auto">
          <SliderForDay />
        </section>
      </div>

      <footer className="mb-4  m-auto">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
