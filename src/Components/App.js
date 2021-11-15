import Header from "./Header";
import Text from "./Text";
import Location from "./Location";

const App = () => {
  return (
    <div>
      <Header />
      <Text title="Погода UA" subtitle="Погода з усього світу." />
      <Location />
    </div>
  );
};

export default App;
