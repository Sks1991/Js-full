//-----------------------------includes()-------------------------------//
// value exist karti hai ya nahi?
// includes() return true or false

let fruits = ["Apple", "Mango", "Banana", "Orange"];
console.log(fruits.includes("Mango"));
// output: true

let numbers = [10, 20, 30, 40];
if (numbers.includes(30)) {
  console.log("Number exists");
} else {
  console.log("Number does not exist");
}
// output: Number exists

//----------------------------indexOf()------------------------------//
// value kis index par hai?

let fruits1 = ["Apple", "Mango", "Banana", "Orange"];
console.log(fruits.indexOf("Banana"));
// output: 2.
console.log(fruits.indexOf("Grapes"));
// output: -1. (Agar value exist nahi karti -1 output aata hai)

//----------------------------slice()------------------------------//

// array ka ek portion nikalna
// start include hota hai, end include nahi hota.
let fruits2 = ["Apple", "Mango", "Banana", "Orange", "Grapes"];

let result = fruits.slice(1, 4);
console.log(result);
// output: [ 'Mango', 'Banana', 'Orange' ] (start(1) mango include but last grapes(4) not included)

// slice() original array ko change nahi karta hai
let fruits3 = ["Apple", "Mango", "Banana", "Orange"];

let result3 = fruits.slice(1, 3);

console.log(result3); // output: [ 'Mango', 'Banana' ] (start(1) mango include but last orange(3) not included)
console.log(fruits3); // output: [ 'Apple', 'Mango', 'Banana', 'Orange' ]

// Negative index with slice()
// negative index start from right to left(start from -1,-2,-3,-----------------)

let fruits4 = ["Apple", "Mango", "Banana", "Orange", "Grapes"];
console.log(fruits4.slice(-2)); // output: [ 'Orange', 'Grapes' ]

//----------------------------splice()------------------------------//

// splice() original array ko modify karta hai.
// (1, 1): means 1 = starting index and other 1 = kitne elements remove karne hain.
let fruits5 = ["Apple", "Mango", "Banana", "Orange"];
fruits5.splice(1, 1);
console.log(fruits5); // output: [ 'Apple', 'Banana', 'Orange' ]

// Multiple elements remove
let fruits6 = ["Apple", "Mango", "Banana", "Orange", "Grapes"];

fruits6.splice(1, 2);
console.log(fruits6); // output: [ 'Apple', 'Orange', 'Grapes' ]

// splice() se new element insert karna
let fruits7 = ["Apple", "Banana", "Orange"];
fruits7.splice(1, 0, "Mango");
console.log(fruits7); // output: [ 'Apple', 'Mango', 'Banana', 'Orange' ]
// 1 → kaha insert karna hai
// 0 → kuch remove nahi karna
// "Mango" → kya add karna hai

// splice() se replace karna
let fruits8 = ["Apple", "Mango", "Banana"];
fruits8.splice(1, 1, "Orange");
console.log(fruits8); // output: [ 'Apple', 'Orange', 'Banana' ]
// Index 1 par jao
// 1 element remove karo
// Orange add karo

//------------------------------slice() vs splice()--------------------------------//
// slice() :- Portion copy karta hai. | Original array ko normally change nahi karta. | slice(start,end)
// splice() :- Add/remove karta hai. | 	Original array change karta hai. | splice(start,count,items)
