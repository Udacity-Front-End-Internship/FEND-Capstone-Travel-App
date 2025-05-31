import { getApiWeatherStatusBitURL } from "../utils/getApiWeatherStatusBitURL.js";

// Function to fetch weather status based on longitude and latitude
export const fetchWeatherStatus = async (long, lat) => {
  try {
    // Generate the API URL using the provided longitude and latitude
    const API_WEATHER_STATUS_BIT_URL = getApiWeatherStatusBitURL({ long, lat });

    console.log("API_WEATHER_STATUS_BIT_URL:", API_WEATHER_STATUS_BIT_URL);

    // Fetch data from the generated API URL
    const response = await fetch(API_WEATHER_STATUS_BIT_URL);
    console.log("response:", response);

    // Check if the response is not OK (status code is not 200)
    if (!response.ok) {
      throw new Error(
        "Error status code was not 200 OK !!!" + response.statusText
      );
    }

    const data = await response.json();

    console.log(data);

    return data;
  } catch (error) {
    console.dir(error);
    console.error("Error ! , problem with your fetch operation:", error);

    // Return null in case of an error
    return null;
  }
};
