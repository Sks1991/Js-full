// ---------------------------------------- JSON (JavaScript Object Notation) ----------------------------------------- //

// JSON :-> Ye ek data format hai jiska use applications ke beech data exchange karne ke liye hota hai.
// {
//     "username": "admin",
//     "password": "admin123",
//     "role": "admin"
// }

// JavaScript Object vs JSON ---------------------------------------------------------------------------

// JavaScript Object
// const user = {
//     username: "admin",
//     password: "admin123"
// };

// JSON
// {
//     "username": "admin",
//     "password": "admin123"
// }

// JSON mein property names double quotes mein hote hain. ("username")
// JavaScript object mein: (username)

// JSON mein data types ------------------------------------------------------------------------------------
// String, Number, Boolean, Object, Array, null
/*
{
    "name": "Sudhir",   // String
    "age": 30,          // Number
    "active": true,     // Boolean
    "skills": ["JavaScript", "Playwright"],  // Array
    "address": {
        "city": "Delhi"  // Object
    },
    "middleName": null   // Null
}
*/

// JavaScript mein: let value = undefined; (valid hai.)
// Lekin JSON mein: { "value": undefined } (❌ Valid JSON nahi hai.)
// JSON mein missing value ke liye generally property omit karte hain ya null use karte hain.

// JSON ko JavaScript mein convert karna -----------------------------------------------------------
// JSON.parse();
// JSON.stringify();

// JSON.parse()
const jsonData = '{"username":"admin","role":"admin"}';
const user = JSON.parse(jsonData);
console.log(user.username); // output: admin
// JSON String -> JSON.parse() -> JavaScript Object

// JSON.stringify()
const user1 = { username: "admin", role: "admin" };
const jsonData1 = JSON.stringify(user1);
console.log(jsonData1); // output: {"username":"admin","role":"admin"}
// JavaScript Object -> JSON.stringify() -> JSON String

//    JSON.parse()	       JSON  → JS Object
//    JSON.stringify()	   JS Object → JSON

// API Response ko read karna ---------------------------------------------------------------------
const response = {
  status: 200,
  message: "Login successful",
  user: {
    username: "admin",
    role: "admin",
  },
};
console.log(response.status); // output: 200
console.log(response.message); // output: Login successful
console.log(response.user.username); // output: admin

// JSON + Destructuring ---------------------------------------------------------------------------
const response1 = {
  status: 200,
  message: "Success",
  user: {
    username: "admin",
    role: "admin",
  },
};
// destructure
const { status, message } = response1;
console.log(status); // output: 200
console.log(message); // output: Success
// Nested
const {
  user: { username, role },
} = response1;
console.log(username); // output: admin
console.log(role); // output: admin

// JSON Array ------------------------------------------------------------------------------------------
// JSON mein array bhi ho sakta hai
[
  {
    id: 1,
    name: "Sudhir",
  },
  {
    id: 2,
    name: "Rahul",
  },
];
// JavaScript mein
const users = [
  {
    id: 1,
    name: "Sudhir",
  },
  {
    id: 2,
    name: "Rahul",
  },
];
// Loop
for (const user of users) {
  console.log(user.name); // output: Sudhir, Rahul
}

// JSON + Test Data ------------------------------------------------------------------------------
const testData = [
  {
    username: "admin",
    password: "admin123",
    expected: "success",
  },
  {
    username: "wrongUser",
    password: "wrong123",
    expected: "failure",
  },
];
// JavaScript mein data read karke
for (const test of testData) {
  console.log(test.username); // output: admin, wrongUser
  console.log(test.expected); // output: success, failure
}
// data-driven testing

// API Request -> JSON Body -> API Response -> JSON Data -> Assertions -> Test Data -> JSON File -> Data-driven Tests
