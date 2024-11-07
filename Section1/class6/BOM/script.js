/*

JavaScript BOM (Browser Object Model):


The Browser Object Model (BOM) provides interactions with the browser, allowing JavaScript to control the browser
window and interact with browser features. 

Some objects/ways:

i. Window Object:
Represents the browser window. Global scope in JavaScript.
Example: window.alert("Hello World!");

ii. Navigator Object:
Provides information about the browser.
Example: console.log(navigator.userAgent); // Browser details

iii. Screen Object:
Gives information about the screen properties (like width and height).
Example: console.log(screen.width, screen.height);

iv.History Object:
Allows navigation through the browser's history.
Example: history.back(); // Go back to the previous page

v. Location Object:
Contains information about the current URL.
Example: console.log(location.href); // Current page URL
location.reload(); // Reloads the page

vi. Timing Events:
Controls timing functions like setTimeout and setInterval.
Example:
setTimeout(() => console.log("Executed after delay"), 2000)

*/


function collectBOMInfo() {
    // Window Object
    console.log("=== Window Object ===");
    console.log("Window Width: " + window.innerWidth);
    console.log("Window Height: " + window.innerHeight);
    console.log("Window Location: " + window.location.href);
    
    // Navigator Object
    console.log("\n=== Navigator Object ===");
    console.log("User Agent: " + navigator.userAgent);
    console.log("Platform: " + navigator.platform);
    console.log("Language: " + navigator.language);
    
    // Screen Object
    console.log("\n=== Screen Object ===");
    console.log("Screen Width: " + screen.width);
    console.log("Screen Height: " + screen.height);
    console.log("Color Depth: " + screen.colorDepth);
    
    // History Object
    console.log("\n=== History Object ===");
    console.log("Number of entries in history: " + history.length);
    
    // Location Object
    console.log("\n=== Location Object ===");
    console.log("Current URL: " + location.href);
    console.log("Hostname: " + location.hostname);
    console.log("Pathname: " + location.pathname);
    
    // Timing Events
    console.log("\n=== Timing Events ===");
    setTimeout(() => {
        console.log("Executed after 2 seconds delay");
    }, 2000);
    
    console.log("\nCurrent Date and Time: " + new Date().toString());
}

// Call the function to collect and display BOM information
collectBOMInfo();
