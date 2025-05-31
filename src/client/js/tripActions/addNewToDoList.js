import { appendUpdateTripButton } from "../tripCardComponents/appendUpdateTripButton.js";
import { updateTrip } from "./updateTrip.js";

// Function to add a new to-do item to the list, takes the id of the trip, the trip card, and the trip object as parameters

export const addNewToDoList = (id, tripCard, trip) => {
  console.log("addNewToDoList");

  console.log("id:", id);
  console.log("tripCard:", tripCard);
  console.log("trip:", trip);

  // Prompt the user to enter a new to-do item
  let newItemText = prompt("Please, Enter a new to do item:");

  // Input validation
  if (newItemText != null && newItemText.trim() != "") {
    // Create a new div element for the list item
    let newListItem = document.createElement("div");
    newListItem.className = "listItem";

    // Create a paragraph element to hold the text
    let itemParagraph = document.createElement("p");
    itemParagraph.textContent = newItemText;

    // Append the paragraph to the list item div
    newListItem.appendChild(itemParagraph);

    // Append the new list item to the existing list in the trip card
    tripCard.querySelector(".list").appendChild(newListItem);

    // If an id is provided, append the update button and update the trip
    if (id != null) {
      appendUpdateTripButton(tripCard);
      updateTrip(tripCard, trip, id);
    }
  } else {
    // Alert the user if the input is invalid
    alert("Please make sure to fill all the fields correctly");
  }
};
