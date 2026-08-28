// Equality (==)
console.log('10' == 10); // true (string is coerced to number)
console.log(true == 1); // true (true is coerced to 1)
console.log(false == 0); // true (false is coerced to 0)
console.log('' == 0); // true (empty string is coerced to 0)
console.log(' \t\r\n' == 0); // true (whitespace string is coerced to 0)

// Inequality (!=)
console.log('10' != 10); // false (string is coerced to number)
console.log(true != 1); // false (true is coerced to 1)
console.log(false != 0); // false (false is coerced to 0)
console.log('' != 0); // false (empty string is coerced to 0)
console.log(' \t\r\n' != 0); // false (whitespace string is coerced to 0)

// Strict Equality (===)
console.log('10' === 10); // false (different types)
console.log(true === 1); // false (different types)
console.log(false === 0); // false (different types)
console.log('' === 0); // false (different types)
console.log(' \t\r\n' === 0); // false (different types)

// Comparing numbers to strings
console.log('5' > '10'); // true (lexicographical comparison: '5' > '1')
console.log('5' < '10'); // false (lexicographical comparison: '5' < '1')
console.log('5' == 5); // true (string '5' is coerced to number 5)
console.log('5' === 5); // false (different types)
console.log('5' != 5); // false (string '5' is coerced to number 5)
console.log('5' !== 5); // true (different types)

// Explanation:
// When comparing a string to a number using non-strict equality (==) or inequality (!=), JavaScript coerces the string to a number.
// For example, '5' == 5 is true because '5' is coerced to the number 5.
// When using strict equality (===) or strict inequality (!==), no type coercion occurs, so '5' === 5 is false because they are of different types.
// When comparing strings lexicographically, JavaScript compares the Unicode values of the characters. For example, '5' > '10' is true because '5' has a higher Unicode value than '1'.

// Strict Inequality (!==)
console.log('10' !== 10); // true (different types)
console.log(true !== 1); // true (different types)
console.log(false !== 0); // true (different types)
console.log('' !== 0); // true (different types)
console.log(' \t\r\n' !== 0); // true (different types)

// Greater than (>)
console.log(10 > 5); // true
console.log('10' > 5); // true (string is coerced to number)
console.log('apple' > 'banana'); // false (lexicographical comparison)
console.log([1] > 0); // true (array is coerced to number)
console.log([1, 2] > '1'); // true (array is coerced to string, then to number)

// Greater than or equal (>=)
console.log(10 >= 10); // true
console.log('10' >= 5); // true (string is coerced to number)
console.log('apple' >= 'banana'); // false (lexicographical comparison)
console.log([1] >= 0); // true (array is coerced to number)
console.log([1, 2] >= '1'); // true (array is coerced to string, then to number)

// Less than (<)
console.log(5 < 10); // true
console.log('5' < 10); // true (string is coerced to number)
console.log('apple' < 'banana'); // true (lexicographical comparison)
console.log([0] < 1); // true (array is coerced to number)
console.log([1, 2] < '3'); // true (array is coerced to string, then to number)

// Less than or equal (<=)
console.log(5 <= 10); // true
console.log('5' <= 10); // true (string is coerced to number)
console.log('apple' <= 'banana'); // true (lexicographical comparison)
console.log([0] <= 1); // true (array is coerced to number)
console.log([1, 2] <= '3'); // true (array is coerced to string, then to number)
