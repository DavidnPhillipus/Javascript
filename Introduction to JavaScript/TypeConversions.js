// Type Conversions in JavaScript

// 1. String Conversion
// Converting a value to a string using String() function or toString() method

let num = 123;
let str = String(num); // "123"
console.log(typeof str); // "string"

let bool = true;
let strBool = bool.toString(); // "true"
console.log(typeof strBool); // "string"

// 2. Number Conversion
// Converting a value to a number using Number() function or parseInt()/parseFloat() functions

let strNum = "456";
let numFromString = Number(strNum); // 456
console.log(typeof numFromString); // "number"

let strFloat = "3.14";
let floatFromString = parseFloat(strFloat); // 3.14
console.log(typeof floatFromString); // "number"

let strInt = "789";
let intFromString = parseInt(strInt); // 789
console.log(typeof intFromString); // "number"

// 3. Boolean Conversion
// Converting a value to a boolean using Boolean() function

let zero = 0;
let boolFromZero = Boolean(zero); // false
console.log(boolFromZero); // false

let nonEmptyStr = "Hello";
let boolFromStr = Boolean(nonEmptyStr); // true
console.log(boolFromStr); // true

// 4. Automatic Type Conversion (Type Coercion)
// JavaScript automatically converts types in certain situations

let result1 = "5" - 3; // 2 (string "5" is converted to number 5)
console.log(result1); // 2

let result2 = "5" + 3; // "53" (number 3 is converted to string "3")
console.log(result2); // "53"

let result3 = "5" * "2"; // 10 (both strings are converted to numbers)
console.log(result3); // 10

let result4 = "5" / "2"; // 2.5 (both strings are converted to numbers)
console.log(result4); // 2.5

// 5. Special Cases
// Converting null and undefined

let nullValue = null;
let numFromNull = Number(nullValue); // 0
console.log(numFromNull); // 0

let undefinedValue = undefined;
let numFromUndefined = Number(undefinedValue); // NaN
console.log(numFromUndefined); // NaN

let boolFromNull = Boolean(nullValue); // false
console.log(boolFromNull); // false

let boolFromUndefined = Boolean(undefinedValue); // false
console.log(boolFromUndefined); // false

// 6. Forming Sentences with Different Data Types

let name = "Alice";
let age = 30;
let isStudent = false;

// Using template literals
let sentence1 = `${name} is ${age} years old. Student: ${isStudent}`;
console.log(sentence1); // "Alice is 30 years old. Student: false"

// Using concatenation
let sentence2 = name + " is " + age + " years old. Student: " + isStudent;
console.log(sentence2); // "Alice is 30 years old. Student: false"

// Using join method
let sentence3 = ["Name:", name, "Age:", age, "Student:", isStudent].join(" ");
console.log(sentence3); // "Name: Alice Age: 30 Student: false"

// 7. Unary Operators
// Unary operators are operators with only one operand. They are used to perform various operations like incrementing, decrementing, negating, or converting a value.

let x = 5;

// Unary plus (+)
// Converts its operand to a number
let y = +"5"; // 5
console.log(y); // 5

// Unary negation (-)
// Converts its operand to a number and negates it
let z = -"5"; // -5
console.log(z); // -5

// Increment (++)
// Increases its operand by one
x++;
console.log(x); // 6

// Decrement (--)
// Decreases its operand by one
x--;
console.log(x); // 5

// Logical NOT (!)
// Converts its operand to a boolean value and negates it
let isTrue = !false; // true
console.log(isTrue); // true