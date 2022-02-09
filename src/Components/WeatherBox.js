import { useState } from "react";
import MiniWeatherCard from "./MiniWeatherCard";
import { uid } from "uid";

const WeatherBox = ({ data }) => {
  const [element, setElement] = useState(0);
  const dayTime = ["morn", "day", "eve", "night"];
  const dayTimeUA = ["Ранок", "День", "Вечір", "Ніч"];

  if (data === null) {
    return null;
  }

  const NextHandler = () => {
    setElement(element + 1);

    if (element === 7) {
      setElement(0);
    }
  };

  const PreviousHandler = () => {
    setElement(element - 1);

    if (element === 0) {
      setElement(7);
    }
  };

  console.log(element);
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
          if (index === element) {
            return dayTime.map((currentDayTime, index) => {
              return (
                <MiniWeatherCard
                  key={uid()}
                  dayTime={dayTimeUA[index]}
                  temp={Math.round(parseInt(daily.temp[currentDayTime], 10))}
                  feelsLike={daily.temp[currentDayTime]}
                  pressure={daily.pressure}
                  humidity={daily.humidity}
                  windSpeed={daily.wind_speed}
                  image={daily.weather[0].icon}
                />
              );
            });
          }

          return null;
        })}
      </div>
      <div className="flex flex-row space-x-32">
        <button
          onClick={() => PreviousHandler()}
          className="bg-blue-600 text-gray-50 rounded w-32 font-bold hover:bg-blue-400 absolute mt-80"
        >
          Попередній День
        </button>
        <button
          onClick={() => NextHandler()}
          className="bg-blue-600 text-gray-50 rounded w-32 font-bold hover:bg-blue-400 absolute mt-80"
        >
          Наступний День
        </button>
      </div>
    </div>
  );
};

export default WeatherBox;
