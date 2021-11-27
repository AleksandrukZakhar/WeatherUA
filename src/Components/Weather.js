import WeatherCard from "./WeatherCard";

const Weather = ({ weatherData }) => {
  return (
    <div className="flex flex-row flex-none space-x-10">
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
    </div>
  );
};

export default Weather;
