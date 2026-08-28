/**
 * This script demonstrates various console methods in JavaScript.
 * 
 * console.log() - Outputs a message to the console. Typically used for general output of logging information.
 * console.warn() - Outputs a warning message to the console. Typically used to indicate potential issues or cautionary information.
 * console.error() - Outputs an error message to the console. Typically used to indicate serious issues or errors that need attention.
 * console.info() - Outputs an informational message to the console. Typically used for general information that is not critical.
 * console.debug() - Outputs a debug message to the console. Typically used for debugging purposes. Note that this may not be visible in all browsers unless the console is configured to show debug messages.
 * console.trace() - Outputs a stack trace to the console. Typically used to trace the execution path and identify where a particular function was called.
 */
console.log("Hello, world!");
console.warn("This is a warning message.");
console.error("This is an error message.");
console.info("This is an info message.");
console.debug("This is a debug message.");
console.trace("This is a trace message.");




// Accessing DOM elements
const elementById = document.getElementById('myId');
const elementsByClassName = document.getElementsByClassName('myClass');
const elementsByTagName = document.getElementsByTagName('div');
const elementByQuerySelector = document.querySelector('.myClass');
const elementsByQuerySelectorAll = document.querySelectorAll('.myClass');

// Changing DOM elements
elementById.textContent = 'New text content';
elementById.innerHTML = '<span>New HTML content</span>';
elementById.style.color = 'blue';
elementById.classList.add('newClass');
elementById.classList.remove('oldClass');
elementById.setAttribute('data-custom', 'customValue');
elementById.removeAttribute('data-custom');

// Creating and appending new elements
const newElement = document.createElement('div');
newElement.textContent = 'I am a new element';
document.body.appendChild(newElement);

// Removing elements
const elementToRemove = document.getElementById('removeMe');
elementToRemove.parentNode.removeChild(elementToRemove);

// Event handling
elementById.addEventListener('click', function() {
    console.log('Element clicked!');
});

