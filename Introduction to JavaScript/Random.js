/**
 * Generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
 * @constant
 * @type {number}
 */

/**
 * Generates a random integer between 0 and 10 (inclusive).
 * @constant
 * @type {number}
 */

/**
 * Generates a random integer between 10 and 20 (inclusive).
 * @constant
 * @type {number}
 */

/**
 * Generates a random integer between the specified minimum and maximum values (inclusive).
 * @param {number} min - The minimum value (inclusive).
 * @param {number} max - The maximum value (inclusive).
 * @returns {number} A random integer between min and max (inclusive).
 * 
 * @example
 * // Returns a random integer between 1 and 5 (inclusive)
 * randomNum(1, 5);
 * 
 * @note
 * The Math.random() function in JavaScript returns a floating-point, pseudo-random number in the range 0 (inclusive) to 1 (exclusive). 
 * To generate a number within a specific range, you need to scale and shift the value accordingly.
 */
const num = Math.random();
console.log(num); // Output: 0.9397661043877227

const num2 = Math.round(Math.random() * 10);
const num3 = 10 + Math.round(Math.random() * 10);//10 to 20


function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}//min and max included


