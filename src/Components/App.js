import React, { useState } from "react";
import Header from "./Header";
import Text from "./Text";
import Location from "./Location";
import Weather from "./Weather";

export const Context = React.createContext();

const App = () => {
  const [data, setData] = useState();
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lon: null,
    accuracy: 0,
  });
  return (
    <Context.Provider
      value={{
        Data: [data, setData],
        Coordinates: [coordinates, setCoordinates],
      }}
    >
      <div>
        <Header />
        <Text title="Погода UA" subtitle="Погода з усього світу." />
        <Location />
        <Weather />
      </div>
    </Context.Provider>
  );
};

export default App;
