// loop -> loop ka matlab hota hai ki koi kaam baar baar karna.
// Jaise ki agar humein 1 se 10 tak ke numbers print karne hain to hum loop ka use karenge.
// Loop ke do main types hote hain: for loop aur while loop.
// for loop ka syntax: for(initialization; condition; increment/decrement) { // code to be executed }

// without loop
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");

// with loop
for (let i = 0; i <= 5; i++) {
  console.log("Hello");
}
// output: Hello Hello Hello Hello Hello Hello
// i = 1 ka matlab hai ki loop 1 se start hoga aur
// i <= 5 ka matlab hai ki loop tab tak chalega jab tak i 5 se chhota ya barabar hai.
// i++ ka matlab hai ki har iteration ke baad i ki value 1 se badh jayegi.
// i++ ka matlab hai ki i = i + 1

let i = 1;
i++;
console.log(i);
// output: 2

// 1 se 10 tak ke numbers print karne ke liye hum for loop ka use karenge.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// output: 1 2 3 4 5 6 7 8 9 10

// 10 se 1 tak ke numbers print karne ke liye hum for loop ka use karenge.
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
// output: 10 9 8 7 6 5 4 3 2 1
// i-- , i=i-1

// 1 se 10 ke bich even number.
for (i = 2; i <= 10; i += 2) {
  console.log(i);
}
// output: 2 4 6 8 10
// i += 2 , i=i+2

// 1 se 10 ke bich odd number.
for (let i = 1; i <= 10; i += 2) {
  console.log(i);
}
// output: 1 3 5 7 9
// i += 2 , i=i+2

// table of 5
for (let i = 1; i <= 10; i++) {
  console.log(5 * i);
}
// output: 5 10 15 20 25 30 35 40 45 50

// proper table of 5
for (let i = 1; i <= 10; i++) {
  console.log("5 x " + i + " = " + 5 * i);
}

// or another simple approach
/*
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}
    */
