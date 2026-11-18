//-------------------------------Function ke andar loop----------------------------------//
// Function ke andar condition ho sakti hai, loop ho sakta hai, doosra function call bhi ho sakta hai.

function printNumbers() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}
printNumbers(); // output: 1 2 3 4 5

//-------------------------------Function ke andar if...else----------------------------------//

function checkAge(age) {
  if (age >= 18) {
    return "Eligible";
  } else {
    return "Not Eligible";
  }
}
console.log(checkAge(20)); // output: Eligible
console.log(checkAge(15)); // output: Not Eligible

//-------------------------------Default Parameter----------------------------------//

function greet(name = "Guest") {
  console.log("Hello " + name);
}
greet("Sudhir"); // output: Hello Sudhir

//-------------------------------Function Expression----------------------------------//

const add = function (a, b) {
  return a + b;
};
console.log(add(10, 20)); // output: 30
//-------------------------------Practical program----------------------------------//

function adds(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
console.log("Addition:", adds(10, 5)); // output: 15
console.log("Subtraction:", subtract(10, 5)); // output: 5
console.log("Multiplication:", multiply(10, 5)); // output: 50
console.log("Division:", divide(10, 5)); // output: 2

//-------------------------------Arrow Function----------------------------------//

const add1 = (a, b) => a + b;
console.log(add1(5, 7));

// OR

const add2 = (a, b) => {
  return a + b;
};
console.log(add2(5, 5));

// OR

const square = (number) => number * number;
console.log(square(5));
