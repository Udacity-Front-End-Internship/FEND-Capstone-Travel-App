import { appendRemoveTripButton } from "../tripCardComponents/appendRemoveTripButton.js";
import { removeTrip } from "./removeTrip.js";

export const updateTrip = (tripCard, trip, id) => {
  console.log("updateTrip");

  console.log("tripCard:", tripCard);
  console.log("trip:", trip);
  console.log("id:", id);

  // Add event listener to the update button
  tripCard.querySelector(".updateList").addEventListener("click", async () => {
    // Collect list items from the trip card, excluding the first item
    const listItems = Array.from(tripCard.querySelectorAll(".listItem p"))
      .filter((_, index) => index > 0)
      .map((item) => item.textContent);

    try {
      const BASE_URL = process.env.BASE_URL;

      console.log("BASE_URL:", BASE_URL);

      // Send a PUT request to update the trip with new list items
      const response = await fetch(`${BASE_URL}/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...trip, list: listItems }),
      });

      console.log("Trip updated response  !!:", response);

      if (!response.ok) {
        throw new Error(`Response was not 200 ${response.statusText}`);
      }

      const data = await response.json();

      console.log("Trip updated Succefuly, data :", data);

      // Append remove button to the trip card
      appendRemoveTripButton(tripCard);

      // Add event listener to the remove button
      tripCard
        .querySelector(".removeTrip")
        .addEventListener("click", () => removeTrip(tripCard, data.id));

      console.log("Trip updated Succefuly !!:", data);
    } catch (error) {
      console.error("Error while updating trip :", error);
    }
  });
};
