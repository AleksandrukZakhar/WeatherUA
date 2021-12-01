import { useDispatch, useSelector } from "react-redux";

const FetchWeather = async (lat, lon) => {
  const key = "fb36ff8457a47f22e45bbe7a3777961e";
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=metric&lang=ua`;

  const response = await fetch(url);
  const data = await response.json();

  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weatherData);

  const SetData = (weatherData) => {
    dispatch({ type: "SET_DATA", payload: weatherData });
  };

  if (!data) {
    console.log("src/Functions/FetchWeather fetch is failed");
  }

  SetData(data);
};

export default FetchWeather;
