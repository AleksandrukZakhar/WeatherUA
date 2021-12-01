import { createStore } from "redux";

const defaultState = {
  weatherData: [],
};

const Reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, weatherData: action.payload };
    default:
      return state;
  }
};

const Store = createStore(Reducer);

export default Store;
