// --------------------------------------------- Modules -------------------------------------------------- //
// Module = JavaScript ki ek file jiska code hum doosri file mein reuse kar sakte hain.

// Maan lo: login.js code ye hai.
// function login(username, password) {
//   console.log(username, password);
// }
// Aur test.js mein hume login() use karna hai to login.js se function export karenge aur test.js mein import.

// Export aur Import -----------------------------------------------------------------------------
// export, import

// Named Export
// Suppose login.js:
// export function login(username, password) {
//   console.log("Login:", username);
//   console.log("Password:", password);
// }
// Ab doosri file: test.js
// import { login } from "./login.js";
// login("admin", "admin123");

// Multiple functions export karna ----------------------------------------------------------------------
// utils.js
// export function login() {
//   console.log("Login");
// }
// export function logout() {
//   console.log("Logout");
// }
// export function searchProduct() {
//   console.log("Search Product");
// }
// test.js:
// import { login, logout, searchProduct } from "./utils.js";
// login();
// searchProduct();
// logout();

// Default Export -----------------------------------------------------------------------------------------
// login.js
// export default function login(username, password) {
//   console.log("Login:", username);
// }
// Import
// import login from "./login.js";
// login("admin", "admin123");
// Named export mein: import { login }
// Default export mein: import login

// Named Export                               Default Export
// ----------------------------------	      -----------------------------------
// export function login()	                  export default function login()
// import { login } ...	                      import login ...
// {} required	                              {} nahi
// Multiple named exports possible	          One default export per module

// Variables bhi export kar sakte hain ------------------------------------------------------------------------
// config.js
// export const baseUrl = "https://example.com";
// export const timeout = 30000;
// Doosri file
// import { baseUrl, timeout } from "./config.js";
// console.log(baseUrl);
// console.log(timeout);

// Test Data ko separate file mein rakhna ----------------------------------------------------------------------
// testData.js
// export const loginData = {
//     username: "admin",
//     password: "admin123"
// };
// Test file:
// import { loginData } from "./testData.js";
// console.log(loginData.username);
// console.log(loginData.password);

// Functions + Data dono export ---------------------------------------------------------------------------------
// export const baseUrl = "https://example.com";
// export function createUser(username) {
//     console.log("Creating user:", username);
// }
// Import:
// import { baseUrl, createUser } from "./utils.js";
// console.log(baseUrl);
// createUser("Sudhir");

// Modules ka actual automation benefit --------------------------------------------------------------------------
// login.js
// export async function login(page, username, password) {
//   await page.locator("#username").fill(username);
//   await page.locator("#password").fill(password);
//   await page.locator("#login").click();
// }
// Test
// import { login } from "./login.js";
// await login(page, "admin", "admin123");

// ./ ka kya meaning hai?
// import { login } from "./login.js";
// import { login } from "../utils/login.js"; (.. means:one folder up.)

// Node.js mein module kaise enable hota hai?
// import ... , export ...

// CommonJS kya hai? -> require()
// const login = require("./login");
// module.exports = login;

// Automation project mein modules ka structure
/* 

automation-project/
│
├── tests/
│   ├── login.spec.js
│   └── search.spec.js
│
├── pages/
│   ├── LoginPage.js
│   └── HomePage.js
│
├── utils/
│   ├── testData.js
│   └── helpers.js
│
└── config/
    └── config.js 

*/

// Module
//   ↓
// JavaScript file containing reusable code

// export
//   ↓
// code ko doosri file ke liye available karta hai

// import
//   ↓
// doosri file ka exported code use karta hai
