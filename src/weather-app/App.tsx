/// <reference types="vite-plugin-svgr/client" />

import { Card } from "@mui/material";
import LocationSearch from "./components/LocationSearch";
import WeatherCard from "./components/WeatherCard";
import "./App.css";
import { useEffect, useState } from "react";
import SelectedLocationWeather from "./components/SelectedLocationWeather";
import ImageToComponentMap from "./images/index";
import { LOCATIONS, API_KEY, API_ENDPOINT } from "./constants";

export default function App() {
  const [selectedLocation, setSelectedLocation] = useState(LOCATIONS[0]);
  const [selectedLocationWeather, setSelectedLocationWeather] = useState({
    city: "",
    days: [],
  });

  useEffect(() => {
    if (selectedLocation) {
      getWeatherData();
    }
  }, [selectedLocation]);

  function getWeatherData() {
    const request = `${API_ENDPOINT}?q=${selectedLocation.label}&APPID=${API_KEY}`;
    fetch(request).then(async (resp: any) => {
      const response = await resp.json();
      const city = response.city.name;
      const days = [];
      const dayIndices = getDayIndices(response);

      for (let i = 0; i < 5; i++) {
        days.push({
          date: response.list[dayIndices[i]].dt_txt,
          weather_desc: response.list[dayIndices[i]].weather[0].description,
          iconId: response.list[dayIndices[i]].weather[0].icon,
          Icon: ImageToComponentMap[
            response.list[dayIndices[i]].weather[0].icon
          ],
          temp: response.list[dayIndices[i]].main.temp,
        });
      }

      setSelectedLocationWeather({
        city,
        days,
      });
    });
  }

  // returns array with Indices of the next five days in the list
  // from the API data (every day at 12:00 pm)
  function getDayIndices(data) {
    let dayIndices = [];
    dayIndices.push(0);

    let index = 0;
    let tmp = data.list[index].dt_txt.slice(8, 10);

    for (let i = 0; i < 4; i++) {
      while (
        tmp === data.list[index].dt_txt.slice(8, 10) ||
        data.list[index].dt_txt.slice(11, 13) !== "15"
      ) {
        index++;
      }
      dayIndices.push(index);
      tmp = data.list[index].dt_txt.slice(8, 10);
    }
    return dayIndices;
  }

  function handleLocationChange(location) {
    setSelectedLocation(location);
  }

  const weatherCards = selectedLocationWeather.days
    .slice(1, 4)
    .map((day) => <WeatherCard key={day.date} {...day} />);

  return (
    <div className="app-wrapper app-header">
      <LocationSearch
        selectedLocation={selectedLocation}
        onLocationChange={(event) => handleLocationChange(event)}
      />
      <Card variant="outlined" sx={{ p: "2rem", mt: "2rem" }}>
        {selectedLocationWeather.days[0] && (
          <>
            <SelectedLocationWeather
              selectedDayWeather={selectedLocationWeather.days[0]}
              selectedLocation={selectedLocation}
            />
            <div className="weather-cards-wrapper">{weatherCards}</div>
          </>
        )}
      </Card>
    </div>
  );
}
