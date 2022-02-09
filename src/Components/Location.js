const Location = ({ setCoordinates }) => {
  const success = (pos) => {
    var crd = pos.coords;

    if (crd != null) {
      setCoordinates({
        lat: crd.latitude,
        lon: crd.longitude,
        accuracy: crd.accuracy,
      });
    }
    if (crd === null) {
    }
  };

  const error = (err) => {
    console.log(err);
  };

  let options = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 300000,
  };

  const GetLocation = () => {
    navigator.geolocation.getCurrentPosition(success, error, options);
  };

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
