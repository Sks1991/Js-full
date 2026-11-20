// ----------------------------- Higher-Order Function (HOF) -------------------------------- //

// Aisa function jo kisi function ko argument ke roop mein accept kare ya function return kare, use Higher-Order Function kehte hain.
// HOF
// │
// ├── Function ko argument mein leta hai
// │
// └── Function return karta hai

function execute(callback) {
  callback();
}
function test() {
  console.log("Test Running");
}
execute(test); // output: Test Running
// Yahan execute() - ek Higher-Order Function hai.

// Callback = jo function doosre function ko argument ke roop mein diya jata hai.
// Higher-Order Function = jo function doosre function ko accept/return karta hai.

// forEach() — Higher-Order Function ------------------------------------
const browsers = ["Chrome", "Firefox", "Edge"];
browsers.forEach((browser) => {
  console.log(browser); // output: Chrome Firefox Edge
});

// map() — Higher-Order Function ----------------------------------------
const numbers = [1, 2, 3, 4];
const squares = numbers.map((number) => {
  return number * number;
});
console.log(squares); // output: [ 1, 4, 9, 16 ]

// filter() — Higher-Order Function -------------------------------------
const numbers1 = [10, 15, 20, 25, 30];
const evenNumbers = numbers1.filter((number) => {
  return number % 2 === 0;
});
console.log(evenNumbers); // output: [ 10, 20, 30 ]

// find() — Higher-Order Function ----------------------------------------
const users = [
  { username: "admin", role: "admin" },
  { username: "rahul", role: "user" },
  { username: "amit", role: "manager" },
];
const user = users.find((user) => {
  return user.role === "manager";
});
console.log(user); // output: { username: "amit", role: "manager" }

// some() ----------------------------------------------------------------
const userss = [
  { username: "admin", active: true },
  { username: "rahul", active: false },
];
const result = userss.some((user) => {
  return user.active === false;
});

console.log(result); // output: true

// every() ---------------------------------------------------------------
const users2 = [
  { username: "admin", active: true },
  { username: "rahul", active: true },
];
const result2 = users2.every((user) => {
  return user.active === true;
});
console.log(result2); // output: true

// Automation Test Data Example ------------------------------------------
const testCases = [
  {
    id: 1,
    name: "Valid Login",
    expected: "PASS",
  },
  {
    id: 2,
    name: "Invalid Password",
    expected: "FAIL",
  },
  {
    id: 3,
    name: "Valid Logout",
    expected: "PASS",
  },
];

const passedTests = testCases.filter((test) => {
  return test.expected === "PASS";
});
console.log(passedTests);
// output:
// [
//   { id: 1, name: 'Valid Login', expected: 'PASS' },
//   { id: 3, name: 'Valid Logout', expected: 'PASS' }
// ]

// filter() → HOF
// test => ... → callback

// Method Chaining -----------------------------------------------------------------------
const numbers3 = [1, 2, 3, 4, 5, 6];
const result3 = numbers3
  .filter((number) => number % 2 === 0) // for even number pick
  .map((number) => number * number); // for square of pick even number
console.log(result3); // output: [ 4, 16, 36 ]

// Automation mein Method Chaining -------------------------------------------------------
const users4 = [
  { username: "admin", role: "admin", active: true },
  { username: "rahul", role: "user", active: false },
  { username: "amit", role: "admin", active: true },
];

const activeAdmins = users4
  .filter((user) => user.role === "admin")
  .filter((user) => user.active === true)
  .map((user) => user.username);

console.log(activeAdmins); // output: [ 'admin', 'amit' ]
