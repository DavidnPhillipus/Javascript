// DRY Principle: Avoid duplicating code by abstracting common functionality into reusable functions or modules.

// Example of DRY in action:
function calculateArea(length, width) {
    return length * width;
}

function calculatePerimeter(length, width) {
    return 2 * (length + width);
}

// Reusing the functions:
const length = 10;
const width = 5;

console.log("Area:", calculateArea(length, width)); // Output: Area: 50
console.log("Perimeter:", calculatePerimeter(length, width)); // Output: Perimeter: 30

// Scenario where breaking DRY might be acceptable:
// Sometimes, duplicating code is better if abstracting it would make the code harder to understand or maintain.
// Example: Slightly different business logic for two similar operations.

function calculateDiscountedPrice(price, discount) {
    return price - price * discount;
}

function calculateTaxedPrice(price, taxRate) {
    return price + price * taxRate;
}

// Although these functions look similar, keeping them separate improves readability and clarity.
const price = 100;
console.log("Discounted Price:", calculateDiscountedPrice(price, 0.1)); // Output: Discounted Price: 90
console.log("Taxed Price:", calculateTaxedPrice(price, 0.2)); // Output: Taxed Price: 120