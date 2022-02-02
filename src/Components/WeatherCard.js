import Day from "../Images/Weather_Icons/animated/day.svg";

const WeatherCard = ({ dayOfWeek, dayOfMonth, month, min, max }) => {
  return (
    <div className="flex flex-none flex-col items-center justify-center relative top-16 left-16 border border-gray-200 rounded w-36 p-4 text-sm lg:text-xl shadow-2xl">
      <span>{dayOfWeek}</span>
      <h1 className="font-bold text-2xl">{dayOfMonth}</h1>
      <span>{month}</span>
      <img src={Day} alt="" />
      <div className="space-x-3">
        <span className="text-blue-400">мін.</span>
        <span className="text-blue-400">макс.</span>
      </div>
      <div className="space-x-4">
        <span>{min}°</span>
        <span>{max}°</span>
      </div>
    </div>
  );
};

export default WeatherCard;
