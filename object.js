// ---------------------------------Object---------------------------------//
// Object ek container hai jisme related data ko key-value pair mein store karte hain.

let student = {
  name: "Sudhir",
  age: 25,
  course: "JavaScript",
};

// name   → Sudhir
// age    → 25
// course → JavaScript

// name     = key
// "Sudhir" = value

// Method 1 — Dot notation
let user = {
  username: "admin",
  password: "12345",
};
console.log(user.username); // output: admin
console.log(user.password); // output: 12345

// Bracket notation
console.log(user["username"]); // output: admin

let user1 = {
  username: "admin",
  password: "12345",
};

let field = "username";
console.log(user1[field]); // output: admin

// Object ki value change karna
// Object mutable hota hai, matlab property ki value change kar sakte hain.
let user2 = {
  username: "admin",
  role: "user",
};
user2.role = "admin";
console.log(user2.role); // output: admin

// New property add karna
let user3 = {
  username: "admin",
};
user3.password = "12345"; // user3 me password bhi add ho jayega.
console.log(user3); // output: { username: 'admin', password: '12345' }

// Property delete karna
let user4 = {
  username: "admin",
  password: "12345",
};
delete user4.password;
console.log(user4); // output: { username: 'admin' }
