// Declaring an array of 5 elements
let myArray = [1, 2, 3, 4, 5];

// Array Methods:

// 1. push() - Adds one or more elements to the end of an array and returns the new length of the array.
myArray.push(6); // myArray is now [1, 2, 3, 4, 5, 6]

// 2. pop() - Removes the last element from an array and returns that element.
let lastElement = myArray.pop(); // lastElement is 6, myArray is now [1, 2, 3, 4, 5]

// 3. unshift() - Adds one or more elements to the beginning of an array and returns the new length of the array.
myArray.unshift(0); // myArray is now [0, 1, 2, 3, 4, 5]

// 4. shift() - Removes the first element from an array and returns that element.
let firstElement = myArray.shift(); // firstElement is 0, myArray is now [1, 2, 3, 4, 5]

// 5. concat() - Merges two or more arrays and returns a new array.
let newArray = myArray.concat([6, 7, 8]); // newArray is [1, 2, 3, 4, 5, 6, 7, 8]

// 6. slice() - Returns a shallow copy of a portion of an array into a new array object.
let slicedArray = myArray.slice(1, 3); // slicedArray is [2, 3]

// 7. splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
myArray.splice(2, 1, 'a', 'b'); // myArray is now [1, 2, 'a', 'b', 4, 5]

// 8. indexOf() - Returns the first index at which a given element can be found in the array, or -1 if it is not present.
let index = myArray.indexOf('a'); // index is 2

// 9. includes() - Determines whether an array includes a certain value among its entries, returning true or false.
let hasElement = myArray.includes(4); // hasElement is true

// 10. join() - Joins all elements of an array into a string and returns this string.
let joinedString = myArray.join('-'); // joinedString is "1-2-a-b-4-5"

// 11. reverse() - Reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
myArray.reverse(); // myArray is now [5, 4, 'b', 'a', 2, 1]

// 12. sort() - Sorts the elements of an array in place and returns the sorted array.
myArray.sort(); // myArray is now [1, 2, 4, 5, 'a', 'b']

// 13. forEach() - Executes a provided function once for each array element.
myArray.forEach(element => console.log(element)); // Logs each element of myArray

// 14. map() - Creates a new array with the results of calling a provided function on every element in the calling array.
let mappedArray = myArray.map(element => element + '1'); // mappedArray is ["11", "21", "41", "51", "a1", "b1"]

// 15. filter() - Creates a new array with all elements that pass the test implemented by the provided function.
let filteredArray = myArray.filter(element => typeof element === 'number'); // filteredArray is [1, 2, 4, 5]

// 16. reduce() - Executes a reducer function on each element of the array, resulting in a single output value.
let sum = myArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // sum is "1245ab"

// 17. find() - Returns the value of the first element in the array that satisfies the provided testing function.
let foundElement = myArray.find(element => typeof element === 'string'); // foundElement is 'a'

// 18. findIndex() - Returns the index of the first element in the array that satisfies the provided testing function.
let foundIndex = myArray.findIndex(element => typeof element === 'string'); // foundIndex is 4

// 19. every() - Tests whether all elements in the array pass the test implemented by the provided function.
let allNumbers = myArray.every(element => typeof element === 'number'); // allNumbers is false

// 20. some() - Tests whether at least one element in the array passes the test implemented by the provided function.
let someNumbers = myArray.some(element => typeof element === 'number'); // someNumbers is true