// Function to append a "Remove Trip" button to the trip card

export const appendRemoveTripButton = (tripCard) => {
  // selects the element with the class "tripButtons" within the trip card
  // and sets its inner HTML to include a button with the class "removeTrip".

  tripCard.querySelector(".tripButtons").innerHTML = `
    <button class="removeTrip">Remove Trip</button>
  `;
};
