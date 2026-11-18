//----------------------------Factorial-----------------------------//

let n = 5;
let factorial = 1;

for (let i = 1; i <= n; i++) {
  factorial = factorial * i;
}
console.log("Factorial =", factorial);
// output: 120

//----------------------------Reverse a number-----------------------------//

let n1 = 12345;
let reverse = 0;

while (n1 > 0) {
  let digit = n1 % 10;
  reverse = reverse * 10 + digit;
  n1 = Math.floor(n1 / 10);
}
console.log("Reverse =", reverse);
// output: 54321

//----------------------------Palindrome Number-----------------------------//
// Jo number reverse karne ke baad bhi same rahe.(121, 1221, 12321)

let n2 = 121;
let original = n2;
let reverse2 = 0;

while (n2 > 0) {
  let digit = n2 % 10;
  reverse2 = reverse2 * 10 + digit;
  n2 = Math.floor(n2 / 10);
}
if (original === reverse2) {
  console.log("Palindrome Number");
} else {
  console.log("Not a Palindrome Number");
}

//----------------------------Armstrong Number-----------------------------//
// Har digit ka cube nikalo aur sabko add karo. Agar original number ke equal aaye, to Armstrong number.(153, 370, 371, 407)

let n3 = 153;
let original3 = n3;
let sum = 0;

while (n3 > 0) {
  let digit = n3 % 10;
  sum = sum + digit * digit * digit;
  n3 = Math.floor(n3 / 10);
}
if (sum === original3) {
  console.log("Armstrong Number");
} else {
  console.log("Not an Armstrong Number");
}

//----------------------------Strong Number-----------------------------//
// Har digit ka factorial nikalo aur un factorials ka sum original number ke equal hona chahiye.(145)

let n4 = 145;
let original5 = n4;
let sum5 = 0;

while (n4 > 0) {
  let digit = n4 % 10;
  let factorial = 1;
  for (let i = 1; i <= digit; i++) {
    factorial = factorial * i;
  }
  sum5 = sum5 + factorial;
  n4 = Math.floor(n4 / 10);
}
if (sum5 === original5) {
  console.log("Strong Number");
} else {
  console.log("Not a Strong Number");
}

//----------------------------Prime Number-----------------------------//
// Prime number wo number hai jo Sirf 1 aur khud se divisible ho.(1 is not a prime number)

let n6 = 7;
let count = 0;
for (let i = 1; i <= n6; i++) {
  if (n6 % i === 0) {
    count++;
  }
}
if (count === 2) {
  console.log("Prime Number");
} else {
  console.log("Not a Prime Number");
}

//----------------------------Factors of a number-----------------------------//
let n7 = 12;

for (let i = 1; i <= n7; i++) {
  if (n7 % i === 0) {
    console.log(i);
  }
}
// output: 1 2 3 4 6 12

//----------------------------Count Digits-----------------------------//
let n8 = 12345;
let count1 = 0;

while (n8 > 0) {
  count1++;
  n8 = Math.floor(n8 / 10);
}
console.log("Digits =", count1);
// output: Digits = 5

//----------------------------Sum of digits-----------------------------//
let n9 = 12345;
let sum2 = 0;

while (n9 > 0) {
  let digit = n9 % 10;
  sum2 = sum2 + digit;
  n9 = Math.floor(n9 / 10);
}
console.log("Sum =", sum2);
// output: Sum = 15

//----------------------------Product of Digits-----------------------------//
let x = 1234;
let product = 1;

while (x > 0) {
  let digit = x % 10;
  product = product * digit;
  x = Math.floor(x / 10);
}
console.log("Product =", product);
// output: Product = 24

//----------------------------Perfect number-----------------------------//
//Jinke proper factors ka sum original number ke equal hota hai.(6)
let y = 6;
let sum3 = 0;

for (let i = 1; i < y; i++) {
  if (y % i === 0) {
    sum3 = sum3 + i;
  }
}
if (sum3 === y) {
  console.log("Perfect Number");
} else {
  console.log("Not a Perfect Number");
}

//----------------------------Fibonacci Series-----------------------------//
// (next = first + second) (0 1 1 2 3 5 8 13 21 34)
let first = 0;
let second = 1;

for (let i = 1; i <= 10; i++) {
  console.log(first);
  let next = first + second;
  first = second;
  second = next;
}
