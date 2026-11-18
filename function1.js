//----------------------------------Return-------------------------------//
// console.log(): Sirf screen/console par result dikhata hai.
// return: Function se value bahar bhejta hai.

function add(a, b) {
  return a + b;
}
let result = add(10, 20);
// ab result ke andar 30 hai isko print karenge console.log(result) to output: 30 ayega.

// Square
function square(number) {
  return number * number;
}
let result1 = square(5);
console.log(result1); // output: 25
console.log(square(5)); // output: 25
console.log(square(10)); // output: 100

//Cube
function cube(number) {
  return number * number * number;
}
console.log(cube(5));

//----------------------------------Even/Odd Function-------------------------------//
function checkEvenOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(checkEvenOdd(10)); // output: Even
console.log(checkEvenOdd(7)); // output: Odd

//----------------------------------Prime Number Function-------------------------------//
function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(7));
console.log(isPrime(10));
console.log(isPrime(15));
console.log(isPrime(17));

//----------------------------------Factorial Function-------------------------------//
function factorial(number) {
  let result = 1;

  for (let i = 1; i <= number; i++) {
    result = result * i;
  }
  return result;
}
console.log(factorial(5)); // output: 120
