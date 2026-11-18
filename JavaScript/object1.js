// ------------------------- Different Data Types in Object ------------------------------- //
// let user = {
//   username: "admin",
//   age: 25,
//   isActive: true,
//   password: null,
// };

// username → String
// age      → Number
// isActive → Boolean
// password → null

// Object ke andar Array
let user = {
  username: "admin",
  roles: ["admin", "editor", "viewer"],
};
console.log(user.roles); // output: [ 'admin', 'editor', 'viewer' ]
console.log(user.roles[0]); // output: admin

// --------------------------- Object ke andar Object ----------------------------- //
let users = {
  username: "admin",
  address: {
    city: "Delhi",
    country: "India",
  },
};
console.log(users.address.city); // output: Delhi.
console.log(users.address.country); // output: India

// Automation Testing mein Nested Object
let response = {
  status: 200,
  user: {
    name: "Sudhir",
    role: "admin",
  },
};
console.log(response.status); // output: 200
console.log(response.user.name); // output: Sudhir
console.log(response.user.role); // output: admin

// ----------------------------- Array of Objects ------------------------------ //
// Pattern :- array[index].property
let userss = [
  {
    username: "admin",
    role: "admin",
  },
  {
    username: "rahul",
    role: "user",
  },
  {
    username: "amit",
    role: "manager",
  },
];
console.log(userss[0]); // output: { username: 'admin', role: 'admin' }
console.log(userss[0].username); // output: admin
console.log(userss[1].username); // output: rahul
console.log(userss[2].role); // output: manager

// Array of Objects + Loop
let usersss = [
  {
    username: "admin",
    role: "admin",
  },
  {
    username: "rahul",
    role: "user",
  },
  {
    username: "amit",
    role: "manager",
  },
];

for (let user of usersss) {
  console.log(user.username); // output: admin rahul amit
}

// Testing Data ke saath Loop
let testUsers = [
  {
    username: "admin",
    password: "admin123",
  },
  {
    username: "user1",
    password: "user123",
  },
  {
    username: "user2",
    password: "user456",
  },
];
for (let user of testUsers) {
  console.log("Username:", user.username);
  console.log("Password:", user.password);
}
// output :-
// Username: admin
// Password: admin123
// Username: user1
// Password: user123
// Username: user2
// Password: user456
