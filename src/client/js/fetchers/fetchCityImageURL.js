// Function to fetch the image URL for the provided city and country

export const fetchCityImageURL = async (city, country) => {
  // Base URL for the API endpoint
  const BASE_URL = process.env.BASE_URL;

  // Construct the URL for fetching the image
  const imageToFetchURL = `${BASE_URL}/api/image?city=${encodeURIComponent(
    city
  )}&country=${encodeURIComponent(country)}`;

  console.log("Fetching image URL for city:", city);
  console.log("imageToFetchURL:", imageToFetchURL);

  try {
    // Make a request to the API to fetch the image URL
    const response = await fetch(imageToFetchURL);

    console.log("response:", response);

    if (!response.ok) {
      throw new Error(
        "Response error, not OK, status code: " + response.statusText
      );
    }

    const data = await response.json();
    console.log("Image URL fetched successfully:", data.imageUrl);

    // Check if the image URL is present in the response data
    if (data.imageUrl) {
      return data.imageUrl;
    } else {
      console.log("Sorry! No image found for the provided city.");
      return null;
    }
  } catch (error) {
    // Log any errors that occur during the fetch process
    console.error("Error while trying to fetch image:", error);
    console.dir(error);

    return error;
  }
};
