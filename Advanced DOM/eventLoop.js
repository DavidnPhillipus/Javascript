//Event loop



function test() {
    console.log("h1")
    console.log("h2")
    setTimeout(() => {
        console.log("h3")
    }, 0)

    new Promise((resolve, reject) => (resolve("h4"))).then((res) => console.log(res))
    setTmeout(() => {
        console.log("h5")
    }, 10)

}

test()


//Whats happening and why

// The event loop is a fundamental concept in JavaScript that allows for asynchronous programming. It manages the execution of multiple pieces of code, including handling events, executing callbacks, and managing promises.

// In the provided code snippet, the `test` function demonstrates how the event loop works with synchronous and asynchronous code:
// 1. The function starts by logging "h1" and "h2" to the console synchronously.
// 2. A `setTimeout` with a delay of 0 milliseconds is scheduled, which will log "h3" after the current call stack is cleared and the event loop processes the message queue.   
// 3. A new Promise is created and resolved immediately with the value "h4". The `.then()` method is called, which schedules the callback to log "h4" to the console after the current call stack is cleared and the microtask queue is processed.
// 4. Another `setTimeout` with a delay of 10 milliseconds is scheduled, which will log "h5" after the current call stack is cleared and the event loop processes the message queue.