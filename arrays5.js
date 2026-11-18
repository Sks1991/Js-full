// ------------------------------- reduce() ------------------------------------//
// sab values ko combine karna.

// loop se
let numbers = [10, 20, 30, 40];
let sum = 0;

for (let number of numbers) {
  sum = sum + number;
}
console.log(sum); // output: 100.

// reduce()
let numbers1 = [10, 20, 30, 40];
let sum1 = numbers1.reduce((total, number) => {
  return total + number;
}, 0);
console.log(sum1); // output: 100

//-------------concept-----------------
/* 
reduce((accumulator, currentValue) => {
    
}, initialValue)

accumulator → ab tak ka result
currentValue → current element
*/

// reduce() se multiplication
let numbers2 = [2, 3, 4];

let result = numbers2.reduce((total, number) => {
  return total * number;
}, 1);
console.log(result); // output: 24.

// ------------------------------- find() ------------------------------------//
// pehla matching element

let num = [10, 15, 20, 25, 30];
let rslt = num.find((number) => number > 20);
console.log(rslt); // output: 25 (25 aur 30 dono hai but ye output first element matching deta hai aur agar koi match na hota to undefined aata)

// ------------------------------- find() vs filter() -------------------------------------//
// find()   → first matching value
// filter() → all matching values

// ------------------------------- findIndex() -------------------------------------//
// Agar value nahi, balki matching element ka index chahiye:

let numbers3 = [10, 20, 30, 40];
let index = numbers3.findIndex((number) => number > 25);
console.log(index); // output: 2

// ------------------------------- some() -------------------------------------//
// kya kam se kam ek element condition satisfy karta hai?

let numbers4 = [10, 15, 20, 25];
let result4 = numbers4.some((number) => number > 20);
console.log(result4); // output: true

// ------------------------------- every() -------------------------------------//
// kya saare elements condition satisfy karte hain?

let numbers5 = [10, 20, 30, 40];
let result5 = numbers5.every((number) => number > 0);
console.log(result5); // output: true

// some()  → Koi ek?
// every() → Sabhi?

// Real-world Example: Products
let products = [
  { name: "Laptop", price: 70000 },
  { name: "Mouse", price: 800 },
  { name: "Keyboard", price: 1500 },
  { name: "Monitor", price: 12000 },
];
let expensive = products.filter((product) => product.price > 10000);
console.log(expensive); // output: [ { name: 'Laptop', price: 70000 }, { name: 'Monitor', price: 12000 } ]

let names = products.map((product) => product.name);
console.log(names); // output: [ 'Laptop', 'Mouse', 'Keyboard', 'Monitor' ]

let total = products.reduce((sum, product) => {
  return sum + product.price;
}, 0);

console.log(total); // output: 84300
