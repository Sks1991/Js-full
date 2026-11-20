// ------------------------------------ Spread & Rest Operator (...) -------------------------------------- //
// JavaScript mein ... ko Spread/Rest Operator kaha jata hai
// Same syntax ... hai, lekin iska use context ke according alag hota hai.

// Spread ---->	Data ko expand/unpack karta hai (फैलाना)
// Rest ----> Multiple values ko collect karta hai (इकट्ठा करना)

const browsers = ["Chrome", "Firefox", "Edge"];
const newBrowsers = [...browsers]; // browser ka copy banayega.(...browsers --> array ke elements ko expand kar raha hai.)
console.log(newBrowsers); // output: ["Chrome", "Firefox", "Edge"]

// Normal
const browsers1 = ["Chrome", "Firefox"];
const newBrowsers1 = browsers1;
newBrowsers1.push("Edge");
console.log(browsers1); // output: [ 'Chrome', 'Firefox', 'Edge' ]
console.log(newBrowsers1); // output: [ 'Chrome', 'Firefox', 'Edge' ]

// Spread
const browsers2 = ["Chrome", "Firefox"];
const newBrowsers2 = [...browsers2];
newBrowsers2.push("Edge");
console.log(browsers2); // output: [ 'Chrome', 'Firefox' ] (ye unchanged rahega)
console.log(newBrowsers2); // output: [ 'Chrome', 'Firefox', 'Edge' ]

// ------------------------------------ Array mein new value add karna -------------------------------------- //
const browsers3 = ["Chrome", "Firefox"];
const newBrowsers3 = [...browsers3, "Edge"];
console.log(browsers3); // output: ["Chrome", "Firefox"] (ye unchanged rahega)
console.log(newBrowsers3); // output: [ 'Chrome', 'Firefox', 'Edge' ]

// ------------------------------------ Arrays Merge Karna -------------------------------------- //
const browsers4 = ["Chrome", "Firefox"];
const browsers5 = ["Edge", "Safari"];

const allBrowsers = [...browsers4, ...browsers5];
console.log(allBrowsers); // output: [ 'Chrome', 'Firefox', 'Edge', 'Safari' ]

// ------------------------------------ Spread with Objects -------------------------------------- //
const loginData = {
  username: "admin",
  password: "admin123",
  role: "admin",
};
const newLoginData = {
  ...loginData,
};
console.log(newLoginData); // output: { username: 'admin', password: 'admin123', role: 'admin' }

// ------------------------------------ Object mein value override karna -------------------------------------- //
const loginData1 = {
  username: "admin",
  password: "admin123",
  role: "admin",
};
const invalidLogin = {
  ...loginData,
  password: "wrong123",
};
console.log(invalidLogin); // output: { username: 'admin', password: 'wrong123', role: 'admin' }

// ------------------------------------ Object Merge -------------------------------------- //
const user = {
  username: "admin",
};
const credentials = {
  password: "admin123",
};

const loginData2 = {
  ...user,
  ...credentials,
};
console.log(loginData2); // output: { username: 'admin', password: 'admin123' }

// ------------------------------------ Same property ho to kya hoga? -------------------------------------- //
const user1 = {
  username: "admin",
};

const user2 = {
  username: "tester",
};

const user3 = {
  ...user1,
  ...user2,
};
console.log(user3);
output: {
  username: "tester";
}
// Jo property last mein spread hoti hai, uski value final hoti hai.

// ------------------------------------ Rest Operator -------------------------------------- //
function add(...numbers) {
  console.log(numbers); // output: [ 10, 20, 30, 40 ] (multiple arguments ko ek array mein collect kar raha hai.)
}
add(10, 20, 30, 40);

// Simple Example
function printBrowsers(...browsers) {
  console.log(browsers);
}
printBrowsers("Chrome", "Firefox", "Edge"); // output: [ 'Chrome', 'Firefox', 'Edge' ]

// Loop
function printBrowsers1(...browsers) {
  for (const browser of browsers) {
    console.log(browser);
  }
}
printBrowsers1("Chrome", "Firefox", "Edge"); // output: Chrome, Firefox, Edge

// Rest + Function
function runTests(...testNames) {
  for (const test of testNames) {
    console.log("Running:", test); // output:
  }
}
runTests("Login Test", "Logout Test", "Search Test"); // output: Running: Login Test, Running: Logout Test, Running: Search Test

// Rest with Destructuring
const browsers6 = ["Chrome", "Firefox", "Edge", "Safari"];
const [first, ...remaining] = browsers6;
console.log(first); // output: Chrome
console.log(remaining); // output: [ 'Firefox', 'Edge', 'Safari' ]

// Rest with Object Destructuring
const user4 = {
  username: "admin",
  password: "12345",
  role: "admin",
  browser: "Chrome",
};
const { username, ...otherData } = user4;
console.log(username); // output: admin
console.log(otherData); // output: { password: '12345', role: 'admin', browser: 'Chrome' }

// --------------------------------- Spread vs Rest ------------------------------------ //

// Spread
const numbers = [1, 2, 3];
const newNumbers = [...numbers];
newNumbers.push(4);
console.log(numbers); // output: [ 1, 2, 3 ]
console.log(newNumbers); // output: [ 1, 2, 3, 4 ]
// ...numbers → values ko expand kar raha hai.

// Rest
function test(...numbers) {
  console.log(numbers); // output: [ 1, 2, 3, 4 ]
}
test(1, 2, 3, 4);
// ...numbers → values ko collect kar raha hai.

// --------------------------------- Data Driven Testing Example ------------------------------------ //
const baseUser = {
  username: "admin",
  password: "admin123",
};

const testCases = [
  {
    ...baseUser,
    expected: "success",
  },
  {
    ...baseUser,
    password: "wrong123",
    expected: "failure",
  },
  {
    ...baseUser,
    username: "wrongUser",
    expected: "failure",
  },
];
console.log(testCases);
// output:-
// [
//   { username: "admin", password: "admin123", expected: "success" },
//   { username: "admin", password: "wrong123", expected: "failure" },
//   { username: "wrongUser", password: "admin123", expected: "failure" },
// ];
