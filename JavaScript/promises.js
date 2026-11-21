// ---------------------------------------- Promise -------------------------------------------- //
// Promise ek aisa object hai jo batata hai ki koi asynchronous kaam abhi chal raha hai, aur future mein uska result milega.
// .then() , .catch() commonly use hota hai.
// .then() :- Agar Promise successful hua, to ye code chalao.
// .catch() :- failure handle karta hai.

const promise = new Promise((resolve, reject) => {
  resolve("Login successful");
});
promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
// output: Login successful

// Automation Testing Example ----------------------------------
function login() {
  return new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve("Login successful");
    } else {
      reject("Login failed");
    }
  });
}
login()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
// output: Login successful

// Promise with delay ------------------------------------------------
const login1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Login successfull");
  }, 2000);
});
login1.then((result) => {
  console.log(result);
});
// output: Login successfull (2 second baad output ayega)

/*
 API Request
    ↓
 Promise
    ↓
 ┌──────────────┐
 ↓              ↓
Success        Error
 ↓              ↓
.then()        .catch()

Isi wajah se API automation mein Promise concept important hai.
 */

// Multiple .then() ----------------------------------------------------
const login2 = new Promise((resolve, reject) => {
  resolve("Login successful");
});

login2
  .then((result) => {
    console.log(result);
    return "Dashboard opened";
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
//output: Login successful , Dashboard opened

// Promise + Function --------------------------------------------------------
function getUser() {
  return new Promise((resolve, reject) => {
    resolve({
      username: "admin",
      role: "admin",
    });
  });
}
getUser().then((user) => {
  console.log(user.username);
  console.log(user.role);
});
// output: admin , admin

/*
              Promise
                │
             Pending
             /     \
            /       \
       Success      Failure
          ↓            ↓
      Fulfilled      Rejected
          ↓            ↓
       .then()       .catch()
*/

// Promise.all() --------------------------------------------------------
const test1 = Promise.resolve("Login");
const test2 = Promise.resolve("Search");
const test3 = Promise.resolve("Logout");

Promise.all([test1, test2, test3]).then((results) => {
  console.log(results);
});
// [ 'Login', 'Search', 'Logout' ]
