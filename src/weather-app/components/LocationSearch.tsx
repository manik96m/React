import { Autocomplete, TextField } from "@mui/material";
import { LOCATIONS } from "../constants";

export default function LocationSearch({ selectedLocation, onLocationChange }) {
  const inputValue =
    LOCATIONS.find((location) => location === selectedLocation) || LOCATIONS[0];

  return (
    <Autocomplete
      disablePortal
      id="combo-box"
      size="small"
      options={LOCATIONS}
      sx={{ width: 300, bgcolor: "white" }}
      value={inputValue}
      onChange={(event, newSelectedLocation) => {
        onLocationChange(newSelectedLocation);
      }}
      renderInput={(params) => <TextField {...params} label="Location" />}
    />
  );
}
