// Code your solution here
/**
 * Finds all drivers that match the passed-in name.
 *
 * @param {Array} drivers - Array of driver names (strings).
 * @param {string} name - The name to match.
 * @return {Array} - Array of matching driver names.
 */
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

/**
 * Finds drivers whose names start with the provided string.
 *
 * @param {Array} drivers - Array of driver names (strings).
 * @param {string} letters - The starting letters to match.
 * @return {Array} - Array of driver names that start with the provided string.
 */
function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}

/**
 * Accesses the data structure to check if the name matches.
 *
 * @param {Array} drivers - Array of objects with 'name' property.
 * @param {string} name - The name to match.
 * @return {Array} - Array of objects where the 'name' property matches the passed-in name.
 */
function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}

// Export the functions for use in tests
module.exports = { findMatching, fuzzyMatch, matchName };
