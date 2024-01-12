import { Autocomplete, Card, TextField } from "@mui/material";
import WeatherCard from "./WeatherCard";

export default function LocationSearch() {
  const top10Locations = [
    { label: "Ottawa", id: 1 },
    { label: "New York", id: 2 },
  ];

  return (
    <Card variant="outlined">
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={top10Locations}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Location" />}
      />
      <WeatherCard day="Monday" icon="sunny" temperature="20" />
      <WeatherCard day="Monday" icon="sunny" temperature="20" />
      <WeatherCard day="Monday" icon="sunny" temperature="20" />
    </Card>
  );
}
