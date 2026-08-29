
const buttons = document.querySelectorAll("button")
document.body.addEventListener('click', () => {
    console.log("You just clicked the body")
})



document.addEventListener('click', () => {
    console.log("You just clicked the document")
})



buttons.forEach(button => {
    button.addEventListener('click', () =>{
        console.log("You just clicked a button")
    })
})

// If you click the button then the output will be something like button -> body -> document
// Event delegation is a technique in JavaScript where you add a single event listener to a parent element to manage events for its child elements. 
// Instead of adding individual event listeners to each child, the parent listens for events and determines the target element using event.target.




/**
 * This script demonstrates event delegation and the event propagation phases in JavaScript.
 * 
 * Event propagation in JavaScript occurs in two main phases:
 * 1. **Capture Phase** (also known as the "trickling phase"): 
 *    - The event starts from the root of the DOM tree and travels down to the target element.
 *    - Event listeners registered with `{ capture: true }` will be triggered during this phase.
 * 
 * 2. **Bubble Phase**:
 *    - After reaching the target element, the event bubbles back up to the root of the DOM tree.
 *    - Event listeners registered without `{ capture: true }` (default behavior) will be triggered during this phase.
 * 
 * In this script:
 * - A `click` event listener is added to the `document.body` and the `document` to demonstrate bubbling.
 * - Individual `click` event listeners are added to each button to demonstrate direct event handling.
 * - The output order when clicking a button will be:
 *   1. "You just clicked a button" (button's event listener).
 *   2. "You just clicked the body" (body's event listener during the bubble phase).
 *   3. "You just clicked the document" (document's event listener during the bubble phase).
 * 
 * Event delegation:
 * - Instead of adding event listeners to each button, you can use event delegation by adding a single event listener to a parent element (e.g., `document.body`).
 * - The parent element listens for events and determines the target element using `event.target`.
 */




