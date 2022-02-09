import React, { useState } from "react";
import Header from "./Header";
import Text from "./Text";
import Location from "./Location";
import Weather from "./Weather";

const App = () => {
  const [data, setData] = useState(null);
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lon: null,
    accuracy: null,
  });

  const FetchWeather = async () => {
    const key = "fb36ff8457a47f22e45bbe7a3777961e";

    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${key}&units=metric&lang=ua`;

    if (data !== null) {
      return;
    }

    const res = await fetch(url);
    const response = await res.json();

    if (response) {
      setData(response.daily);
    }
  };

  if (coordinates.lat && coordinates.lon !== null) {
    FetchWeather();
  }

  return (
    <>
      <Header />
      <Text title="Погода UA" subtitle="Погода з усього світу." />
      <Location setCoordinates={setCoordinates} />
      {data ? <Weather data={data} /> : null}
    </>
  );
};

export default App;
