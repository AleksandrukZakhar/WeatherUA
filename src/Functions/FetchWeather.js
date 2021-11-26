const FetchWeather = (lat, lon) => {
  const key = "fb36ff8457a47f22e45bbe7a3777961e";
  let lang = "ua";
  let units = "metric";
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=${units}&lang=${lang}`;

  fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

export default FetchWeather;
