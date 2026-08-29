const form = document.getElementById("form");
const input = document.getElementById("input");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    if(input.ariaValueMax.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }
    console.log(document.cookie);
    
    saveUser(input.value);

})


function saveUser(user) {
    fetch(`http://localhost:3000/save-users-username${message}`)
        .then(res => res.json())
        .then(data => alert(data.message))
}
























/**
 * ────────────────────────────────────────────────────────────────────────────────
 *                                   COOKIE 101
 * ────────────────────────────────────────────────────────────────────────────────
 *
 * Cookies are small pieces of data (key=value pairs) that a web server asks
 * the browser to store, and which the browser then sends back automatically
 * with subsequent HTTP requests to matching domains and paths.
 *
 * They power sessions (login tokens), preferences, analytics tracking, CSRF
 * defenses, A/B tests, and more—but they can also be misused if set insecurely.
 *
 * This snippet provides utility functions to set, read, and delete cookies,
 * with **very detailed** comments on every line.
 */

/**
 * setCookie
 * ----------
 * Stores a cookie in the browser with all the common security & scope attributes.
 *
 * @param {string} name     - The cookie’s key (e.g. "SESSIONID", "theme").
 * @param {string} value    - The cookie’s value. Avoid storing sensitive data in plain text.
 * @param {Object} options  - Additional settings to control scope, lifetime, security.
 *   • path      (string)  → URL path(s) under which the cookie is sent (default: "/")
 *   • domain    (string)  → Domain(s) to which the cookie is scoped (default: current domain)
 *   • expires   (Date)    → UTC timestamp when the cookie expires (overrides maxAge)
 *   • maxAge    (number)  → Lifetime in seconds (overrides expires if both set)
 *   • secure    (boolean) → If true, cookie only sent over HTTPS (default: false)
 *   • httpOnly  (boolean) → If true, inaccessible to JavaScript’s document.cookie (default: false)
 *   • sameSite  (string)  → CSRF protection: "Strict", "Lax", or "None"
 */
function setCookie(name, value, options = {}) {
    // 1. Base pair: always URL‑encode name and value to escape special chars.
    let cookieStr = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    // 2. Scope: Path
    //    • path=/    → send cookie for EVERY URL under this domain
    //    • path=/blog → only for URLs starting with /blog
    //    Default if omitted: current path of the page.
    if (options.path) {
      cookieStr += "; path=" + options.path;
    } else {
      cookieStr += "; path=/";
    }
  
    //
  