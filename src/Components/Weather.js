import { coordinates } from "../Functions/GetLocation";
import WeatherCard from "./WeatherCard";
import Loading from "./Loading";
import { useSelector } from "react-redux";
import FetchWeather from "../Functions/FetchWeather";

const Weather = () => {
  const weatherData = useSelector((state) => state.weatherData);
  console.log(weatherData);

  if (coordinates.lat && coordinates.lon === null) {
    return <Loading />;
  } else {
    FetchWeather();
    return <div className="flex flex-row flex-none space-x-10"></div>;
  }
};

export default Weather;
