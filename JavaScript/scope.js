// ---------------------------------------- Scope ------------------------------------------- //
// Scope decide karta hai ki koi variable program ke kis area mein accessible hai.

let username = "admin";
console.log(username); // output: admin

// Yahan username accessible hai.
// Lekin har variable ko har jagah access nahi kar sakte.

// ---------------------------------------- Global Scope ------------------------------------------- //
// Jo variable kisi function ya block ke bahar declare hota hai, wo generally global/module-level scope mein hota hai.

let username1 = "admin";
function testLogin() {
  console.log(username1);
}
testLogin(); // output: admin
// Kyuki username function ke bahar bana hai aur function usse access kar sakta hai.

// ---------------------------------------- Local Scope ------------------------------------------- //
// Function ke andar banaya variable generally us function ke andar hi accessible hota hai.

function loginTest() {
  let username = "admin";
  console.log(username); // output: admin
}
loginTest();

// ---------------------------------------- Block Scope ------------------------------------------- //
// Block generally { } ke andar ka area hota hai.

if (true) {
  let username = "admin";
  console.log(username); // output: admin
}
// let aur const blocked scope hota hai.

if (true) {
  const browser = "Chrome";
  console.log(browser); // output: Chrome.
}

// if (true) {
//   const browser = "Chrome";
// }
// console.log(browser); // output: Error  (Kyuki let aur const blocked scope hota hai.)

if (true) {
  var browser = "Chrome";
}
console.log(browser); // output: Chrome (Kyuki var block scoped nahi hota.)

// ---------------------------------------- let vs const ------------------------------------------- //
// const → default choice
// let → jab value change karni ho
// var → generally avoid

// let
let browser1 = "Chrome";
browser1 = "Firefox";
console.log(browser1); // output: Firefox
// Value reassign(change) kar sakte hai

// const
// const browser2 = "Chrome";
// browser2 = "Firefox";
// console.log(browser2); // output: Error
// Value reassign(change) nahi kar sakte

// ------------------------------- Function ke andar Block Scope ---------------------------------- //

function loginTest() {
  let username = "admin";
  if (username) {
    let message = "Username exists";
    console.log(message); // output: Username exists
  }
  console.log(username); // output: admin
}
loginTest();
// console.log(message) :- if block ke bahar nahi chalega.

// ------------------------------- Scope Chain ---------------------------------- //
const company = "ABC";

function test() {
  const browser = "Chrome";

  if (true) {
    const testName = "Login Test";

    console.log(testName); // output: Login Test
    console.log(browser); // output: Chrome
    console.log(company); // output: ABC
  }
}
test();
// testName → current block mein mila
// browser  → function scope mein mila
// company  → outer scope mein mila

// ---------------------------------------- Scope ka practical benefit ----------------------------------------- //
function loginTest() {
  const username = "admin";

  console.log(username); // output: admin
}

function profileTest() {
  const username = "user1";

  console.log(username); // output: user1
}
loginTest();
profileTest();

// Keyword	    Scope
// let	        Block
// const	    Block
// var	        Function
