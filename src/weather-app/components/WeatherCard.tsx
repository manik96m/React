import { Card } from "@mui/material";
import "./WeatherCard.css";

export default function WeatherCard({ day, icon, temperature }) {
  return (
    <Card variant="outlined">
      <div className="weather-card-content">
        {day}
        jnnm
        {temperature}
      </div>
    </Card>
  );
}
