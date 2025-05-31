export const removeTrip = async (tripCard, tripId) => {
  try {
    const BASE_URL = process.env.BASE_URL;

    // Log the trip ID that is being removed
    console.log("Removing trip with ID:", tripId);

    // Send a DELETE request to the server to remove the trip
    const response = await fetch(`${BASE_URL}/delete/${tripId}`, {
      method: "DELETE",
    });

    // Check if the response is not OK (status code is not 200)
    if (!response.ok) {
      throw new Error("response was not 200 OK " + response.statusText);
    }

    // Log success message and remove the trip card from the DOM
    console.log(`Successfully removed, ID ${tripId} removed.`);
    tripCard.remove();
  } catch (error) {
    // Log any errors that occur during the process
    console.error("Error while removing trip:", error);
    console.dir(error, { depth: null });
  }
};
