/**
 * This function demonstrates the concept of mutability and immutability in JavaScript.
 * 
 * Mutability refers to the ability of an object to be changed after it is created. 
 * In JavaScript, objects and arrays are mutable, meaning their properties or elements 
 * can be changed without creating a new object or array.
 * 
 * Immutability, on the other hand, means that once an object is created, it cannot be 
 * changed. Primitive data types such as numbers, strings, and booleans are immutable 
 * in JavaScript. Any operation that appears to modify a primitive value actually 
 * creates a new value.
 * 
 * Understanding the difference between mutable and immutable data types is crucial 
 * for writing predictable and bug-free code, especially in functional programming 
 * and state management in applications.
 * 
 * @param {Object} obj - The object to demonstrate mutability.
 * @param {Array} arr - The array to demonstrate mutability.
 * @param {number} num - The number to demonstrate immutability.
 * @param {string} str - The string to demonstrate immutability.
 */
function demonstrateMutabilityAndImmutability(obj, arr, num, str) {
    // Demonstrating mutability with an object
    console.log('Original object:', obj);
    obj.newProperty = 'new value';
    console.log('Modified object:', obj);

    // Demonstrating mutability with an array
    console.log('Original array:', arr);
    arr.push('new element');
    console.log('Modified array:', arr);

    // Demonstrating immutability with a number
    console.log('Original number:', num);
    let newNum = num + 1;
    console.log('Original number after increment:', num);
    console.log('New number:', newNum);

    // Demonstrating immutability with a string
    console.log('Original string:', str);
    let newStr = str + ' added text';
    console.log('Original string after modification:', str);
    console.log('New string:', newStr);
}

// Example usage
let myObject = { key: 'value' };
let myArray = ['element1', 'element2'];
let myNumber = 42;
let myString = 'Hello';

demonstrateMutabilityAndImmutability(myObject, myArray, myNumber, myString);





let x = [1,2,3,4,5];
let y = x;

y = [1]; // y is now a new array, x is still [1,2,3,4,5]
//This is because arrays are mutable, so when we assign y = x, both x and y point to the same array in memory.
//When we reassign y to a new array, x is not affected because it still points to the original array.


//Things get a bit more complicated when we have mutable objects inside an array or object

let n = [[1,2],[3,4],[5,6]];
let m = [...n]; // Shallow copy of n
y[0][0] = 0; // n is now [[0,2],[3,4],[5,6]], m is still [[1,2],[3,4],[5,6]]
//In this case, n and m are two separate arrays, but they contain references to the same inner arrays.
//When we modify an inner array in n, it also affects m because they share the same inner arrays.
//This is known as a shallow copy, where only the outer array is copied, but the inner arrays are still shared.

//To create a deep copy of an array or object, where both the outer and inner elements are copied, we can use a combination of spread syntax and recursion:

function deepCopy(obj) {
    if (Array.isArray(obj)) {
        return obj.map(deepCopy);
    } else if (typeof obj === 'object' && obj !== null) {
        return Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, deepCopy(value)]);
    } else {
        return obj;
    }
}
//This deepCopy function recursively copies both arrays and objects, creating a new copy of each element.
//Using this function, we can create a deep copy of an array with nested arrays:
