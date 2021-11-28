import { coordinates } from "../Functions/GetLocation";
import useFetchWeather from "../Functions/useFetchWeather";
import WeatherCard from "./WeatherCard";
import Loading from "./Loading";
import Alert from "./Alert";

const Weather = () => {
  const [data] = useFetchWeather(coordinates.lat, coordinates.lon);

  if (!coordinates) {
    return <Loading />;
  } else {
    if (data) {
      return (
        <div className="flex flex-row flex-none space-x-10">
          <WeatherCard />
        </div>
      );
    } else {
      return (
        <Alert text="Не можемо отримати данні про погоду спробуйте ще раз через декілька хвилин" />
      );
    }
  }
};

export default Weather;
