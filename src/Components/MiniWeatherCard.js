const MiniWeatherCard = ({
  dayTime,
  temp,
  feelsLike,
  pressure,
  humidity,
  windSpeed,
  image,
}) => {
  return (
    <div className="flex flex-col relative top-12 text-center border border-gray-200 rounded w-18 h-72">
      <p className="font-bold text-xl">{dayTime}</p>
      <img
        src={`http://openweathermap.org/img/wn/${image}@2x.png`}
        alt=""
        className="relative"
      />
      <p className="font-bold text-3xl">{temp}</p>
      <p className="text-gray-400">{feelsLike}</p>
      <p className="text-gray-400">{pressure}</p>
      <p className="text-gray-400">{humidity}</p>
      <p className="text-gray-400">{windSpeed}</p>
    </div>
  );
};

export default MiniWeatherCard;
