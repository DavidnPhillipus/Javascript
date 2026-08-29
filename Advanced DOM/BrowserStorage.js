// Cookies
// - Data is sent to the server with every HTTP request.
// - Can have an expiration date.
// - Limited to around 4KB of data.
// - Requires manual encoding/decoding for complex data types.
// - manualy expires
// - Available in both the server and the client
// - Hard

document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2026 23:59:59 GMT; path=/";
console.log("Cookies:", document.cookie);
//Delete cookie
//Set the username to blank and then the xpiring date to a time in the past
document.cookie = "username=; expires=Fri, 31 Dec 2023 23:59:59 GMT;";


// Local Storage
// - Data is stored in the browser and persists even after the browser is closed.
// - No expiration date.
// - Can store up to 5-10MB of data depending on the browser.
// - Only accessible via JavaScript, not sent to the server.
// - Never expires
// - Only available on the client side
// - Easy


localStorage.setItem("username", "JohnDoe");
console.log("Local Storage:", localStorage.getItem("username"));
localStorage.setItem("username" , "David")

// Session Storage
// - Data is stored in the browser but only for the duration of the page session.
// - Data is cleared when the tab or browser is closed.
// - Can store up to 5-10MB of data depending on the browser.
// - Only accessible via JavaScript, not sent to the server.
// - Expires when you cole the tab
// - Often times shopping cards care often stored in this 
// - Available in the client computer only
// - Easy


sessionStorage.setItem("username", "JohnDoe");
console.log("Session Storage:", sessionStorage.getItem("username"));