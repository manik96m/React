import { createContext } from "react";

export const WeatherContext = createContext({});
export const WeatherDispatchContext = createContext({});

export const WeatherReducer = (state, action) => {
  switch (action.type) {
    case WeatherActionTypes.LOCATION_CHANGE:
      return {
        ...state,
        location: action.location,
      };
    case WeatherActionTypes.SELECTED_LOCATION_WEATHER_CHANGE:
      return {
        ...state,
        locationData: action.locationData,
      };
    default:
      return state;
  }
};
1;
export const WeatherActionTypes = {
  LOCATION_CHANGE: "Location Change",
  SELECTED_LOCATION_WEATHER_CHANGE: "Selected Location Weather Change",
};
