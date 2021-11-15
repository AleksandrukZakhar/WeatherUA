import { GetLocation } from "../Functions/GetLocation";

const Location = () => {
  return (
    <div className="flex flex-1 flex-row items-center justify-center mt-36">
      <button
        className="bg-blue-600 text-gray-50 rounded w-32 font-bold hover:bg-blue-400 absolute"
        onClick={() => GetLocation()}
      >
        Отримати геолокацію
      </button>
    </div>
  );
};

export default Location;
