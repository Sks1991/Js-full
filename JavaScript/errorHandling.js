// ------------------------------------------- Error Handling ------------------------------------------- //
// Error -> Jab JavaScript program ko koi aisi situation milti hai jise wo normally execute nahi kar sakta, to error aa sakta hai.

// let result = 10 / 0;
// console.log(result); // output: Infinity (Ye JavaScript mein Infinity de sakta hai, error nahi.)

// console.log(username); // output: (ReferenceError: username is not defined.)
/*
 
Error Handling ki zarurat kyun?
Maan lo automation test mein:
login(); searchProduct(); addToCart(); payment();
Agar searchProduct() mein error aa gaya, to baaki steps execute nahi ho sakte.
Error handling se hum failure ko controlled way mein handle kar sakte hain.

*/

// try...catch ----------------------------------------------------------------------------------

//      try {
//          // risky code
//      } catch (error) {
//          // error handle
//      }

try {
  console.log(username);
} catch (error) {
  console.log("Error occurred"); // output: Error occurred
}
// Program crash hone ke bajay catch execute hua.

// try {
//   console.log(username);
// } catch (error) {
//   console.log(error.message); // output: username is not defined ((error.message)Error pata karne ke liye)
// }

// finally -------------------------------------------------------------------------------------------
// finally chahe error aaye ya na aaye, normally execute hota hai.
try {
  console.log("Test started");
} catch (error) {
  console.log("Error occurred");
} finally {
  console.log("Test finished");
}
// Agar error aaye:
// Test started
// Error occurred
// Test finished

// Agar error na aaye:
// Test started
// Test finished

// throw -----------------------------------------------------------------------------------------------
// Kabhi-kabhi JavaScript error automatically nahi deta, lekin testing condition ke according hume khud failure generate karna hota hai.
// let statusCode = 500;
// if (statusCode !== 200) {
//   throw new Error("API request failed"); // Yahan humne manually error throw kiya.
// }

// throw + try...catch ----------------------------------------------------------------------------------
try {
  let statusCode = 500;
  if (statusCode !== 200) {
    throw new Error("API request failed");
  }
  console.log("API Test Passed");
} catch (error) {
  console.log("API Test Failed"); // output: API Test Failed
  console.log(error.message); // output: API request failed
}

// Async/Await + Error Handling -----------------------------------------------------------------------------
// async function loginTest() {
//   try {
//     const result = await login();
//     console.log(result);
//   } catch (error) {
//     console.log("Login failed:", error.message);
//   }
// }

// finally with automation ----------------------------------------------------------------------------------------
try {
  console.log("Test execution");
} catch (error) {
  console.log("Test failed");
} finally {
  console.log("Cleanup");
}
// output: Test execution , Cleanup

// try       → risky code
// catch     → error handle
// finally   → always-run cleanup
// throw     → manually error create
// Error()   → error object
// message   → error ka readable message
