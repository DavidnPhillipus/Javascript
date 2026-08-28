//the map function
const arr = [1, 2, 3, 4, 5];
const newArr = arr.map((x) => x ** 2);
// console.log(newArr); // Output: [1, 4, 9, 16, 25]

//Lets write this map function on our own

function map(arr, func) {
    for(const value of arr) {
        const newValue = func(value);
        newArr.push(newValue);
    }
    return newArr;
}

// const newArr2 = map(arr, (x) => x ** 2);
// console.log(newArr2); // Output: [1, 4, 9, 16, 25]


//the filter function
//The filter function is used to filter out elements from an array based on a condition.
//if they pass the filter

const arr2 = [1, 2, 3, 4, 5];
const newArr2 = arr2.filter((x) => x % 2 === 0);
// console.log(newArr2); // Output: [2, 4]

//Lets write this filter function on our own

function filter(arr, func) {
    const newArr = [];
    for(const value of arr) {
        if(func(value)) {
            newArr.push(value);
        }
    }
    return newArr;
}
// const newArr3 = filter(arr2, (x) => x % 2 === 0);
// console.log(newArr3); // Output: [2, 4]


//the reduce function
//The reduce function is used to reduce an array to a single value based on a reducer function.
//The reducer function takes two arguments: the accumulator and the current value.
//It returns the new value of the accumulator after processing the current value.


const arr3 = [1, 2, 3, 4, 5];
const sum = arr3.reduce((prev, curent) => prev + curent);
// console.log(sum); // Output: 15

//Lets write this reduce function on our own

function reduce(arr, func) {
    let currentResult = 0;
    for(const num of arr) {
        currentResult = func(currentResult, num);
    }
    return currentResult;
}

const sum2 = reduce(arr3, (prev, next) => prev + next);

// console.log(sum2); // Output: 15

//The map, filter, and reduce functions are commonly used in functional programming to process arrays in a declarative and concise manner.
//These functions can be implemented using traditional loops, but using higher-order functions like map, filter, and reduce can make the code more readable and maintainable.
//It is important to understand how these functions work and how to use them effectively in different scenarios.
//The map function transforms each element of an array using a mapping function and returns a new array.
//The filter function selects elements from an array based on a filtering function and returns a new array.
//The reduce function reduces an array to a single value using a reducer function.
//These functions can be combined and chained together to perform complex data processing tasks on arrays.
//By using these higher-order functions, you can write more expressive and concise code that is easier to understand and maintain.
//It is important to practice using these functions in different scenarios to become proficient in functional programming with JavaScript.
//The map, filter, and reduce functions are powerful tools for processing arrays in JavaScript. By using these functions effectively, you can write more concise and expressive code that is easier to understand and maintain.
