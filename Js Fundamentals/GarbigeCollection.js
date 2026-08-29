let a = 1;
console.log(a)


let b = 4;
console.log(a)
let zzz = 1000;

// Imagine we have code like this millions and millions of them 
// What happens is after the code has been run Garbige collection take it out of the memory because It has no other use anymore 



console.log("I love programming")

//Garbage collection is a process by which a programming language automatically manages memory 
// allocation and deallocation. It helps to free up memory that is no longer in use, preventing
//  memory leaks and improving performance. In JavaScript, garbage collection is handled by the 
// JavaScript engine, which periodically checks for objects that are no longer reachable and removes them from memory.


// In JavaScript, garbage collection is typically implemented using a technique called "mark-and-sweep."
// The mark-and-sweep algorithm works by first marking all the objects that are still reachable from the root (e.g., global variables, function scopes, etc.).
// Then, it sweeps through the memory and removes any objects that were not marked as reachable. This process helps to reclaim memory that is no longer needed by the program.

// 2 Exampmles of code that can lead to GC and one that wont require GC:

// Example 1: Code that can lead to garbage collection

let obj1 = { name: "Alice" };
obj1 = null; // This will make the object eligible for garbage collection

// Example 2: 

function createObject() {
    let obj2 = { name: "Bob" };
    return obj2;
}