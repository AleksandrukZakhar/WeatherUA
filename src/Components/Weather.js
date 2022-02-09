import { useState } from "react";
import WeatherCard from "./WeatherCard";
import WeatherBox from "./WeatherBox";
import { uid } from "uid";
import dayjs from "dayjs";

const Weather = ({ data }) => {
  const [element, setElement] = useState(0);

  const daysOfWeek = [
    "Неділя",
    "Понеділок",
    "Вівторок",
    "Середа",
    "Четвер",
    "Пятниця",
    "Субота",
  ];
  const months = [
    "Січень",
    "Лютий",
    "Березень",
    "Квітень",
    "Травень",
    "Червень",
    "Липень",
    "Серпень",
    "Вересень",
    "Жовтень",
    "Листопад",
    "Грудень",
  ];
  let dayOfWeek = dayjs().locale("ua").format("d");
  let dayOfMonth = dayjs().format("D");
  const month = dayjs().locale("ua").format("M");

  return (
    <>
      <div className="flex flex-row flex-none space-x-10">
        {data.map((daily, index) => {
          if (index > 0) {
            dayOfWeek = dayjs().add(index, "day").locale("ua").format("d");
            dayOfMonth = dayjs().add(index, "day").locale("ua").format("D");
          }
          return (
            <WeatherCard
              elementNumber={index}
              setElement={setElement()}
              key={uid()}
              min={daily.temp.min}
              max={daily.temp.max}
              image={daily.weather[0].icon}
              dayOfWeek={daysOfWeek[dayOfWeek]}
              dayOfMonth={dayOfMonth}
              month={months[month]}
            />
          );
        })}
      </div>
      <WeatherBox data={data} element={element} />
    </>
  );
};

export default Weather;
