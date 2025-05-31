import { handelAddTripButton } from "./tripActions/handelAddTripButton.js";

// Add event listener to the DOMContentLoaded event to ensure the DOM is fully loaded before attaching event listeners

document.addEventListener("DOMContentLoaded", () => {
  // Add event listener to the form submission to handle the add trip button click
  document.getElementById("addTripForm").addEventListener("submit", (event) => {
    event.preventDefault();
    handelAddTripButton(); // Call the function to handle the add trip button click
  });
});

//------------------------------------------------------------------------
const BASE_URL = process.env.BASE_URL; // Base URL for the API

// Function to fetch and display trips
const fetchAndDisplayTrips = async () => {
  try {
    const response = await fetch(`${BASE_URL}/all`); // Fetch all trips from the API

    console.log("response");
    console.dir(response, { depth: null }); // Log the response for debugging purposes

    if (!response.ok) {
      throw new Error(
        "bad status while trying to fetch data " + response.statusText
      );
    }

    const data = await response.json();
    data.forEach((trip) => {
      // Indicate that the trip is saved
      const saved = true;
      const id = trip.id; // Get the trip ID
      displayTripCard(trip, saved, id); // Display the trip card with the trip data
    });
  } catch (error) {
    console.error("Error while fetching trips !!! :", error);
  }
};
