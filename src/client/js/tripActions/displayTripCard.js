import { fetchCityImageURL } from "../fetchers/fetchCityImageURL.js";
import { fetchWeatherStatus } from "./../fetchers/fetchWeatherStatus.js";
import { calculateDaysDifference } from "./../utils/calculateDaysDifference.js";
import { addNewToDoList } from "./addNewToDoList.js";
import { generateTripCard } from "./generateTripCard.js";
import { removeTrip } from "./removeTrip.js";
import { saveTrip } from "./saveTrip.js";

export const displayTripCard = async (trip, saved, id) => {
  console.log(`trip: ${trip}, saved: ${saved}, id: ${id}`);

  // Create a new div element for the trip card
  const tripCard = document.createElement("div");
  tripCard.className = "tripCard";

  const currentDate = new Date();
  console.log("currentDate:", currentDate);

  // Calculate the number of days from the current date to the trip start date
  const daysAwayFromCurrentDay = calculateDaysDifference(
    currentDate,
    trip.date
  );
  console.log("daysAwayFromCurrentDay:", daysAwayFromCurrentDay);

  // Calculate the duration of the trip
  const tripSpendLongLength = calculateDaysDifference(trip.date, trip.endDate);
  console.log("tripSpendLongLength:", tripSpendLongLength);

  // Fetch the image URL for the city
  const cityImageURL = await fetchCityImageURL(trip.city, trip.country);
  console.log("cityImageURL:", cityImageURL);

  // Fetch the weather status for the trip location
  const weatherStatus = await fetchWeatherStatus(trip.longitude, trip.latitude);
  console.log(`weatherStatus:`, weatherStatus);

  // Generate the HTML content for the trip card
  tripCard.innerHTML = generateTripCard(
    trip,
    cityImageURL,
    tripSpendLongLength,
    daysAwayFromCurrentDay,
    weatherStatus
  );

  console.log("tripCard:", tripCard);

  // Append the trip card to the travel container in the DOM
  document.getElementById("travelContainer").appendChild(tripCard);

  console.log("tripCard:", tripCard);

  // Attach event listener to save the trip when the save button is clicked
  tripCard.querySelector(".saveTrip")?.addEventListener("click", () => {
    saveTrip(tripCard, trip);
  });

  // Attach event listener to add a new to-do list item when the list item is clicked
  tripCard
    .querySelector(".listItem")
    ?.addEventListener("click", () => addNewToDoList(id, tripCard, trip));

  // If the trip is already saved, attach the remove trip functionality
  if (saved) {
    removeTrip(tripCard, trip.id);
  }
};
