// ------------------------------------------ Callbacks ------------------------------------------- //
// Jab hum ek function ko doosre function ke argument ke roop mein pass karte hain, us function ko Callback Function kehte hain.

function greet() {
  console.log("Hello"); // output: Hello
}
function execute(callback) {
  callback();
}
execute(greet);
// hum greet function ko execute() ke andar pass kar rahe hain.
// Isliye greet ek callback function hai.

// Function ko call karna :- greet();
// Function ko pass karna :- execute(greet);

// ------------------------------------------ Callback with parameters ------------------------------------------- //
function printName(name) {
  console.log("Name:", name); // output: Name: Sudhir
}
function execute(callback) {
  callback("Sudhir");
}
execute(printName);

// ------------------------------------------ Anonymous Callback ------------------------------------------- //
function execute(callback) {
  callback();
}
execute(function () {
  console.log("Test started"); // output: Test started
});

// ------------------------------------------ Arrow Function as Callback ------------------------------------------- //
function execute(callback) {
  callback();
}
execute(() => {
  console.log("Test started"); // output: Test started
});

// ------------------------------------------ Array ke saath Callback ------------------------------------------- //
const browsers = ["Chrome", "Firefox", "Edge"];
browsers.forEach(function (browser) {
  console.log(browser); // output: Chrome Firefox Edge
});

// ------------------------------------------ forEach() ------------------------------------------- //
const browsers1 = ["Chrome", "Firefox", "Edge"];

browsers.forEach((browser1) => {
  console.log(browser1); // output: Chrome Firefox Edge
});

// ------------------------------------------ Callback with index ------------------------------------------- //
const browsers2 = ["Chrome", "Firefox", "Edge"];

browsers2.forEach((browser2, index) => {
  console.log(index, browser2); // output: 0 Chrome 1 Firefox 2 Edge
});

// ------------------------------------------ Callback with array ------------------------------------------- //
const browsers3 = ["Chrome", "Firefox", "Edge"];
browsers3.forEach((browser3, index, array) => {
  console.log(index, browser3, array);
});
// output: 0 Chrome [ 'Chrome', 'Firefox', 'Edge' ] 1 Firefox [ 'Chrome', 'Firefox', 'Edge' ] 2 Edge [ 'Chrome', 'Firefox', 'Edge' ]

// ------------------------------------------ Callback + map() ------------------------------------------- //
const numbers = [1, 2, 3, 4];
const squares = numbers.map((number) => {
  return number * number;
});
console.log(squares); // output: [1, 4, 9, 16]

// ------------------------------------------ Callback + filter() ------------------------------------------- //
const numbers1 = [10, 15, 20, 25, 30];

const evenNumbers = numbers1.filter((number) => {
  return number % 2 === 0;
});
console.log(evenNumbers); // output: [ 10, 20, 30 ]

// ------------------------------------------ Callback + find() ------------------------------------------- //
const users = [
  { username: "admin", role: "admin" },
  { username: "rahul", role: "user" },
  { username: "amit", role: "manager" },
];
const user = users.find((user) => {
  return user.role === "manager";
});
console.log(user); // output: { username: 'amit', role: 'manager' }

// ------------------------------------------ Callback + some() ------------------------------------------- //
const users1 = [
  { username: "admin", role: "admin" },
  { username: "rahul", role: "user" },
];
const result = users1.some((user) => {
  return user.role === "admin";
});
console.log(result); // output: true

// ------------------------------------------ Callback + every() ------------------------------------------- //
const users2 = [
  { username: "admin", active: true },
  { username: "rahul", active: true },
];
const result2 = users2.every((user) => {
  return user.active === true;
});
console.log(result2); // output: true

// Callback ka sabse important pattern -----------------
function executeTest(testName, callback) {
  console.log("Running:", testName); // output: Running: Login Test
  callback();
}
executeTest("Login Test", () => {
  console.log("Test completed"); // output: Test completed
});

// Callback with result
function calculate(a, b, callback) {
  const result = a + b;
  callback(result);
}
calculate(10, 20, (result) => {
  console.log("Result:", result); // output: Result: 30
});

// Automation-style Helper
function verifyStatus(actual, expected, callback) {
  if (actual === expected) {
    callback("PASS");
  } else {
    callback("FAIL");
  }
}
verifyStatus(200, 200, (result) => {
  console.log("API Test:", result); // output: API Test: PASS
});
