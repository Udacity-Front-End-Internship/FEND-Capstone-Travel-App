import { appendRemoveTripButton } from "../tripCardComponents/appendRemoveTripButton.js";
import { removeTrip } from "./removeTrip.js";

export const saveTrip = async (tripCard, trip) => {
  // Extract list items from the trip card, skipping the first item
  const listItems = Array.from(tripCard.querySelectorAll(".listItem p"))
    .filter((item, index) => index > 0)
    .map((item) => item.textContent);

  // Log trip details for debugging purposes
  console.log({
    city: trip.city,
    country: trip.country,
    latitude: trip.latitude,
    longitude: trip.longitude,
    date: trip.date,
    endDate: trip.endDate,
    list: listItems,
  });

  const BASE_URL = process.env.BASE_URL;

  try {
    // Send a POST request to save the trip details
    const response = await fetch(`${BASE_URL}/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        city: trip.city,
        country: trip.country,
        latitude: trip.latitude,
        longitude: trip.longitude,
        date: trip.date,
        endDate: trip.endDate,
        list: listItems,
      }),
    });

    const data = await response.json();
    console.log("Trip saved !!!!:", data);
    const id = data.id;

    // Append a remove button to the trip card
    appendRemoveTripButton(tripCard);

    // Add an event listener to the remove button to handle trip removal
    tripCard
      .querySelector(".removeTrip")
      .addEventListener("click", () => removeTrip(tripCard, data.id));
  } catch (error) {
    console.error("Error saving trip:", error);
  }
};
