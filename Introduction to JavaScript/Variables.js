/*
 * Variables in JavaScript
 *
 * 1. Declaration:
 *    - Use `var`, `let`, or `const` to declare variables.
 *    - `var` is function-scoped or globally-scoped.
 *    - `let` and `const` are block-scoped.
 *
 * 2. Initialization:
 *    - Variables can be initialized with a value at the time of declaration.
 *    - If not initialized, `var` and `let` variables are `undefined` by default.
 *    - `const` must be initialized at the time of declaration.
 *
 * 3. Reassignment:
 *    - `var` and `let` variables can be reassigned.
 *    - `const` variables cannot be reassigned.
 *
 * 4. Hoisting:
 *    - `var` declarations are hoisted to the top of their scope and initialized with `undefined`.
 *    - `let` and `const` declarations are hoisted but not initialized.
 *
 * 5. Naming Conventions:
 *    - Variable names can include letters, digits, underscores, and dollar signs.
 *    - Variable names must begin with a letter, underscore, or dollar sign.
 *    - Variable names are case-sensitive.
 *    - Reserved words cannot be used as variable names.
 *
 * Examples:
 */

// Using var
var name = "Alice";
console.log(name); // Output: Alice

// Using let
let age = 25;
console.log(age); // Output: 25

// Using const
const pi = 3.14;
console.log(pi); // Output: 3.14

// Reassigning variables
name = "Bob";
console.log(name); // Output: Bob

age = 30;
console.log(age); // Output: 30

// Trying to reassign a const variable will cause an error
// pi = 3.14159; // Uncaught TypeError: Assignment to constant variable.

// Hoisting example
console.log(hoistedVar); // Output: undefined
var hoistedVar = "I am hoisted";

// let and const are not initialized before declaration
// console.log(hoistedLet); // Uncaught ReferenceError: Cannot access 'hoistedLet' before initialization
let hoistedLet = "I am not hoisted";

// console.log(hoistedConst); // Uncaught ReferenceError: Cannot access 'hoistedConst' before initialization
const hoistedConst = "I am not hoisted either";
