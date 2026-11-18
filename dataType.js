// String - Text ko represent karta hai.
// let name = "Rahul";
// console.log(name); // Output: Rahul

// Number - Numbers, jaise age, marks aur price.
// let age = 20;
// let price = 99.5;
// console.log(age); // Output: 20
// console.log(price); // Output: 99.5

// // Boolean - Sirf true ya false.
// let isLoggedIn = true;
// console.log(isLoggedIn); // Output: true

// Undefined - Variable declare hua, lekin use abhi koi value assign nahi hui.
let result;
console.log(result); // Output: undefined

// Null - Jaanbujhkar khaali value indicate karna.
let selectedItem = null;
console.log(selectedItem); // Output: null

// Object aur related types - Multiple values ya structured data store karne ke kaam aate hain.
let student = { name: "Rahul" };
let colors = ["Red", "Blue"];
console.log(student); // Output: { name: "Rahul" }
console.log(colors); // Output: ["Red", "Blue"]

// Template Literals - Strings ko easily format karne ke liye.
let name = "Rahul";
let age = 20;
console.log(`My name is ${name} and I am ${age} years old.`); // Output: My name is Rahul and I am 20 years old.

// Arithmetic Operations - Numbers ke saath calculations karne ke liye.
let price = 100;
let quantity = 3;
let total = price * quantity;
console.log(total); // Output: 300
console.log(price * quantity); // Output: 300

// Special Values - Infinity aur NaN (Not a Number) jaise special values.
console.log(10 / 0); // Output: Infinity
console.log("hello" * 2); // Output: NaN (Not a Number)

// Comparison Operators - Values ko compare karne ke liye.
let isLoggedIn = true;
let hasPermission = false;

console.log(isLoggedIn); // Output: true
console.log(hasPermission); // Output: false

// Undefined - Variable declare hua, lekin use abhi koi value assign nahi hui.
let studentName;
console.log(studentName); // Output: undefined
console.log(typeof studentName); // Output: undefined

// Null - Jaanbujhkar khaali value indicate karna.
let selectedProduct = null;
console.log(selectedProduct); // Output: null
console.log(typeof selectedProduct); // Output: object (ye ek JavaScript ka quirk hai, null ka type object return karta hai)

// Type Checking - Variable ke type ko check karne ke liye.
console.log(typeof "Rahul"); // Output: string
console.log(typeof 25); // Output: number
console.log(typeof true); // Output: boolean
console.log(typeof undefined); // Output: undefined
console.log(typeof null); // Output: object

// Type Conversion - Ek type ko dusre type me convert karne ke liye.
let firstNumber = 100;
let secondNumber = "100";
console.log(typeof firstNumber); // Output: number
console.log(typeof secondNumber); // Output: string
console.log(firstNumber === Number(secondNumber)); // Output: true

// Example of using different data types together
const studentNamee = "Rahul";
let agee = 20;
const city = "Delhi";
let marks = 85;
let isPassed = marks >= 40;

console.log("Student Name:", studentNamee); // Output: Rahul
console.log("Age:", agee); // Output: 20
console.log("City:", city); // Output: Delhi
console.log("Marks:", marks); // Output: 85
console.log("Passed:", isPassed); // Output: true
console.log("Marks data type:", typeof marks); // Output: number
console.log("Passed data type:", typeof isPassed); // Output: boolean
