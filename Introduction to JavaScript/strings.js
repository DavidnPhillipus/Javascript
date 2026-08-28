// Escape characters
let newLineExample = "This is the first line.\nThis is the second line.";
let tabExample = "Column1\tColumn2\tColumn3";
let backslashExample = "This is a backslash: \\";
let singleQuoteExample = 'It\'s a beautiful day!';
let doubleQuoteExample = "He said, \"Hello!\"";
let ignoreSingleQuoteExample = 'She said, \'It\'s a great day!\'';
let ignoreDoubleQuoteExample = "He said, \"It's a great day!\"";
let backslashInStringExample = "This is how you use a backslash: \\";

console.log(newLineExample);
console.log(tabExample);
console.log(backslashExample);
console.log(singleQuoteExample);
console.log(doubleQuoteExample);
console.log(ignoreSingleQuoteExample);
console.log(ignoreDoubleQuoteExample);
console.log(backslashInStringExample);

// Template literals
let name = "John";
let greeting = `Hello, ${name}! Welcome to JavaScript.`;
let multiLineString = `This is a string
that spans multiple
lines.`;

console.log(greeting);
console.log(multiLineString);

// String concatenation
let part1 = "Hello, ";
let part2 = "world!";
let concatenatedString = part1 + part2;

console.log(concatenatedString);

// String methods
let sampleString = "JavaScript";
console.log(sampleString.length); // Output: 10
console.log(sampleString.toUpperCase()); // Output: JAVASCRIPT
console.log(sampleString.toLowerCase()); // Output: javascript
console.log(sampleString.includes("Script")); // Output: true
console.log(sampleString.indexOf("Script")); // Output: 4
console.log(sampleString.substring(0, 4)); // Output: Java