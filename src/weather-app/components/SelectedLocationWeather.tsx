import { Typography } from "@mui/material";
import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

export default function SelectedLocationWeather({
  selectedDayWeather: { temp, weather_desc, iconId },
}) {
  const { location } = useContext(WeatherContext);

  return (
    <div className="flex-wrapper">
      <img src={`https://openweathermap.org/img/wn/${iconId}@2x.png`} />
      <div>
        <Typography gutterBottom variant="subtitle1" component="div">
          Today
        </Typography>

        <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
          {location.label}
        </Typography>

        <Typography gutterBottom variant="subtitle1" component="div">
          Temperature: {Math.round(temp - 273.15)} °C
        </Typography>

        <Typography gutterBottom variant="subtitle1" component="div">
          {weather_desc}
        </Typography>
      </div>
    </div>
  );
}
