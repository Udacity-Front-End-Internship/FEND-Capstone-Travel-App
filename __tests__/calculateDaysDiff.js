// Import the calculateDaysDifference function from the utils folder
import { calculateDaysDifference } from "./../src/client/js/utils/calculateDaysDifference.js";

// Describe block for grouping related tests
describe("Date Difference Calculation calculator !!", () => {
  // Test case to check if the function returns the correct number of days between two dates
  test(" it should return correct number of days between two dates", () => {
    // Expect the function to return 185 days between "2024-08-30" and "2025-03-03"
    expect(calculateDaysDifference("2024-08-30", "2025-03-03")).toBe(185);
  });
});
