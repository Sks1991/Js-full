// Function ek reusable block of code hota hai jo ek particular kaam karta hai.

// Without function:
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");

// With function:
function sayHello() {
  console.log("Hello");
}
sayHello();
sayHello();
sayHello();
// output: Hello, Hello, Hello

//-----------------------Function with Parameters--------------------------//
// Function banate waqt jo variable receive karta hai, use parameter kehte hain.
// yaha name parameter hai.
// Argument: Yaha "Sudhir" hai.
// Function define karte waqt → Parameter
// Function call karte waqt → Argument

function greet(name) {
  console.log("Hello " + name);
}
greet("Sudhir");
// output: Hello Sudhir

//-----------------------Multiple Parameters--------------------------//
function add(a, b) {
  console.log(a + b);
}
add(17, 6);
add(100, 5);
// output: 23 and 105
