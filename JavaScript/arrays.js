// Array ek single variable ke andar multiple values store karne ka tarika hai.
// Har array element ka ek number hota hai jise index kehte hain.

let marks = [80, 75, 90, 88, 95];
console.log(marks); // output: [ 80, 75, 90, 88, 95 ]
console.log(marks[0]); // output: 80
console.log(marks[2]); // output: 90

// Array Count
console.log(marks.length); // total count of array. length batata hai array me kitne element hai.
console.log(marks.length - 1); // index count start from 0. so we count index (marks.length - 1).

//-----------------------------Array Value Change------------------------------//

let fruits = ["Apple", "Mango", "Banana"];

// Array me value change karna.([])
fruits[1] = "Orange"; // change index 1 value in fruits.
console.log(fruits); // output: [ 'Apple', 'Orange', 'Banana' ]

// Array me new element add karna. (push)
fruits.push("Papaya"); // add a new element in array. push() array ke end me element add karta hai.
console.log(fruits); // output: [ 'Apple', 'Orange', 'Banana', 'Papaya' ]

// Array ke end se element remove karna. (pop)
fruits.pop(); // Array ke end se element remove karta hai.
console.log(fruits); // output: [ 'Apple', 'Orange', 'Banana' ]

// Beginning me element add karna. (unshift)
fruits.unshift("Carrot"); // .unshift se beginning me element add hota hai.
console.log(fruits); // output: [ 'Carrot', 'Apple', 'Orange', 'Banana' ]

// Beginning se element remove karna. (shift)
fruits.shift(); // shift se eginning me element remove hota hai.
console.log(fruits); //output: [ 'Apple', 'Orange', 'Banana' ]

/*
push    → end me add
pop     → end se remove

unshift → start me add
shift   → start se remove
*/
