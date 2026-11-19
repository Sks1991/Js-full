// ------------------------------------ Destructuring ------------------------------------- //

const user = {
  username: "admin",
  password: "admin123",
  role: "admin",
};
// Normal Approach
// const username = user.username;
// const password = user.password;

// console.log(user.username); // output: admin
// console.log(user.password); // output: admin123

// By Destructuring
const { username, password } = user;

console.log(username); // output: admin
console.log(password); // output: admin123

// ------------------------------------ Object Destructuring ------------------------------------- //
const user1 = {
  username1: "admin",
  password1: "admin123",
  role: "qa",
};

const { username1, password1, role } = user1;

console.log(username1); // output: admin
console.log(password1); // output: admin123
console.log(role); // output: qa

// Object destructuring mein property name match hota hai.
// const { username } = user;
// JavaScript object mein username property dhundhega.

// ------------------------------------ Sirf Required Property Nikalna ------------------------------------- //

const user2 = {
  username2: "admin",
  password2: "admin123",
  role2: "admin",
  city2: "Delhi",
};
const { city2 } = user2;
console.log(city2); // output: Delhi

// ------------------------------------ Variable ka naam change karna ------------------------------------- //

const user3 = {
  username3: "admin",
};
const { username3: userName } = user3;
console.log(userName); // output: admin

// username → object ki property
// userName → hamara variable

// ------------------------------------ Default Value ------------------------------------- //
const user4 = {
  username4: "admin",
};
// const { username4, role4 } = user4; // (yaha maine role4 ko assign nahi kiya)

// console.log(username4); // output: admin
// console.log(role4); // output: undefined

const { username4, role4 = "user" } = user4; // (yaha maine role4 ko assign kiya)

console.log(username4); // output: admin
console.log(role4); // output: user

// ------------------------------------ Nested Object Destructuring ------------------------------------- //
const response5 = {
  status: 200,
  user5: {
    name5: "Sudhir",
    role5: "admin",
  },
};

// Normal
// console.log(response.user.name); // output: Sudhir
// console.log(response.user.role); // output: admin

// Destructuring
// const { user5 } = response5;
// console.log(user5.name5); // output: Sudhir
// console.log(user5.role5); // output: admin

// Nested destructuring

const {
  user5: { name5, role5 },
} = response5;

console.log(name5); // output: Sudhir
console.log(role5); // output: admin
console.log(response5.status); // output: 200

// ------------------------------------ Array Destructuring ------------------------------------- //

const browsers = ["Chrome", "Firefox", "Edge"];

// Normal:
// console.log(browsers[0]); // output: Chrome
// console.log(browsers[1]); // output: Firefox

// Destructuring:
const [first, second, third] = browsers;
console.log(first); // output: Chrome
console.log(second); // output: Firefox
console.log(third); // output: Edge

// first value nikalne ke liye

// const [first] = browsers;
// console.log(first); // output: Chrome (sirf first valur nikalne ke liye)

// Array mein Value Skip karne ke liye

// const [first, , third] = browsers;
// console.log(first); // output: Chrome
// console.log(third); // output: Edge

// ------------------------------------ Function ke saath Destructuring ------------------------------------- //

// Normal
// function loginTest(data) {
//   console.log(data.username); // output: admin
//   console.log(data.password); // output: admin123
// }
// const loginData = {
//   username: "admin",
//   password: "admin123",
// };
// loginTest(loginData);

// Destructuring

function loginTest({ username, password }) {
  console.log(username); // output: admin
  console.log(password); // output: admin123
}
const loginData = {
  username: "admin",
  password: "admin123",
};
loginTest(loginData);

// ------------------------------------ Array of Objects + Destructuring ------------------------------------- //

const users = [
  {
    username: "admin",
    role: "admin",
  },
  {
    username: "rahul",
    role: "user",
  },
];
for (const user of users) {
  const { username, role } = user;

  console.log(username); // output: admin admin
  console.log(role); // output: rahul user
}

// for (const { username, role } of users) {
//   console.log(username); // output: admin admin
//   console.log(role); // output: rahul user
// }

// simple trick

// Object → { }
// Array  → [ ]

// Object:
// const { username } = user;

// Array:
// const [first] = browsers;
