import Day from "../Images/Weather_Icons/static/day.svg";

const MiniWeatherCard = () => {
  return (
    <div className="flex flex-col relative top-12 text-center border border-gray-200 rounded w-18 h-60">
      <img src={Day} alt="" className="relative" />
      <p className="font-bold text-3xl">+6</p>
      <div className="w-10 h-0.5 bg-gray-200 relative left-3"></div>
      <p className="text-gray-400">+6</p>
      <div className="w-10 h-0.5 bg-gray-200 relative left-3"></div>
      <p>752</p>
      <div className="w-10 h-0.5 bg-gray-200 relative left-3"></div>
      <p>90</p>
      <div className="w-10 h-0.5 bg-gray-200 relative left-3"></div>
      <p>1,2</p>
      <div className="w-10 h-0.5 bg-gray-200 relative left-3"></div>
      <p>-</p>
    </div>
  );
};

export default MiniWeatherCard;
