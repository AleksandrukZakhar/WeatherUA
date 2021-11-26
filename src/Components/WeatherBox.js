import MiniWeatherCard from "./MiniWeatherCard";

const WeatherBox = () => {
  return (
    <div className="flex flex-1 flex-row w-11/12 h-96 relative top-28 left-16 border border-gray-200 rounded shadow-2xl">
      <div className="flex flex-col relative top-32 left-6 w-32 h-40 text-left">
        <p className="text-gray-400">Температура</p>
        <p className="text-gray-400">Відчувається як</p>
        <p className="text-gray-400">Тиск мм</p>
        <p className="text-gray-400">Вологість %</p>
        <p className="text-gray-400">Вітер м/сек</p>
        <p className="text-gray-400">Ймовірність опадів, %</p>
      </div>
      <div className="flex flex-row space-x-6 relative left-16">
        <MiniWeatherCard />
        <MiniWeatherCard />
        <MiniWeatherCard />
        <MiniWeatherCard />
      </div>
    </div>
  );
};

export default WeatherBox;
