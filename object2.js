// ------------------------------ Object + Condition -------------------------------- //
let user = {
  username: "admin",
  role: "admin",
};
if (user.role === "admin") {
  console.log("Admin user");
} else {
  console.log("Normal user");
}
// output: Admin user

// ------------------------------ Object.keys() -------------------------------- //
// Object ki saari keys nikalne ke liye :-
let user1 = {
  username: "admin",
  role: "admin",
  age: 25,
};
console.log(Object.keys(user1)); // output: [ 'username', 'role', 'age' ]

// ------------------------------ Object.values() -------------------------------- //
// Object ki saari values nikalne ke liye :-
let user2 = {
  username: "admin",
  role: "admin",
  age: 25,
};
console.log(Object.values(user2)); // output: [ 'admin', 'admin', 25 ]

// ------------------------------ Object.entries() -------------------------------- //
// Object ki saari keys aur values nikalne ke liye :-
let user3 = {
  username: "admin",
  role: "admin",
  age: 25,
};
console.log(Object.entries(user3)); // output: [ [ 'username', 'admin' ], [ 'role', 'admin' ], [ 'age', 25 ] ]

// ------------------------------ Object + find() -------------------------------- //
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
let result = userss.find((user) => user.username === "rahul");
console.log(result); // output: { username: 'rahul', role: 'user' } (Jis user ka username rahul hai, uska object find karo.)

// ------------------------------ Object + filter() -------------------------------- //
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
let admins = usersss.filter((user) => user.role === "admin");
console.log(admins); // output: [ { username: 'admin', role: 'admin' } ]

// find():
// Pehla matching object

// filter():
// Saare matching objects

// ------------------------------ Object + map() -------------------------------- //
// Sirf usernames chahiye:
let userssss = [
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
let usernames = userssss.map((user) => user.username);
console.log(usernames); // output: [ 'admin', 'rahul', 'amit' ]
