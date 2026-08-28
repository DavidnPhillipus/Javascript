// Scope in JavaScript: let vs var

// 'var' is function-scoped
function varScopeExample() {
    for (var i = 0; i < 3; i++) {
        setTimeout(function() {
            console.log('var i:', i); // 3, 3, 3
        }, 1000);
    }
}

varScopeExample();

// 'let' is block-scoped
function letScopeExample() {
    for (let j = 0; j < 3; j++) {
        setTimeout(function() {
            console.log('let j:', j); // 0, 1, 2
        }, 1000);
    }
}

letScopeExample();

// Practical example demonstrating the difference
function scopeDifference() {
    var a = 1;
    let b = 2;

    if (true) {
        var a = 3; // This 'a' is the same as the 'a' declared above
        let b = 4; // This 'b' is a new variable, scoped to this block
        console.log('Inside block - var a:', a); // 3
        console.log('Inside block - let b:', b); // 4
    }

    console.log('Outside block - var a:', a); // 3 (var is function-scoped, so 'a' is overwritten)
    console.log('Outside block - let b:', b); // 2 (let is block-scoped, so 'b' remains unchanged)
}

scopeDifference();

// Output:
// var i: 3
// var i: 3
// var i: 3
// let j: 0
// let j: 1
// let j: 2

// Inside block - var a: 3
// Inside block - let b: 4
// Outside block - var a: 3
// Outside block - let b: 2
// In the first example, the 'var' variable 'i' is function-scoped, so it is shared across all iterations of the loop.
// In the second example, the 'let' variable 'j' is block-scoped, so a new 'j' is created for each iteration of the loop.
// In the third example, the 'var' variable 'a' is overwritten within the block, affecting the value outside the block.
// In contrast, the 'let' variable 'b' is block-scoped, so it maintains its value outside the block.
// When to use 'var' vs 'let':
// - Use 'var' when you need function-scoped variables or when you want to reassign variables within a block.
// - Use 'let' when you need block-scoped variables that are not reassigned.
// - Avoid using 'var' in modern JavaScript code, as 'let' and 'const' provide more predictable scoping behavior.
// - Use 'const' for variables that should not be reassigned, as it provides additional guarantees about immutability.
// - Use 'let' for variables that may be reassigned within a block or loop.
// - Use 'var' only in legacy code or when you specifically need function-scoped variables.
// - When in doubt, prefer 'const' for constants and 'let' for variables that may change.
// - Avoid using 'var' unless you have a specific reason to use it.
// - Use 'let' and 'const' for block-scoped variables in modern JavaScript code.
// - Use 'let' for variables that may be reassigned, and 'const' for variables that should not be reassigned.
