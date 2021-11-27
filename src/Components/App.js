import Header from "./Header";
import Text from "./Text";
import Location from "./Location";
import Weather from "./Weather";

const App = () => {
  return (
    <div>
      <Header />
      <Text title="Погода UA" subtitle="Погода з усього світу." />
      <Location />
      {visibleWeather ? <Weather /> : null}
    </div>
  );
};

export default App;
