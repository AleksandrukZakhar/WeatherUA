import React, { useState } from "react";
import Header from "./Header";
import Text from "./Text";
import Location from "./Location";
import Weather from "./Weather";

const App = () => {
  const [data, setData] = useState();
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lon: null,
    accuracy: 0,
  });

  const FetchWeather = async () => {
    const key = "fb36ff8457a47f22e45bbe7a3777961e";

    if (coordinates.lat && coordinates.lon != null) {
      const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${key}&units=metric&lang=ua`;

      const res = await fetch(url);
      const response = await res.json();

      if (response) {
        setData(response.daily);
      }
    } else {
      setTimeout(() => {
        FetchWeather();
      }, [1000]);
    }
  };

  FetchWeather();
  return (
    <>
      <Header />
      <Text title="Погода UA" subtitle="Погода з усього світу." />
      <Location setCoordinates={setCoordinates} />
      {data ? <Weather /> : null}
    </>
  );
};

export default App;
