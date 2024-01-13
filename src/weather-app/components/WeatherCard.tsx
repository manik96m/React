import { Card, Typography } from "@mui/material";
import "./WeatherCard.css";

export default function WeatherCard({
  date,
  Icon,
  iconId,
  temp,
  weather_desc,
}) {
  // returns weekday to a given Date value
  function getDay(date) {
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    return weekday[new Date(date).getDay()];
  }

  return (
    <Card variant="outlined" sx={{ minWidth: "8rem" }}>
      <header className="weather-card-content">
        <Typography
          gutterBottom
          variant="subtitle1"
          component="div"
          fontWeight="bold"
        >
          {getDay(date)}
        </Typography>

        <img src={`https://openweathermap.org/img/wn/${iconId}@2x.png`} />

        <Typography gutterBottom variant="subtitle1" component="div">
          {Math.round(temp - 273.15)} °C
        </Typography>
      </header>
    </Card>
  );
}
