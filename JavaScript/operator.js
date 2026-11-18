//Operator & operand

//Operator ek symbol hai jo kisi operation ko perform karta hai.
//10 aur 5 operands hain — jin values par operation hota hai.
//+ ek operator hai — jo addition ka kaam karta hai.
//10 + 5 ek expression hai — jiska result 15 hai.

let result = 10 + 5;
console.log(result);

//Arithmetic operators

let price = 250;
let quantity = 4;
let total = price * quantity;
console.log("Total bill:", total);

console.log(12 % 3); // 0
console.log(14 % 4); // 2
console.log(17 % 5); // 2

//Yeh operator even/odd number check karne mein bhi kaam aata hai.
console.log(8 % 2); // 0
console.log(7 % 2); // 1

let score = 10;
score = 20;
console.log(score); // 20

//Assignment operators

let balance = 1000;

balance += 500;
console.log(balance); // 1500

balance -= 200;
console.log(balance); // 1300

balance *= 2;
console.log(balance); // 2600

balance /= 2;
console.log(balance); // 1300

balance %= 300;
console.log(balance); // 100

//Comparison operators

let marks = 75;

console.log(marks >= 40); // true
console.log(marks < 40); // false
console.log(marks === 75); // true
console.log(marks !== 75); // false

// == (loose equality) comparison se pehle kuch values ka type convert kar sakta hai.
// === (strict equality) value aur type dono check karta hai. Number 5 aur string "5" ka type alag hai, isliye result false.

console.log(5 == "5"); // true
console.log(5 === "5"); // false

//logical operators

// && (AND) operator dono conditions true hone par hi true return karta hai.
// || (OR) operator dono conditions mein se koi ek true hone par true return karta hai.

let markss = 85;
let attendance = 90;

console.log(markss >= 80 && attendance >= 75); // true
console.log(markss >= 90 && attendance >= 95); // false

console.log(markss >= 80 || attendance >= 95); // true
console.log(!(markss >= 80)); // false
console.log(!(markss < 80)); // true
console.log(!(markss >= 80 && attendance >= 75)); // false
console.log(!(markss >= 90 && attendance >= 95)); // true

//NOT (!) operator ek condition ko reverse karta hai.
console.log(!true); // false
console.log(!false); // true

//Short-circuiting
//Logical operators sirf true ya false tak limited nahi hain. JavaScript mein && aur || operand ki actual value bhi return kar sakte hain.

console.log("Hello" && "World"); // "World" return karega kyunki dono operands true hain.
console.log("" || "Default Name"); // "Default Name" return karega kyunki pehla operand false hai (empty string).

//Increment and decrement operators
// ++ operator variable ki value ko 1 se increment karta hai.
// -- operator variable ki value ko 1 se decrement karta hai.
// Prefix increment/decrement: value ko pehle increment/decrement karega, phir use return karega.
// Postfix increment/decrement: value ko pehle return karega, phir increment/decrement karega.
let count = 5;
console.log(++count); // 6 (prefix increment)
console.log(count++); // 6 (postfix increment, count ab 7 ho gaya hai)
console.log(count); // 7
console.log(--count); // 6 (prefix decrement)
console.log(count--); // 6 (postfix decrement, count ab 5 ho gaya hai)
console.log(count); // 5

//Ternary operator
//Ternary operator ek shorthand conditional operator hai. Yeh teen operands leta hai: condition, true value, aur false value.
//Syntax: condition ? value_if_true : value_if_false

let marksss = 65;
let resultt = marksss >= 40 ? "Pass" : "Fail";
console.log(resultt); // "Pass" return karega kyunki marksss 40 se zyada hai.

//Operator precedence
//Operator precedence define karta hai ki expressions mein operators kaunse order mein evaluate honge. Higher precedence wale operators pehle evaluate hote hain.

console.log(10 + 5 * 2); // 20 (multiplication pehle hoga)
console.log((10 + 5) * 2); // 30 (parentheses ke andar wala expression pehle evaluate hoga)
console.log(20 - 4 / 2); // 18 (division pehle hoga)
console.log((20 - 4) / 2); // 8 (parentheses ke andar wala expression pehle evaluate hoga)
console.log(2 ** (3 ** 2)); // 512 (exponentiation right to left evaluate hota hai, pehle 3 ** 2 = 9, phir 2 ** 9 = 512)

//Type conversion aur operators
//JavaScript mein operators ke saath type conversion hoti hai. Agar operands ka type alag hai, toh JavaScript unhe convert karke operation perform karta hai.
let pricee = "100";
console.log(typeof pricee); // "string" return karega
let numericPrice = Number(pricee); // string ko number mein convert karega
console.log(numericPrice); // 100 return karega
console.log(typeof numericPrice); // "number" return karega

let str = 50;
console.log(typeof str); // "number" return karega
let stringValue = String(str); // number ko string mein convert karega
console.log(stringValue); // "50" return karega
console.log(typeof stringValue); // "string" return karega

let a = "10";
let b = "5";
console.log(a + b); // "105" return karega kyunki dono operands string hain, aur + operator string concatenation karta hai.
console.log(Number(a) + Number(b)); // 15 return karega kyunki dono operands number mein convert ho gaye hain aur + operator addition perform karega.

console.log(Number("hello")); // NaN (Not a Number) kyunki "hello" ko number mein convert nahi kiya ja sakta.
console.log(Number("123")); // 123

//Practice problems
const num1 = 20;
const num2 = 5;

const addition = num1 + num2;
const subtraction = num1 - num2;
const multiplication = num1 * num2;
const division = num1 / num2;

console.log("Addition:", addition); // 25
console.log("Subtraction:", subtraction); // 15
console.log("Multiplication:", multiplication); // 100
console.log("Division:", division); // 4
console.log("Is num1 greater than num2?", num1 > num2); // true
console.log("Are both numbers equal?", num1 === num2); // false
