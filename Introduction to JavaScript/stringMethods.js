// String Methods in JavaScript

// 1. charAt(index)
// Returns the character at the specified index in a string.
let str = "Hello, World!";
console.log(str.charAt(0)); // Output: "H"

// 2. charCodeAt(index)
// Returns the Unicode of the character at the specified index in a string.
console.log(str.charCodeAt(0)); // Output: 72

// 3. concat(string1, string2, ..., stringN)
// Joins two or more strings and returns a new concatenated string.
let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(", ", str2, "!")); // Output: "Hello, World!"

// 4. includes(searchString, position)
// Determines whether a string contains the characters of a specified string.
console.log(str.includes("World")); // Output: true

// 5. endsWith(searchString, length)
// Determines whether a string ends with the characters of a specified string.
console.log(str.endsWith("!")); // Output: true

// 6. indexOf(searchValue, fromIndex)
// Returns the index of the first occurrence of a specified value in a string.
console.log(str.indexOf("o")); // Output: 4

// 7. lastIndexOf(searchValue, fromIndex)
// Returns the index of the last occurrence of a specified value in a string.
console.log(str.lastIndexOf("o")); // Output: 8

// 8. match(regexp)
// Retrieves the result of matching a string against a regular expression.
console.log(str.match(/o/g)); // Output: ["o", "o"]

// 9. repeat(count)
// Returns a new string with a specified number of copies of the string it was called on.
console.log(str.repeat(2)); // Output: "Hello, World!Hello, World!"

// 10. replace(searchValue, newValue)
// Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.
console.log(str.replace("World", "Universe")); // Output: "Hello, Universe!"

// 11. search(regexp)
// Searches a string for a specified value, or regular expression, and returns the position of the match.
console.log(str.search("World")); // Output: 7

// 12. slice(beginIndex, endIndex)
// Extracts a part of a string and returns a new string.
console.log(str.slice(0, 5)); // Output: "Hello"

// 13. split(separator, limit)
// Splits a string into an array of substrings.
console.log(str.split(", ")); // Output: ["Hello", "World!"]

// 14. startsWith(searchString, position)
// Determines whether a string begins with the characters of a specified string.
console.log(str.startsWith("Hello")); // Output: true

// 15. substring(indexStart, indexEnd)
// Returns the part of the string between the start and end indexes, or to the end of the string.
console.log(str.substring(0, 5)); // Output: "Hello"

// 16. toLowerCase()
// Converts a string to lowercase letters.
console.log(str.toLowerCase()); // Output: "hello, world!"

// 17. toUpperCase()
// Converts a string to uppercase letters.
console.log(str.toUpperCase()); // Output: "HELLO, WORLD!"

// 18. trim()
// Removes whitespace from both ends of a string.
let strWithSpaces = "   Hello, World!   ";
console.log(strWithSpaces.trim()); // Output: "Hello, World!"

// 19. trimStart()
// Removes whitespace from the beginning of a string.
console.log(strWithSpaces.trimStart()); // Output: "Hello, World!   "

// 20. trimEnd()
// Removes whitespace from the end of a string.
console.log(strWithSpaces.trimEnd()); // Output: "   Hello, World!"