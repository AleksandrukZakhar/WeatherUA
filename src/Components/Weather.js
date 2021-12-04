import { useContext } from "react";
import { Context } from "./App";
import FetchWeather from "../Functions/FetchWeather";
import WeatherCard from "./WeatherCard";

const Weather = () => {
  const { Coordinates, Data } = useContext(Context);
  const [coordinates] = Coordinates;
  const setData = Data;
  FetchWeather(coordinates, setData);
  return (
    <div className="flex flex-row flex-none space-x-10">
      <WeatherCard />
    </div>
  );
};

export default Weather;
