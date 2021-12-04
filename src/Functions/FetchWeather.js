const FetchWeather = async ({ lat, lon, setData }) => {
  const key = "fb36ff8457a47f22e45bbe7a3777961e";
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=metric&lang=ua`;

  while (lat && lon === null) {
    setTimeout(() => {}, [1000]);
  }

  const response = await fetch(url);
  const data = await response.json();

  if (!data) {
    console.log("src/Functions/FetchWeather fetch is failed");
  }

  setData(data.daily);
};

export default FetchWeather;
