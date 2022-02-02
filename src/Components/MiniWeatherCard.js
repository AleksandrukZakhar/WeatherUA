import Day from "../Images/Weather_Icons/static/day.svg";

const MiniWeatherCard = ({
  temp,
  feelsLike,
  pressure,
  humidity,
  windSpeed,
}) => {
  return (
    <div className="flex flex-col relative top-12 text-center border border-gray-200 rounded w-18 h-60">
      <img src={Day} alt="" className="relative" />
      <p className="font-bold text-3xl">{temp}</p>
      <div className="w-10 h-0.5 bg-gray-200 relative left-3"></div>
      <p className="text-gray-400">{feelsLike}</p>
      <div className="w-10 h-0.5 bg-gray-200 relative left-3"></div>
      <p className="text-gray-400">{pressure}</p>
      <div className="w-10 h-0.5 bg-gray-200 relative left-3"></div>
      <p className="text-gray-400">{humidity}</p>
      <div className="w-10 h-0.5 bg-gray-200 relative left-3"></div>
      <p className="text-gray-400">{windSpeed}</p>
    </div>
  );
};

export default MiniWeatherCard;
