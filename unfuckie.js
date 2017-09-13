/***************************************************************
*
* UNFUCKIE
* ----------------
*
* Has your boss ever said something along the
* line of: "Our client said it doesn't work on IE"
* Yeah we have all been there.
* This will help you out. Simply include unfuckie.js
* And have this very safisticated script deal with IE
* for you.
*
* Author: Kieran Heron < kieran@fhulpelt.com >
* License: MIT
* GitHub: https://github.com/kshux
*/

let userAgent = navigator.userAgent;
if (userAgent.includes("MSIE")) {
  alert('Sorry, Something went wrong... Please try again.');
  window.location.replace("https://www.google.com/chrome/index.html");
}
