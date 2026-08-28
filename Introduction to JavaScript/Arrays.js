// Using array literal
let array1 = [1, 2, 3, 4, 5];

// Using the Array constructor
let array2 = new Array(1, 2, 3, 4, 5);

// Creating an empty array
let array3 = [];

// Creating an array with a specified length
let array4 = new Array(5);

// Using Array.of() method
let array5 = Array.of(1, 2, 3, 4, 5);

// Using Array.from() method
let array6 = Array.from([1, 2, 3, 4, 5]);

// Adding elements to the end of an array using push()
array1.push(6); // array1 is now [1, 2, 3, 4, 5, 6]

// Removing the last element of an array using pop()
array1.pop(); // array1 is now [1, 2, 3, 4, 5]

// Adding elements to the beginning of an array using unshift()
array2.unshift(0); // array2 is now [0, 1, 2, 3, 4, 5]

// Removing the first element of an array using shift()
array2.shift(); // array2 is now [1, 2, 3, 4, 5]

// Finding the index of an element using indexOf()
let index = array3.indexOf(3); // index is -1 because array3 is empty

// Checking if an array includes a certain element using includes()
let hasElement = array4.includes(3); // hasElement is false

// Reversing the order of elements in an array using reverse()
array5.reverse(); // array5 is now [5, 4, 3, 2, 1]

// Creating a nested array
let nestedArray = [[1, 2], [3, 4], [5, 6]];

// Accessing elements in a nested array
let firstElement = nestedArray[0][0]; // firstElement is 1
let secondElement = nestedArray[1][1]; // secondElement is 4

// Adding a new nested array
nestedArray.push([7, 8]); // nestedArray is now [[1, 2], [3, 4], [5, 6], [7, 8]]

// Removing the last nested array
nestedArray.pop(); // nestedArray is now [[1, 2], [3, 4], [5, 6]]

// Flattening a nested array using flat()
let flattenedArray = nestedArray.flat(); // flattenedArray is now [1, 2, 3, 4, 5, 6]

// Flattening a deeply nested array using flat() with depth
let deepNestedArray = [[1, [2, 3]], [4, [5, 6]]];
let flattenedDeepArray = deepNestedArray.flat(2); // flattenedDeepArray is now [1, 2, 3, 4, 5, 6]

// Iterating over a nested array using forEach()
nestedArray.forEach(subArray => {
    subArray.forEach(element => {
        console.log(element); // logs each element in the nested arrays
    });
});


// Accessing elements in a deeply nested array
let deepElement1 = deepNestedArray[0][1][0]; // deepElement1 is 2
let deepElement2 = deepNestedArray[1][1][1]; // deepElement2 is 6

// Explanation:
// deepNestedArray[0][1][0] accesses the first sub-array [1, [2, 3]], then the second element [2, 3], and finally the first element 2.
// deepNestedArray[1][1][1] accesses the second sub-array [4, [5, 6]], then the second element [5, 6], and finally the second element 6.