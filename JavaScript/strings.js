// --------------------------------- String ------------------------------------- //
// String = text/data jo characters se milkar bana ho.

// let name = "Sudhir"; (Sudhir string hai)
// let message = "Login successful"; (Login successful string hai)

// String Indexing -------------------------------------------------------------------------
let name = "Sudhir";
console.log(name[0]); // output: S

// Character:  S  u  d  h  i  r
// Index:      0  1  2  3  4  5

// .length ----------------------------------------------------------------------------------
let username = "admin123";
console.log(username.length); // output: 8
console.log(username.length - 1); // Index - 7

// Password ki minimum length check karna:
let password = "admin123";

if (password.length >= 8) {
  console.log("Valid Password");
} else {
  console.log("Invalid Password");
}
// output: Valid Password

// toUpperCase() -----------------------------------------------------------------------------
let text = "login successful";
console.log(text.toUpperCase()); // output: LOGIN SUCCESSFUL

// toLowerCase() -----------------------------------------------------------------------------
let browser = "CHROME";
console.log(browser.toLowerCase()); // output: chrome

// trim() ------------------------------------------------------------------------------------
// trim() starting aur ending ke unnecessary spaces remove karta hai.
let text1 = "   Login successful   ";
console.log(text1.trim()); // output: Login successful

// includes() --------------------------------------------------------------------------------
// Check karta hai ki string ke andar particular text hai ya nahi.
let message = "Login successful";
console.log(message.includes("Login")); // output: true

// startsWith() -------------------------------------------------------------------------------
// Check karta hai ki string kisi particular text se start hoti hai ya nahi.
let url = "https://example.com/login";
console.log(url.startsWith("https://")); // output: true

// endsWith() ---------------------------------------------------------------------------------
// Check karta hai ki string kisi particular text par end hoti hai ya nahi.
let fileName = "test-report.pdf";
console.log(fileName.endsWith(".pdf")); // output: true

// indexOf() -----------------------------------------------------------------------------------
// String ke andar kisi text ka index return karta hai.
let message1 = "Login successful";
console.log(message1.indexOf("Login")); // output: 0

// slice() -------------------------------------------------------------------------------------
// String ka ek portion nikalne ke liye.
let text2 = "JavaScript";
console.log(text2.slice(0, 4)); // output: Java

// J a v a S c r i p t
// 0 1 2 3 4 5 6 7 8 9
// text.slice(0, 4)
// index 0 se start karo aur index 4 se pehle stop karo.

// split() --------------------------------------------------------------------------------------
// String ko array mein convert karta hai.
let browsers = "Chrome,Firefox,Edge";
let result = browsers.split(",");
console.log(result); // output: [ 'Chrome', 'Firefox', 'Edge' ]
console.log(result[0]); // output: Chrome

// replace() ------------------------------------------------------------------------------------
let message2 = "Login failed";
let result2 = message2.replace("failed", "successful");
console.log(result2); // output: Login Successful

// replaceAll() ---------------------------------------------------------------------------------
let text3 = "test test test";
console.log(text3.replaceAll("test", "pass")); // output: pass pass pass

// Template Literals ----------------------------------------------------------------------------
// Backtick ` ka use hota hai.
let username1 = "Sudhir";
console.log(`Welcome ${username1}`); // output: Welcome Sudhir
