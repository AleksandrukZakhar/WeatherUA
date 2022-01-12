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
    let response = null;

    if (coordinates.lat & (coordinates.lon != null)) {
      let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${key}&units=metric&lang=ua`;

      const res = await fetch(url);
      response = await res.json();
    } else {
      setTimeout(() => {
        FetchWeather();
      }, [1000]);
    }
  };

  FetchWeather();
  return (
    <div>
      <Header />
      <Text title="Погода UA" subtitle="Погода з усього світу." />
      <Location setCoordinates={setCoordinates} />
      <Weather />
    </div>
  );
};

export default App;
