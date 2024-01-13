/// <reference types="vite-plugin-svgr/client" />

import { Card } from "@mui/material";
import LocationSearch from "./components/LocationSearch";
import WeatherCard from "./components/WeatherCard";
import "./App.css";
import { useEffect, useReducer } from "react";
import SelectedLocationWeather from "./components/SelectedLocationWeather";
import { LOCATIONS } from "./constants";
import {
  WeatherContext,
  WeatherDispatchContext,
  WeatherReducer,
} from "./context/WeatherContext";
import { getWeatherData } from "./service/WeatherDataService";

export default function App() {
  const [weatherData, dispatchWeatherData] = useReducer(WeatherReducer, {
    location: LOCATIONS[0],
    locationData: {
      city: "",
      days: [],
    },
  });

  useEffect(() => {
    if (weatherData.location) {
      getWeatherData(weatherData.location.label, dispatchWeatherData);
    }
  }, [weatherData.location]);

  const weatherCards = weatherData.locationData.days
    .slice(1, 4)
    .map((day) => <WeatherCard key={day.date} {...day} />);

  return (
    <div className="app-wrapper app-header">
      <WeatherContext.Provider value={weatherData}>
        <WeatherDispatchContext.Provider value={dispatchWeatherData}>
          <LocationSearch />
          <Card variant="outlined" sx={{ p: "2rem", mt: "2rem" }}>
            {weatherData.locationData.days[0] && (
              <>
                <SelectedLocationWeather
                  selectedDayWeather={weatherData.locationData.days[0]}
                />
                <div className="weather-cards-wrapper">{weatherCards}</div>
              </>
            )}
          </Card>
        </WeatherDispatchContext.Provider>
      </WeatherContext.Provider>
    </div>
  );
}
