/**
 * Demonstrates the behavior of JavaScript's Event Loop with synchronous code, 
 * promises, and `setTimeout` callbacks.
 *
 * The Event Loop is a mechanism in JavaScript that handles the execution of 
 * different types of tasks (e.g., synchronous code, microtasks, and macrotasks) 
 * in a non-blocking manner. Here's how it works:
 *
 * 1. **Synchronous Code**: 
 *    - Executed immediately in the main thread, in the order it appears.
 *    - Examples: `console.log`, variable declarations, and function calls.
 *
 * 2. **Promises (Microtasks)**:
 *    - Promises and their `.then` or `.catch` callbacks are added to the 
 *      Microtask Queue.
 *    - Microtasks are executed after the current synchronous code completes 
 *      but before any macrotasks (e.g., `setTimeout`) are processed.
 *
 * 3. **setTimeout (Macrotasks)**:
 *    - `setTimeout` callbacks are added to the Task Queue (Macrotask Queue) 
 *      after the specified delay.
 *    - Macrotasks are executed only after the Microtask Queue is empty.
 *
 * 4. **Execution Order**:
 *    - Synchronous code runs first.
 *    - Microtasks (e.g., Promises) are executed next.
 *    - Macrotasks (e.g., `setTimeout`) are executed last, in the order they 
 *      were added to the queue.
 *
 * Example:
 * - In `test()`, synchronous logs (`"Javascript"`, `"React"`, `"Backend"`) 
 *   are executed first. Then, the `setTimeout` callbacks are processed, with 
 *   `"Figma"` (0ms delay) being logged before `"Native React"` (10ms delay).
 * - In `testTwo()`, the Promise's `.then` callback logs `"Artificial 
 *   Intelligence"` before the `setTimeout` callbacks, as Microtasks take 
 *   precedence over Macrotasks.
 */
function test(){
    console.log("Javascript")
    console.log("React")
    setTimeout(() => console.log("Native React"), 10)
    setTimeout(() => console.log("Figma"), 0)
    console.log("Backend")

}
//Backend gets logged out before Figma because of them threads
//Backend is in the main thread and figma is in the Task Queeu  
//But promises act a bit different from this concept


function testTwo(){
    console.log("Javascript")
    console.log("React")
    new Promise((res , reject) => res("Artificial Intelligance")).then(
        (message) =>
            console.log(message)
    )
    setTimeout(() => console.log("Native React"), 10)
    setTimeout(() => console.log("Figma"), 0)
    console.log("Backend")

}


