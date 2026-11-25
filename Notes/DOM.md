// ------------------------------------------ DOM --------------------------------------------------- //
Browser jab HTML page load karta hai, to HTML ko ek tree-like structure mein convert karta hai.
Example HTML:
<html>
<body>
   <h1>Login Page</h1>
  <input id="username">
 <button id="login">Login</button>
  </body>
</html>

Browser ise roughly aise samajhta hai:

{
   Document
 └── html
      └── body
           ├── h1
           ├── input
           └── button
}

document :- document current HTML page ko represent karta hai.

// getElementById() ---------------------------------------------------------------------------
HTML:
<button id="login">Login</button>
JavaScript:
const button = document.getElementById("login");
console.log(button);
Result mein button element milega.

Text read karna
//console.log(button.textContent); output: Login

// querySelector() ---------------------------------------------------------------------------
const button = document.querySelector("#login"); # means Id
document.querySelector(".login-button"); . means class
document.querySelector("button"); tag
document.querySelector('input[type="text"]'); attributes

#login       → ID
.login       → Class
button       → Tag
input[type]  → Attribute

Input ki value kaise read karein?
HTML: <input id="username" value="admin">
JavaScript:
const username = document.querySelector("#username");
console.log(username.value); output: admin

Attribute read karna
HTML:
<button id="login" type="submit">Login</button>
JavaScript:
const button = document.querySelector("#login");
console.log(button.getAttribute("type")); output: submit

// querySelectorAll() -----------------------------------------------------------------------------
Agar multiple elements hain:
<button>Login</button>
<button>Cancel</button>
<button>Register</button>

const buttons = document.querySelectorAll("button");
console.log(buttons);

Multiple buttons milenge.
Loop:
for (const button of buttons) {
    console.log(button.textContent); output: Login, Cancel, Register
}

