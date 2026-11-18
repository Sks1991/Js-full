// Conditions: if, if...else, else if, Nested if, switch, Truthy & Falsy
// if -> Kisi condition ko check karke condition true hone par code execute karna.
// else -> kisi bhi previous condition ke false hone par execute hota hai.
// else if -> ek additional condition check karta hai.
// nested if -> ek if statement ke andar doosra if statement likhna.
// switch -> ek variable ke value ke basis par multiple cases mein se ek case execute karna.
// break -> switch case ke andar use hota hai, taki ek case execute hone ke baad switch statement se bahar aa jaye. Agar break statement nahi diya jaye, to next case bhi execute ho jayega (fall-through behavior).
// Truthy & Falsy -> JavaScript mein kuch values ko boolean context mein false treat kiya jata hai, inhe Falsy values kehte hain. Baaki sab values ko true treat kiya jata hai, inhe Truthy values kehte hain.
// Falsy values: false, 0, -0, "", null, undefined, NaN
// Truthy values: true, non-zero numbers, non-empty strings, objects, arrays

/*
if → ek condition check karta hai.
else → jab if false ho.
else if → multiple conditions ke liye.
Nested if → if ke andar if.
switch → fixed values/cases ke liye.
break → switch case ke baad bahar nikalta hai.
Truthy value → Boolean context mein true.
Falsy values → false, 0, "", null, undefined, NaN, 0n.
*/

/*
CONDITIONS
│
├── if
│   └── condition true → code
│
├── if...else
│   ├── true → if
│   └── false → else
│
├── else if
│   └── multiple conditions
│
├── Nested if
│   └── if ke andar if
│
├── switch
│   ├── case
│   ├── break
│   └── default
│
└── Truthy / Falsy
    ├── Truthy → Boolean context mein true
    └── Falsy
        ├── false
        ├── 0
        ├── ""
        ├── null
        ├── undefined
        ├── NaN
        └── 0n
        */

//------------------------if Statement------------------------//
let age = 20;

if (age >= 18) {
  console.log("You are eligible to vote."); // Output: You are eligible to vote.
}

let age1 = 15;

if (age1 >= 18) {
  console.log("Adult"); // This block will not execute because the condition is false(blank).
}

//------------------------if...else Statement------------------------//

let marks = 65;

if (marks >= 40) {
  console.log("Pass");
} else {
  console.log("Fail");
}
// output: Pass because the condition is true.

let markss = 30;

if (markss >= 40) {
  console.log("Pass");
} else {
  console.log("Fail"); // Output: Fail because the condition is false.
}
//output: Fail because the condition is false.

//------------------------else if Statement------------------------//

let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}
// Output: Grade: B because the condition is true.

let marksss = 95;

if (marksss >= 40) {
  console.log("D");
} else if (marksss >= 90) {
  console.log("A");
}
// Output: D because the first condition is true, so the second condition is not checked.

//------------------------Nested if Statement------------------------//

let marks1 = 75;

if (marks1 >= 40) {
  if (marks1 >= 70) {
    console.log("Distinction");
  }
}
// Output: Distinction because both conditions are true.

let marks2 = 35;

if (marks2 >= 40) {
  if (marks2 >= 70) {
    console.log("Distinction");
  }
}
// Output: (no output) because the first condition is false.

//------------------------Nested if with else Statement------------------------//

let marks3 = 75;

if (marks3 >= 40) {
  if (marks3 >= 70) {
    console.log("Distinction");
  } else {
    console.log("Pass");
  }
} else {
  console.log("Fail");
}
// Output: Pass because the first condition is true but the second is false.

//------------------------Nested if vs &&------------------------//

let marks4 = 75;
if (marks4 >= 40 && marks4 >= 70) {
  console.log("Distinction");
} else if (marks4 >= 40) {
  console.log("Pass");
} else {
  console.log("Fail");
}
// Output: Pass because the first condition is true but the second is false.

//------------------------switch Statement------------------------//
// switch statement ek variable ke value ke basis par multiple cases mein se ek case execute karta hai. Agar koi case match nahi hota, to default case execute hota hai.
//break statement ka use switch case ke andar hota hai, taki ek case execute hone ke baad switch statement se bahar aa jaye. Agar break statement nahi diya jaye, to next case bhi execute ho jayega (fall-through behavior).
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}
// Output: Wednesday because the value of day is 3.

let day1 = 2;

switch (day1) {
  case 1:
    console.log("Monday");

  case 2:
    console.log("Tuesday");

  case 3:
    console.log("Wednesday");
}
// Output: Monday, Tuesday, Wednesday because there are no break statements, so all cases after the matching case are executed (fall-through behavior).

//------------------------default Case in switch Statement------------------------//

let day2 = 10;

switch (day2) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  default:
    console.log("Invalid day");
}
// Output: Invalid day because the value of day2 is 10, which does not match any case, so the default case is executed.

//----------------------------switch mein strings-------------------------//

let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("Apple selected");
    break;

  case "banana":
    console.log("Banana selected");
    break;

  case "mango":
    console.log("Mango selected");
    break;

  default:
    console.log("Unknown fruit");
}
// Output: Apple selected because the value of fruit is "apple", which matches the first case.

//------------------------switch aur if...else mein difference------------------------//
// switch statement ek variable ke value ke basis par multiple cases mein se ek case execute karta hai, jabki if...else statement ek ya zyada conditions ke basis par code execute karta hai.
// switch statement mein case values ko strictly compare kiya jata hai (===), jabki if...else statement mein loose comparison (==) bhi ho sakta hai.
// switch statement mein break statement ka use hota hai, jabki if...else statement mein nahi hota.

//Range/complex condition → if...else
if (marks >= 90) {
  console.log("A");
} else if (marks >= 75) {
  console.log("B");
}
// Output: B because the first condition is false, so the second condition is checked and it is true.

//Fixed values → switch
switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;
}
// Output: Tuesday because the value of day is 2, which matches the second case.

//------------------------Truthy & Falsy Values------------------------//
// JavaScript mein kuch values ko boolean context mein false treat kiya jata hai, inhe Falsy values kehte hain. Baaki sab values ko true treat kiya jata hai, inhe Truthy values kehte hain.
// Falsy values: false, 0, -0, "", null, undefined, NaN
// Truthy values: true, non-zero numbers, non-empty strings, objects, arrays

// if (value) {
// }
// Agar value Truthy hai, to ye block execute hoga. Agar value Falsy hai, to ye block skip ho jayega.
//output: (no output) because the value is not defined, so it is treated as Falsy.

if ("Hello") {
  console.log("This runs");
}
// Output: This runs because the string "Hello" is a Truthy value.

//------------------------Falsy Values------------------------//
if (false) {
  console.log("Hello");
}
// Output: (no output) because false is a Falsy value.

if (0) {
  console.log("Hello");
}
// Output: (no output) because 0 is a Falsy value.

if (-0) {
  console.log("Hello");
}
// Output: (no output) because -0 is a Falsy value.

if ("") {
  console.log("Hello");
}
// Output: (no output) because an empty string is a Falsy value.

if (null) {
  console.log("Hello");
}
// Output: (no output) because null is a Falsy value.

if (undefined) {
  console.log("Hello");
}
// Output: (no output) because undefined is a Falsy value.

if (NaN) {
  console.log("Hello");
}
// Output: (no output) because NaN is a Falsy value.

//------------------------Truthy Values------------------------//
if (true) {
  console.log("Hello");
}
// Output: Hello because true is a Truthy value.

if (1) {
  console.log("Hello");
}
// Output: Hello because 1 is a Truthy value.

if (-1) {
  console.log("Hello");
}
// Output: Hello because -1 is a Truthy value.

if ("Hello") {
  console.log("Hello");
}
// Output: Hello because the string "Hello" is a Truthy value.

if ({}) {
  console.log("Hello");
}
// Output: Hello because an object is a Truthy value.

if ([]) {
  console.log("Hello");
}
// Output: Hello because an array is a Truthy value.

// Truthy/Falsy ka practical use
let userInput = "Sudhir";

if (userInput) {
  console.log("Hello, " + userInput + "!");
} else {
  console.log("Please enter your name.");
}
// Output: Hello, Sudhir! because the user input is a Truthy value.

//-----------------------! se truthy/falsy reverse karna-------------------------//
let username = "";

if (!username) {
  console.log("Username is missing"); // Output: Username is missing because the username is an empty string, which is a Falsy value, and the ! operator reverses it to true.
}
// Output: Username is missing because the username is an empty string, which is a Falsy value, and the ! operator reverses it to true.

//-----------------------!! se truthy/falsy check karna-------------------------//
// !! operator ek value ko boolean mein convert karta hai. Pehla ! operator value ko reverse karta hai, aur doosra ! operator usko wapas reverse karke original truthy/falsy value ko boolean mein convert kar deta hai.
let username1 = "Sudhir";
console.log(!!username1); // Output: true

let username2 = "";
console.log(!!username2); // Output: false

//-----------------------Boolean() function-------------------------//
// Boolean() function ek value ko boolean mein convert karta hai. Agar value truthy hai, to true return karta hai, aur agar value falsy hai, to false return karta hai.
console.log(Boolean(1)); // Output: true -> because 1 is a Truthy value.
console.log(Boolean(0)); // Output: false -> because 0 is a Falsy value.
console.log(Boolean("Hello")); // Output: true -> because the string "Hello" is a Truthy value.
console.log(Boolean("")); // Output: false -> because an empty string is a Falsy value.
console.log(Boolean(null)); // Output: false -> because null is a Falsy value.
console.log(Boolean(undefined)); // Output: false -> because undefined is a Falsy value.
console.log(Boolean("0")); // Output: true -> because the string "0" is a Truthy value.
console.log(Boolean("false")); // Output: true -> because the string "false" is a Truthy value.
console.log(Boolean([])); // Output: true -> because an empty array is a Truthy value.
console.log(Boolean({})); // Output: true -> because an empty object is a Truthy value.

//-----------------------if mein Boolean comparison-------------------------//
//method 1
let username3 = "Sudhir";
if (Boolean(username3)) {
  console.log("Hello, " + username3 + "!");
} else {
  console.log("Please enter your name.");
}
// Output: Hello, Sudhir! because the username is a Truthy value.

//method 2
let username4 = "Sudhir";
if (!!username4) {
  console.log("Hello, " + username4 + "!");
}
// Output: Hello, Sudhir! because the username is a Truthy value.

//-----------------------Real Practical Project: Login System-------------------------//
let username5 = "rahul";
let password = "12345";

if (username5 === "rahul" && password === "12345") {
  console.log("Login successful");
} else {
  console.log("Invalid username or password");
}
// Output: Login successful because both the username and password match the expected values.

//-----------------------Practical Project: Electricity Bill Category-------------------------//
let units = 250;

if (units <= 100) {
  console.log("Low usage");
} else if (units <= 200) {
  console.log("Medium usage");
} else if (units <= 300) {
  console.log("High usage");
} else {
  console.log("Very high usage");
}
// Output: High usage because the units consumed are 250, which falls in the range of 201-300.

//--------------------------Practical Project: ATM Withdrawal-------------------------//
let balance = 5000;
let withdrawal = 3000;

if (withdrawal <= 0) {
  console.log("Invalid amount");
} else if (withdrawal > balance) {
  console.log("Insufficient balance");
} else {
  balance = balance - withdrawal;
  console.log("Please collect your cash");
  console.log("Remaining balance:", balance);
}
// Output: Please collect your cash
// Remaining balance: 2000 because the withdrawal amount is valid and less than the balance.
