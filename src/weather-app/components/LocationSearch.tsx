import { Autocomplete, TextField } from "@mui/material";
import { LOCATIONS } from "../constants";
import { useContext } from "react";
import {
  WeatherActionTypes,
  WeatherContext,
  WeatherDispatchContext,
} from "../context/WeatherContext";

export default function LocationSearch() {
  const { location } = useContext(WeatherContext);
  const weatherDispatch = useContext(WeatherDispatchContext);
  const inputValue = LOCATIONS.find((loc) => loc === location) || LOCATIONS[0];

  return (
    <Autocomplete
      disablePortal
      id="combo-box"
      size="small"
      options={LOCATIONS}
      sx={{ width: 300, bgcolor: "white" }}
      value={inputValue}
      onChange={(event, newSelectedLocation) => {
        weatherDispatch({
          type: WeatherActionTypes.LOCATION_CHANGE,
          location: newSelectedLocation,
        });
      }}
      renderInput={(params) => <TextField {...params} label="Location" />}
    />
  );
}
