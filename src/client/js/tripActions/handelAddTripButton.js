import { getGeoNamesApiURL } from "../utils/getGeoNamesApiURL.js";
import { displayTripCard } from "./displayTripCard.js";

// Function to validate the trip details
const validateTrip = (trip) => {
  if (!trip.city || trip.city.trim() === "") {
    return "City is required.";
  }
  if (!trip.date || trip.date.trim() === "") {
    return "Start date is required.";
  }
  if (!trip.endDate || trip.endDate.trim() === "") {
    return "End date is required.";
  }
  if (isNaN(Date.parse(trip.date))) {
    return "Start date is invalid.";
  }
  if (isNaN(Date.parse(trip.endDate))) {
    return "End date is invalid.";
  }
  if (new Date(trip.date) > new Date(trip.endDate)) {
    return "Start date cannot be after end date.";
  }
  return "Valid";
};

// Function to set error message in the DOM
const setErrorTrip = (message) => {
  const errorElement = document.getElementById("#tripErrors");
  errorElement.textContent = message;
};

// Main function to handle the Add Trip button click
export const handelAddTripButton = async () => {
  // Get input values from the DOM
  const city = document.getElementById("tripCity").value;
  console.log(`city: ${city}`);

  const startTripDate = document.getElementById("tripDate").value;
  const endTripDate = document.getElementById("endDate").value;

  console.log(`startTripDate: ${startTripDate}`);
  console.log(`endTripDate: ${endTripDate}`);

  // Validate the trip details
  const validateTripResult = validateTrip({
    city: city,
    date: startTripDate,
    endDate: endTripDate,
  });

  // If validation fails, show an error message and return
  if (validateTripResult !== "Valid") {
    alert("Please make sure to fill all the fields correctly");
    setErrorTrip(validateTripResult);
    return;
  }

  // Get the GeoNames API URL for the city
  const GEONAMES_API_URL = getGeoNamesApiURL(city);

  try {
    // Fetch data from the GeoNames API
    const response = await fetch(GEONAMES_API_URL);

    console.log(`response: }`);
    console.dir(response, { depth: null });
    console.log(`response.ok: ${response.ok}`);
    console.log(`response.statusText: ${response.statusText}`);

    // If the response is not ok, throw an error
    if (!response.ok) {
      throw new Error("Error! Response was not ok " + response.statusText);
    }

    // Parse the response data
    const data = await response.json();
    console.log(`data: ${data}`);

    // Extract necessary information from the response data
    const countryName = data?.geonames[0]?.countryName;
    const location_lat = data?.geonames[0]?.lat;
    const location_lng = data?.geonames[0]?.lng;

    // Create a trip object with the extracted information
    const trip = {
      city: city,
      country: countryName,
      latitude: location_lat,
      longitude: location_lng,
      date: startTripDate,
      endDate: endTripDate,
    };

    // Display the trip card with the trip details
    displayTripCard(trip, false, trip.city);
  } catch (error) {
    // Log any errors that occur during the fetch
    console.error("Error! Problem while fetching data", error);
    console.dir(error);
  }
};
