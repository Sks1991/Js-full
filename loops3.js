// break
// Loop ko turant stop kar do.
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
// output: 1 2 3 4 , kyuki i === 5 aaya loop break ho gaya.

// continue
// Current iteration ko skip karta hai aur next iteration par chala jata hai.
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
// output: 1 2 4 5, i === 3 hai isliye continue; 3 ko skip karke aage badh gaya.

// break vs continue
// break: Pura loop stop
// continue: Sirf current iteration skip.

// Nested Loop
// Loop ke andar loop ko nested loop kehte hain.
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i, j);
  }
}

// sum of 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum = sum + i;
}
console.log(sum);
// output: 5050

// square of 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i * i);
}
// 1 4 9 16 25 36 49 64 81 100

// cube of 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i * i * i);
}
// 1 8 27 64 125 216 343 512 729 1000

// sum of 1 to 10 even numbers
let sum1 = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    sum1 = sum1 + i;
  }
}
console.log(sum1);
// output: 30

for (let table = 1; table <= 10; table++) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${table} x ${i} = ${table * i}`);
  }
  console.log("----------------");
}
