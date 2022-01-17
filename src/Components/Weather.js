import WeatherCard from "./WeatherCard";
import WeatherBox from "./WeatherBox";

const Weather = () => {
  return (
    <div className="flex flex-row flex-none space-x-10">
      <WeatherCard />
      <WeatherBox />
    </div>
  );
};

export default Weather;
