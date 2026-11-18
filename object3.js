// ------------------------------- Object Method -------------------------------- //
// Object ke andar function bhi rakh sakte hain.
let user = {
  username: "admin",

  login: function () {
    console.log("User logged in");
  },
};
user.login(); // output: User logged in

// ------------------------------- this -------------------------------- //
// Object ke andar current object ko refer karne ke liye this use hota hai.
let user1 = {
  username: "Sudhir",

  greet: function () {
    console.log("Hello " + this.username);
  },
};
user1.greet(); // output: Hello Sudhir (yaha this ka matlab hai - current object ki username property.)

// ------------- Real Testing Example — Login Test Data -------------
// In JavaScript
let loginData = {
  username: "admin",
  password: "admin123",
};
console.log(loginData.username); // output: admin
console.log(loginData.password); // output: admin123

// In Automation
// await page.locator("#username").fill(loginData.username);
// await page.locator("#password").fill(loginData.password);

// Multiple Login Test Data
let loginTests = [
  {
    username: "admin",
    password: "admin123",
    expected: "success",
  },
  {
    username: "wronguser",
    password: "wrong123",
    expected: "failure",
  },
];
for (let test of loginTests) {
  console.log("Username:", test.username);
  console.log("Password:", test.password);
  console.log("Expected:", test.expected);
}
// outout:----
// Username: admin;
// Password: admin123;
// Expected: success;

// Username: wronguser;
// Password: wrong123;
// Expected: failure;
