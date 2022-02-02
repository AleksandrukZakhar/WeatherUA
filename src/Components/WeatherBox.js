import MiniWeatherCard from "./MiniWeatherCard";

const WeatherBox = ({ data }) => {
  const dayTime = ["morn", "day", "eve", "night"];

  if (data === null) {
    return null;
  }

  return (
    <div className="flex flex-1 flex-row w-6/12 h-96 mt-28 ml-14 relative right-auto border border-gray-200 rounded shadow-2xl">
      <div className="flex flex-col relative top-32 left-6 w-32 h-40 text-left">
        <p className="text-gray-400">Температура</p>
        <p className="text-gray-400">Відчувається як</p>
        <p className="text-gray-400">Тиск мм</p>
        <p className="text-gray-400">Вологість %</p>
        <p className="text-gray-400">Вітер м/сек</p>
      </div>
      <div className="flex flex-row space-x-6 relative left-16">
        {data.map((daily, index) => {
          if (index === 0) {
            return dayTime.map((currentDayTime) => {
              return (
                <MiniWeatherCard
                  temp={Math.round(parseInt(daily.temp[currentDayTime], 10))}
                  feelsLike={daily.temp[currentDayTime]}
                  pressure={daily.pressure}
                  humidity={daily.humidity}
                  windSpeed={daily.wind_speed}
                />
              );
            });
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default WeatherBox;
