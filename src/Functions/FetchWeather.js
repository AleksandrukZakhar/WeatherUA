import Weather from "../Components/Weather";

const FetchWeather = async (lat, lon) => {
  const key = "fb36ff8457a47f22e45bbe7a3777961e";
  let lang = "ua";
  let units = "metric";
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=${units}&lang=${lang}`;

  const response = await fetch(url);
  let data = await response.json();

  if (data) {
    data = data.daily;
  } else {
    console.log("src/Functions/FetchWeather fetch is failed");
  }

  return <Weather weatherData={data} />;
};

export default FetchWeather;
