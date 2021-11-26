import Header from "./Header";
import Text from "./Text";
import Location from "./Location";
import WeatherCard from "./WeatherCard";
import WeatherBox from "./WeatherBox";

const App = () => {
  return (
    <div>
      <Header />
      <Text title="Погода UA" subtitle="Погода з усього світу." />
      <Location />
      <WeatherCard />
      <WeatherBox />
    </div>
  );
};

export default App;
