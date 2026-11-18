// Loop :--> Loop ka use same code ko baar-baar execute karne ke liye hota hai.
// for (let i = 1; i <= 5; i++) :--> (initialization; condition; update).
// i++ :--> i = i + 1.
// break :--> loop ko completely stop kar deta hai.
// continue :--> current iteration ko skip karta hai aur next iteration par chala jata hai.
// while :--> mein condition pehle check hoti hai.
// do...while :--> mein code pehle execute hota hai aur condition baad mein check hoti hai.
// Infinite loop :--> Aisa loop jo kabhi terminate/stop nahi hota.

// Examples for these loops

// for
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// while
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
// output: 1 2 3 4 5

// do while
let i1 = 1;
do {
  console.log(i1);
  i1++;
} while (i1 <= 5);
// output: 1 2 3 4 5

// break
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
// output: 1 2 3 4 5

// continue
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
// output: 1 2 3 4 5
