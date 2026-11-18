//------------------------------Right Triangle Pattern--------------------------//
for (let i = 1; i <= 5; i++) {
  let pattern = "";

  for (let j = 1; j <= i; j++) {
    pattern = pattern + "*";
  }
  console.log(pattern);
}
// *
// **
// ***
// ****
// *****

//------------------------------Square Pattern--------------------------//
for (let i = 1; i <= 5; i++) {
  let pattern = "";

  for (let j = 1; j <= 5; j++) {
    pattern = pattern + "*";
  }
  console.log(pattern);
}
// *****
// *****
// *****
// *****
// *****

//------------------------------Reverse Triangle--------------------------//
for (let i = 5; i >= 1; i--) {
  let pattern = "";

  for (let j = 1; j <= i; j++) {
    pattern = pattern + "*";
  }
  console.log(pattern);
}
// *****
// ****
// ***
// **
// *

//------------------------------Number Triangle--------------------------//
for (let i = 1; i <= 5; i++) {
  let pattern = "";

  for (let j = 1; j <= i; j++) {
    pattern = pattern + j;
  }
  console.log(pattern);
}
// 1
// 12
// 123
// 1234
// 12345

//------------------------------Same Number Pattern--------------------------//
for (let i = 1; i <= 5; i++) {
  let pattern = "";

  for (let j = 1; j <= i; j++) {
    pattern = pattern + i;
  }
  console.log(pattern);
}
// 1
// 22
// 333
// 4444
// 55555

//------------------------------Number Square--------------------------//
for (let i = 1; i <= 5; i++) {
  let pattern = "";

  for (let j = 1; j <= 5; j++) {
    pattern = pattern + j;
  }
  console.log(pattern);
}
// 12345
// 12345
// 12345
// 12345
// 12345

//------------------------------Inverted Number Triangle--------------------------//
for (let i = 5; i >= 1; i--) {
  let pattern = "";

  for (let j = 1; j <= i; j++) {
    pattern = pattern + j;
  }
  console.log(pattern);
}
// 12345
// 1234
// 123
// 12
// 1

//------------------------------Pyramid Pattern--------------------------//
for (let i = 1; i <= 5; i++) {
  let pattern = "";

  for (let j = 1; j <= 5 - i; j++) {
    pattern = pattern + " ";
  }

  for (let j = 1; j <= 2 * i - 1; j++) {
    pattern = pattern + "*";
  }
  console.log(pattern);
}
//     *
//    ***
//   *****
//  *******
// *********

//------------------------------Inverted Pyramid Pattern--------------------------//
for (let i = 5; i >= 1; i--) {
  let pattern = "";

  for (let j = 1; j <= 5 - i; j++) {
    pattern = pattern + " ";
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    pattern = pattern + "*";
  }
  console.log(pattern);
}
// *********
//  *******
//   *****
//    ***
//     *

//------------------------------Character Pattern--------------------------//
for (let i = 1; i <= 5; i++) {
  let pattern = "";
  for (let j = 0; j < i; j++) {
    pattern = pattern + String.fromCharCode(65 + j);
  }
  console.log(pattern);
}
// A
// AB
// ABC
// ABCD
// ABCDE
