export const appendUpdateTripButton = (tripCard) => {
  console.log("appendUpdateTripButton");

  // Appends an "Update Trip" button to the trip card.

  tripCard.querySelector(".tripButtons").innerHTML = `
    <button class="updateList">update Trip</button>
  `;
};
