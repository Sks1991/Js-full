//-----------------------------join()------------------------------//
// array ko string banata hai.

let fruits = ["Apple", "Mango", "Banana"];
let result = fruits.join();
console.log(result); // output: Apple,Mango,Banana (with commas)

let fruits1 = ["Apple", "Mango", "Banana"];
let result1 = fruits1.join(" ");
console.log(result1); // output: Apple Mango Banana (without commas)

let fruits2 = ["Apple", "Mango", "Banana"];
let result2 = fruits2.join(" - ");
console.log(result2); // output: Apple - Mango - Banana (without commas)

//--------------------------------concat()------------------------------------//
// arrays ko combine karta hai.

let a1 = [10, 20, 30];
let b1 = [40, 50, 60];

let rsult = a1.concat(b1);
console.log(rsult); // output: [ 10, 20, 30, 40, 50, 60 ]
// ----------------------------------------------------------------------------
let a = [1, 2];
let b = [3, 4];
let c = [5, 6];

let result3 = a.concat(b, c);
console.log(result3); // output: [ 1, 2, 3, 4, 5, 6 ]

//--------------------------------for...of------------------------------------//
// array ko traverse karne ka ek easier method.

// Normal for
let fruits3 = ["Apple", "Mango", "Banana"];
for (let i = 0; i < fruits3.length; i++) {
  console.log(fruits3[i]);
}
// output: Apple Mango Banana

// for...of
let fruits4 = ["Apple", "Mango", "Banana"];
for (let fruit of fruits4) {
  console.log(fruit);
}

// ---------------------------------------------------------------
let numbers = [10, 20, 30, 40];

for (let number of numbers) {
  console.log(number);
}
// output: 10 20 30 40

// ---------------------------------------------------------------
// for...of + condition

let numbers1 = [10, 15, 20, 25, 30];

for (let number of numbers1) {
  if (number % 2 === 0) {
    console.log(number);
  }
}
// output: 10 20 30

// ---------------------------------------------------------------
// Array me maximum using for...of

let numbers3 = [10, 50, 30, 90, 20];
let max = numbers3[0];

for (let number of numbers3) {
  if (number > max) {
    max = number;
  }
}
console.log("Maximum =", max);
// output: Maximum = 90

// ----------------------------------------------------------------
// Array ko reverse order me print karna.

let numbers4 = [10, 20, 30, 40, 50];

for (let i = numbers4.length - 1; i >= 0; i--) {
  console.log(numbers4[i]);
}
// output: 50 40 30 20 10.

// ----------------------------------------------------------------
// Practical: Student Marks.

let marks = [85, 72, 91, 68, 95];
let sum = 0;

for (let mark of marks) {
  sum = sum + mark;
}
let average = sum / marks.length;

console.log("Total Marks =", sum); // output: Total Marks = 411
console.log("Average =", average); // output: Average = 82.2

// ----------------------------------------------------------------
// Function + Array

function findSum(numbers5) {
  let sum = 0;

  for (let number of numbers5) {
    sum = sum + number;
  }
  return sum;
}
let numbers5 = [10, 20, 30, 40];
let result5 = findSum(numbers5);

console.log("Sum =", result5); // output: Sum = 100
