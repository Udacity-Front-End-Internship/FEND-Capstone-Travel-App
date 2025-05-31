// Function to calculate the difference in days between two dates
export const calculateDaysDifference = (start, end) => {
  // Convert the start date string to a Date object
  const startDate = new Date(start);

  // Convert the end date string to a Date object
  const endDate = new Date(end);

  // Define the number of milliseconds in one day
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

  // Calculate the difference in milliseconds between the two dates
  const differenceInMilliseconds = endDate - startDate;

  // Convert the difference from milliseconds to days and round up to the nearest whole number
  return Math.ceil(differenceInMilliseconds / MILLISECONDS_PER_DAY);
};
