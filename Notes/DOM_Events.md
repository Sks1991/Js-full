// ----------------------------------------- DOM Events ------------------------------------------ //

Event = browser mein koi action/occurrence.

Click → click event
Type → input event
Dropdown → change event
Form submit → submit event
Keyboard → keydown / keyup
Mouse hover → mouseover

// addEventListener() ---------------------------------------------
element.addEventListener("click", function() {
console.log("Button clicked");
});
Is element par click hone ka wait karo, phir ye function chalao.

// Click Event ----------------------------------------------------
index.html mein:
<button id="login">Login</button>

script.js:
const button = document.querySelector("#login");
button.addEventListener("click", function() {
console.log("Login button clicked");
});
Browser mein Login click karo.
Console:
Login button clicked

// Input Event -------------------------------------------------------
<input id="username">
const input = document.querySelector("#username");

input.addEventListener("input", function() {
console.log("Value:", input.value);
});
User admin type karega to input change hone par value milti rahegi.

// change Event -----------------------------------------------------
<input id="username">
<select id="browser">

<option>Chrome</option>
<option>Firefox</option>
<option>Edge</option>
</select>

JavaScript:
const browser = document.querySelector("#browser");

browser.addEventListener("change", function() {
console.log("Selected:", browser.value);
});
User Chrome → Firefox select kare:
Selected: Firefox

// Submit Event --------------------------------------------------------

<form id="loginForm">
    <input id="username">
    <button type="submit">Login</button>
</form>

JavaScript:
const form = document.querySelector("#loginForm");

form.addEventListener("submit", function() {
console.log("Form submitted");
});

// preventDefault() ------------------------------------------------------------
Normally form submit hone par browser page reload/navigation kar sakta hai.

Agar us default behavior ko rokna ho:
form.addEventListener("submit", function(event) {

    event.preventDefault();

    console.log("Form submission stopped");

});

event browser ka event object hai.
event.preventDefault();

→ Default browser action rok deta hai.

// Keyboard Events -------------------------------------------------------------
keydown
keyup

Example:
document.addEventListener("keydown", function(event) {
console.log(event.key);
});

Agar user Enter press kare:
Enter

Agar A press kare:
a

// Keyboard Automation -----------------------------------------------------------
Playwright mein:
await page.keyboard.press("Enter");

Other examples:
await page.keyboard.press("Escape");
await page.keyboard.press("ArrowDown");
await page.keyboard.press("Tab");

// Hover ---------------------------------------------------------------------------
await page.getByText("Menu").hover();
Ye mouse ko element ke upar le jaane jaisa action automate karta hai.
