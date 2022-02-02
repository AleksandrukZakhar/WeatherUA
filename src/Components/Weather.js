import { useState, useCallback } from "react";
import WeatherCard from "./WeatherCard";
import WeatherBox from "./WeatherBox";
import { uid } from "uid";
import dayjs from "dayjs";

const Weather = ({ data }) => {
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
  const dayOfWeek = dayjs().locale("ua").format("d");
  const dayOfMonth = dayjs().format("D");
  const month = dayjs().locale("ua").format("M");

  return (
    <>
      <div className="flex flex-row flex-none">
        {data.map((daily, index) => {
          if (index > 0) {
            return null;
          }
          return (
            <WeatherCard
              key={uid()}
              min={daily.temp.min}
              max={daily.temp.max}
              dayOfWeek={daysOfWeek[dayOfWeek]}
              dayOfMonth={dayOfMonth}
              month={months[month]}
            />
          );
        })}
      </div>
      <WeatherBox data={data} />
    </>
  );
};

export default Weather;
