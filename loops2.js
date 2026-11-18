// for loop including if statement

//1 se 10 tak numbers mein sirf even numbers print karna.
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// output: 2 4 6 8 10

// while loop

// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }
//output: 1 2 3 4 5

// for vs while
// for: Jab humein pata ho ki counting/repetition ka structure kya hai
//while: Jab loop kisi condition ke based par chalana convenient ho

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }
// output: 1 2 3 4 5 6 7 8 9 10

// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }
// output: 1 2 3 4 5 6 7 8 9 10

//do.....while
// let i1 = 1;

// do {
//   console.log(i1);
//   i1++;
// } while (i1 <= 5);

// while vs do...while
// while: Pehle condition check hoti hai.
// do...while: Pehle code execute hota hai, phir condition check hoti hai.

let i = 10;

while (i < 5) {
  console.log(i);
}
// Nothing kyuki 10 < 5 false statement hai.

let i2 = 10;

do {
  console.log(i2);
} while (i2 < 5);
// output: 10, Kyunki do...while mein code kam se kam ek baar execute hota hai.
