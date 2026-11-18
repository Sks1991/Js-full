// --------------------------- Callback Function ------------------------------//
// Ek function ko kisi doosre function/method ke andar argument ke roop me dena.

function greet(name) {
  console.log("Hello " + name);
}

function processUser(callback) {
  callback("Sudhir");
}

processUser(greet); // output: Hello Sudhir

// ---------------------------  map() ------------------------------//
// har element ko transform karna.

// Traditional loop:
let numbers = [1, 2, 3, 4, 5];
let squares = [];

for (let number of numbers) {
  squares.push(number * number);
}
console.log(squares); // output: [ 1, 4, 9, 16, 25 ]

// Map()
// array ke har element par callback function chalata hai.
let numbers1 = [1, 2, 3, 4, 5];
let squares1 = numbers1.map(function (number) {
  return number * number;
});
console.log(squares1); // output: [ 1, 4, 9, 16, 25 ]

// map() with arrow function
let numbers3 = [1, 2, 3, 4, 5];
let squares3 = numbers3.map((number) => number * number);
console.log(squares3); // output: [ 1, 4, 9, 16, 25 ]

// Example: Prices par GST
let prices = [100, 200, 300, 400];
let pricesWithGST = prices.map((price) => price * 1.18);
console.log(pricesWithGST); // output: [ 118, 236, 354, 472 ]

// 7.48 Example: Names uppercase
let names = ["rahul", "amit", "sudhir"];
let upperNames = names.map((name) => name.toUpperCase());
console.log(upperNames); // output: [ 'RAHUL', 'AMIT', 'SUDHIR' ]

// ---------------------------  filter() ------------------------------//
// kuch elements select karna

// Normal Loop
let numbers4 = [10, 15, 20, 25, 30];
let evenNumbers = [];

for (let number of numbers4) {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
}
console.log(evenNumbers); // output: [ 10, 20, 30 ]

// filter()
let numbers5 = [10, 15, 20, 25, 30];
let evenNumbers5 = numbers5.filter((number) => number % 2 === 0);
console.log(evenNumbers5); // output: [ 10, 20, 30 ]

// Example: Passing students
let marks = [35, 80, 42, 25, 90, 55];
let passed = marks.filter((mark) => mark >= 40);
console.log(passed); // output: [ 80, 42, 90, 55 ]

// ---------------------------  map() vs filter() ------------------------------//

// map()
// Har element ko transform karta hai.

let numbers6 = [1, 2, 3, 4];
let result = numbers6.map((number) => number * 2);
console.log(result); // output: [ 2, 4, 6, 8 ]

// filter()
// Kuch elements ko select karta hai.

let numbers7 = [1, 2, 3, 4];
let result7 = numbers7.filter((number) => number > 2);
console.log(result7); // output: [ 3, 4 ]
