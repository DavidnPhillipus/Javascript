const func = ( x , y) => {
    return x + y;
}

const func2 = ( x , y) => x + y;
// console.log(func(1,2));
// console.log(func2(1,2));
// Traditional function
function add(x, y) {
    return x + y;
}

// Arrow function with block body
const func4 = (x, y) => {
    return x + y;
}

// Arrow function with concise body
const func6 = (x, y) => x + y;

// Example usage
console.log(add(1, 2)); // Output: 3
console.log(func(1, 2)); // Output: 3
console.log(func2(1, 2)); // Output: 3

// More complex examples:

// Traditional function with 'this' context
function Person(name) {
    this.name = name;
    this.sayName = function() {
        console.log('My name is ' + this.name);
    };
}

const person1 = new Person('Alice');
person1.sayName(); // Output: My name is Alice

// Arrow function with 'this' context
function PersonArrow(name) {
    this.name = name;
    this.sayName = () => {
        console.log('My name is ' + this.name);
    };
}

const person2 = new PersonArrow('Bob');
person2.sayName(); // Output: My name is Bob

// Differences:
// 1. Syntax: Arrow functions are more concise and have a shorter syntax compared to traditional functions.
// 2. 'this' context: 
//    - Traditional functions have their own 'this' context, which is determined by how the function is called.
//    - Arrow functions do not have their own 'this' context; they inherit 'this' from the parent scope at the time they are defined.
// 3. Usage: 
//    - Traditional functions are often used for methods in objects and constructors.
//    - Arrow functions are commonly used for short, non-method functions, and for functions where the 'this' context needs to be inherited from the parent scope.
