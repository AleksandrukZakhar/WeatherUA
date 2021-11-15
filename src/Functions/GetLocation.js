import FetchWeather from "./FetchWeather";

let coordinates = {
  lat: 0,
  lon: 0,
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
    alert("Opps something went wrong!");
  }

  FetchWeather(coordinates.lat, coordinates.lon);
};

const error = (err) => {
  console.warn(`ERROR(${err.code}): ${err.message}`);
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
