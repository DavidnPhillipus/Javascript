// Logical Operators in JavaScript

// 1. Logical AND (&&)
// The logical AND operator (&&) returns true if both operands are true, otherwise it returns false.
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false

// Example:
let a = 5;
let b = 10;
console.log(a > 0 && b > 0); // true, because both conditions are true

// 2. Logical OR (||)
// The logical OR operator (||) returns true if at least one of the operands is true, otherwise it returns false.
console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false

// Example:
let c = -5;
let d = 10;
console.log(c > 0 || d > 0); // true, because one of the conditions is true

// 3. Logical NOT (!)
// The logical NOT operator (!) inverts the value of its operand. If the operand is true, it returns false, and if the operand is false, it returns true.
console.log(!true);  // false
console.log(!false); // true

// Example:
let e = 5;
console.log(!(e > 0)); // false, because e > 0 is true, and !true is false

// 4. Logical Nullish Coalescing (??)
// The nullish coalescing operator (??) returns the right-hand side operand when the left-hand side operand is null or undefined, otherwise it returns the left-hand side operand.
let f = null;
let g = "default";
console.log(f ?? g); // "default", because f is null

let h = 0;
console.log(h ?? g); // 0, because h is not null or undefined

// 5. Short-circuit evaluation
// Logical operators in JavaScript use short-circuit evaluation, which means they stop evaluating as soon as the result is determined.
let i = false && (console.log('This will not be logged') || true); // false
let j = true || (console.log('This will not be logged') && false); // true

// Summary:
// - && returns true if both operands are true
// - || returns true if at least one operand is true
// - ! inverts the boolean value of its operand
// - ?? returns the right-hand side operand if the left-hand side operand is null or undefined
// - Logical operators use short-circuit evaluation