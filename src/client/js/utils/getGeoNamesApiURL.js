export const getGeoNamesApiURL = (city) => {
  // Base URL for the GeoNames API
  const GEONAMES_API_BASE_URL = "http://api.geonames.org/searchJSON";
  console.log(`GEONAMES_API_BASE_URL: ${GEONAMES_API_BASE_URL}`);

  // Retrieve the GeoNames API key from environment variables
  const GEONAMESKEY = process.env.GEONAMESKEY;
  console.log(`GEONAMESKEY: ${GEONAMESKEY}`);

  // Construct the full API URL with the city query, max rows, and API key
  const GEONAMES_API_URL = `${GEONAMES_API_BASE_URL}?q=${city}&maxRows=10&username=${GEONAMESKEY}`;
  console.log(`GEONAMES_API_URL: ${GEONAMES_API_URL}`);

  // Return the constructed API URL
  return GEONAMES_API_URL;
};
