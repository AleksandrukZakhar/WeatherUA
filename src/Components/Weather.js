import { coordinates } from "../Functions/GetLocation";
import useFetchWeather from "../Functions/useFetchWeather";
import WeatherCard from "./WeatherCard";
import Loading from "./Loading";

const Weather = () => {
  if (!coordinates) {
    return null;
  }

  const [data] = useFetchWeather(coordinates.lat, coordinates.lon);

  if (data) {
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
  } else {
    return <Loading />;
  }
};

export default Weather;
