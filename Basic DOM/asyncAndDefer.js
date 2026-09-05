//The main difference between async and defer is when the JavaScript actually
//  executes when the browser is loading an HTML page.

// Both allow the browser to download the JS file without blocking HTML parsing,
//  but they execute differently

<script src="app.js"></script>

//without async or defer,

/*
HTML parsing
     ↓
Find app.js
     ↓
STOP parsing HTML
     ↓
Download app.js
     ↓
Execute app.js
     ↓
Continue parsing HTML

*/


//with async,

//The browser downloads the script while continuing to parse HTML.
// But as soon as the download finishes, the script executes immediately.

/*
HTML parsing ────────────────────────→
             ↓
          Download JS
             ↓
             ↓ finishes
             ↓
        STOP HTML parsing
             ↓
        Execute JS
             ↓
        Continue parsing HTML
*/


//important to note that async scripts are not guaranteed to execute in the order they are defined in the HTML. They will execute as soon as they finish downloading, which can lead to race conditions if one script depends on another.
//for example

{/* <script async src="one.js"></script>
<script async src="two.js"></script> */}


//Even though one.js appears first, two.js could execute first if it downloads faster.

// Good for

// Scripts that are independent of the page or other scripts:

// Analytics
// Ads
// Tracking scripts



//with defer,

//The browser downloads the script while continuing to parse HTML.
// But it will wait to execute the script until after the HTML parsing is complete.

/*
HTML parsing ───────────────────────→ DONE
             ↓
        Download JS
             ↓
             ↓
        HTML finishes
             ↓
        Execute JS

*/

//important to note that defer scripts are guaranteed to execute in the order they are defined in the HTML. This makes them suitable for scripts that depend on each other or on the DOM being fully parsed.