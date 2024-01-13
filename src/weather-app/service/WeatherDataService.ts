import { API_ENDPOINT, API_KEY } from "../constants";
import { WeatherActionTypes } from "../context/WeatherContext";
import ImageToComponentMap from "../images";

export function getWeatherData(location, dispatchWeatherData) {
  const request = `${API_ENDPOINT}?q=${location}&APPID=${API_KEY}`;
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
        Icon: ImageToComponentMap[response.list[dayIndices[i]].weather[0].icon],
        temp: response.list[dayIndices[i]].main.temp,
      });
    }

    dispatchWeatherData({
      type: WeatherActionTypes.SELECTED_LOCATION_WEATHER_CHANGE,
      locationData: {
        city,
        days,
      },
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
