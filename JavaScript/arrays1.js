//--------------------------------Array With Loop------------------------------------//

let numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
// output: 10 20 30 40 50

//--------------------------------Sum Of Array------------------------------------//

let numbers1 = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < numbers1.length; i++) {
  sum = sum + numbers1[i];
}

console.log("Sum =", sum);
// output: Sum = 150.

//--------------------------------Average Of Array------------------------------------//

let marks1 = [80, 70, 90, 60, 100];
let sum1 = 0;

for (let i = 0; i < marks1.length; i++) {
  sum1 = sum1 + marks1[i];
}
let average = sum1 / marks1.length;
console.log("Average =", average);
// output: Average = 80.

//--------------------------------Even Number Of Array------------------------------------//

let num = [10, 15, 20, 25, 30, 35];

for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 === 0) {
    console.log(num[i]);
  }
}
// output:10 20 30

//--------------------------------Maximun Number Of Array------------------------------------//

let number = [10, 50, 30, 90, 20];
let max = number[0];

for (let i = 1; i < number.length; i++) {
  if (number[i] > max) {
    max = number[i];
  }
}
console.log("Maximum =", max);
// output: Maximum = 90.

//--------------------------------Minimun Number Of Array------------------------------------//

let numb = [10, 50, 30, 90, 20];
let min = numb[0];

for (let i = 1; i < numb.length; i++) {
  if (numb[i] < min) {
    min = numb[i];
  }
}
console.log("Minimum =", min);
// output: Minimum = 10.

//--------------------------------Search Particular Value In Array------------------------------------//

let number1 = [10, 20, 30, 40, 50];
let target = 30;
let found = false;

for (let i = 0; i < number1.length; i++) {
  if (number1[i] === target) {
    found = true;
    break;
  }
}
if (found) {
  console.log("Number found");
} else {
  console.log("Number not found");
}
// output: Number found

//---------------------------String Array----------------------------//

let names = ["Rahul", "Amit", "Sudhir", "Vikas"];

for (let i = 0; i < names.length; i++) {
  console.log("Hello " + names[i]);
}
// output: Hello Rahul  Hello Amit  Hello Sudhir  Hello Vikas

//---------------------------Mixed Array----------------------------//
// Technically allowed hai.Lekin real projects me generally array ke elements ko logically related rakhna better hota hai.

let data = ["Sudhir", 25, true, 90];
console.log(data);
// output: [ 'Sudhir', 25, true, 90 ]

//---------------------------Nested Array----------------------------//

let numbers2 = [
  [10, 20],
  [30, 40],
  [50, 60],
];
console.log(numbers2[0]); // output: [ 10, 20 ]
console.log(numbers2[0][0]); // output: 10.
