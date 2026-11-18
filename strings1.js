// Real Testing Example ---------------------------------------------------------------------------------------
// Maan lo application se actual message mila:

// Actual
let actualMessage = "  Login successful  ";
// Expected
let expectedMessage = "Login successful";

// Validation
if (actualMessage.trim() === expectedMessage) {
  console.log("Login Test Passed");
} else {
  console.log("Login Test Failed");
}
// output: Login Test Passed

// URL Testing --------------------------------------------------------------------------------------------------
let url = "https://example.com/login";

if (url.startsWith("https://") && url.includes("/login")) {
  console.log("URL Test Passed");
} else {
  console.log("URL Test Failed");
}
// output: URL Test Passed

// Error Message Testing ----------------------------------------------------------------------------------------
let errorMessage = "Error: Invalid password";

if (errorMessage.includes("Invalid")) {
  console.log("Error validation passed");
} else {
  console.log("Error validation failed");
}
// output: Error validation passed

// String ko loop karna -----------------------------------------------------------------------------------------
let text = "hello";

for (let i = 0; i < text.length; i++) {
  console.log(text[i]);
}
// output: h e l l o

// String Reverse -----------------------------------------------------------------------------------------------
let text4 = "hello";
let reverse = "";

for (let i = text4.length - 1; i >= 0; i--) {
  reverse = reverse + text[i];
}

console.log(reverse); // output: olleh

// String Palindrome --------------------------------------------------------------------------------------------
// madam, level, radar
let texts = "madam";
let reverses = "";

for (let i = texts.length - 1; i >= 0; i--) {
  reverses = reverses + texts[i];
}

if (texts === reverses) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}
