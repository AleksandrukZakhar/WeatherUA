import Alert from "../Components/Alert";

let coordinates = {
  lat: null,
  lon: null,
  accuracy: 0,
};

const success = (pos) => {
  var crd = pos.coords;

  if (crd != null) {
    coordinates.lat = crd.latitude;
    coordinates.lon = crd.longitude;
    coordinates.accuracy = crd.accuracy;
  }
  if (crd === null) {
    return <Alert text="Ми не змогли отримати ваші координати" />;
  }
};

const error = (err) => {
  return <Alert text={`Помилка ${err}`} />;
};

let options = {
  enableHighAccuracy: true,
  timeout: 10000,
  maximumAge: 300000,
};

const GetLocation = () => {
  navigator.geolocation.getCurrentPosition(success, error, options);
};

export { GetLocation, coordinates };
