// Function to create weather information based on the number of days away from the current day
const createWeatherInfo = (daysAwayFromCurrentDay, weatherStatus) => {
  if (daysAwayFromCurrentDay < 7 && daysAwayFromCurrentDay > 0) {
    return `
      <p class="trip-weatherStatus">
        Typical weatherStatus in ${weatherStatus?.data[daysAwayFromCurrentDay]?.datetime} is:<br />
        max temperature - ${weatherStatus?.data[daysAwayFromCurrentDay]?.app_max_temp}, 
        min temperature - ${weatherStatus?.data[daysAwayFromCurrentDay]?.app_min_temp}<br />
        ${weatherStatus?.data[daysAwayFromCurrentDay]?.weatherStatus?.description}
      </p>`;
  }
  return `<p>Weather appears for 7 days or less</p>`;
};

// Function to create a button for saving or removing a trip
const createTripButton = (isSaved) => {
  return isSaved
    ? `<button class="removeTrip">Remove Trip</button>`
    : `<button class="saveTrip">Save Trip</button>`;
};

// Function to create a list of to-do items for the trip
const createTodoList = (trip) => {
  if (!trip.list) return "";

  return trip.list
    .map((item) => `<div class="listItem"><p>${item}</p></div>`)
    .join("");
};

// Main function to generate the trip card HTML
export const generateTripCard = (
  trip,
  cityImageURL,
  tripSpendLongLength,
  daysAwayFromCurrentDay,
  weatherStatus,
  saved
) => {
  console.log("generateTripCard");

  console.log("trip:", trip);
  console.log("cityImageURL:", cityImageURL);
  console.log("tripSpendLongLength:", tripSpendLongLength);
  console.log("daysAwayFromCurrentDay:", daysAwayFromCurrentDay);
  console.log("weatherStatus:", weatherStatus);
  console.log("saved:", saved);

  // Generate weather information, trip button, and to-do list
  const weatherInfo = createWeatherInfo(daysAwayFromCurrentDay, weatherStatus);
  const tripButton = createTripButton(saved);
  const todoList = createTodoList(trip);

  // Return the complete HTML for the trip card
  return `
    <img src="${cityImageURL}" alt="${trip.city}, ${trip.country}" class="tripImage" />
    <div class="tripDetails">
      <p><strong>Trip to:</strong> ${trip.city}, ${trip.country}</p>
      <p><strong>Departing date:</strong> ${trip.date} <strong>to:</strong> ${trip.endDate}</p>
      <p><strong>Trip length:</strong> ${tripSpendLongLength} days</p>
      <div class="tripButtons">${tripButton}</div>
      <p class="tripInformation">${trip.city}, ${trip.country} is ${daysAwayFromCurrentDay} days away</p>
      ${weatherInfo}
      <div class="list">
        <div class="listItem" id="addItem">
          <p>Add to-do item<span>+</span></p>
        </div>
        ${todoList}
      </div>
    </div>
  `;
};
