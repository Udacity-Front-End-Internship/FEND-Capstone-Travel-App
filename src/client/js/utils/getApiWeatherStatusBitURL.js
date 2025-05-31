export const getApiWeatherStatusBitURL = (locationInformation) => {
  // Log the location information for debugging purposes
  console.log("locationInformation:", locationInformation);

  // Destructure longitude and latitude from location information
  const { long, lat } = locationInformation;

  // Retrieve the Weatherbit API key from environment variables
  const weatherStatusbitKey = process.env.WEATHERBIT_KEY;

  console.log("weatherStatusbitKey:", weatherStatusbitKey);

  // Base URL for the Weatherbit API
  const API_WEATHER_STATUS_BIT_BASE_URL =
    "https://api.weatherbit.io/v2.0/forecast";

  // Construct the full API URL with query parameters
  const API_WEATHER_STATUS_BIT_URL = `${API_WEATHER_STATUS_BIT_BASE_URL}/daily?lat=${lat}&lon=${long}&days=7&key=${weatherStatusbitKey}`;

  console.log(
    "API_WEATHER_STATUS_BIT_URL generator function:",
    API_WEATHER_STATUS_BIT_URL
  );

  return API_WEATHER_STATUS_BIT_URL;
};
