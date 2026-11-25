// -------------------------------------- Fetch & API Testing ------------------------------------------- //

fetch() kya hai? -------------------------------------------------------------------------------
fetch() JavaScript ka method hai jisse hum HTTP request bhej sakte hain.

Simple flow:
JavaScript
↓
fetch()
↓
API Request
↓
Server
↓
Response

Example:
const response = await fetch("https://example.com/api/users");

Yahan fetch() server ko request bhej raha hai.

Response kya milta hai? ------------------------------------------------------------------------
const response = await fetch(url);

console.log(response.status);

Agar successful response hai:
200

Response ka JSON data ------------------------------------------------------------------------------
API ka response generally JSON format mein hota hai.

Isliye:
const data = await response.json();

Complete:
const response = await fetch("https://example.com/api/users");
const data = await response.json();
console.log(data);

Concept:
fetch()
↓
Response
↓
response.json()
↓
JavaScript Object

GET API ---------------------------------------------------------------------------------------
GET request ka basic example:
async function getUsers() {
const response = await fetch("https://example.com/api/users");
console.log("Status:", response.status);
const data = await response.json();
console.log(data);
}
getUsers();

async function getUsers()
Async function because API operation asynchronous hai.

await fetch(...)

API response ka wait.
response.status

Status code.
response.json()

Response body ko JSON se JavaScript object mein convert karta hai.

Response body validate karna -------------------------------------------------------------------
Suppose response:
{
"id": 101,
"name": "Sudhir",
"role": "tester"
}

Hum check kar sakte hain:
if (data.role === "tester") {
console.log("Role validation passed");
}

Ya:
if (data.name === "Sudhir") {
console.log("Name validation passed");
}

POST Request 🔥 ---------------------------------------------------------------------------------
GET mein generally data retrieve karte hain.
POST mein data bhejte hain.

async function createUser() {
const response = await fetch("https://example.com/api/users", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
name: "Sudhir",
role: "tester"
})
});
const data = await response.json();
console.log("Status:", response.status);
console.log("Response:", data);
}
createUser();

Yahan 4 important things:
method
headers
body
JSON.stringify()

JSON.stringify() kyu? ----------------------------------------------------------------------------------
JavaScript object:
const user = {
name: "Sudhir",
role: "tester"
};

API request body ke liye:
JSON.stringify(user);

JavaScript object → JSON string
JS Object
↓
JSON.stringify()
↓
JSON String

Headers -------------------------------------------------------------------------------------------------
POST request mein:
headers: {
"Content-Type": "application/json"
}

Meaning:
Main server ko JSON data bhej raha hoon.

Authorization bhi ho sakta hai:
headers: {
"Content-Type": "application/json",
"Authorization": "Bearer abc123"
}

Error Handling 🔥 -----------------------------------------------------------------------------------------
API fail ho sakti hai, isliye:
async function getUser() {
try {
const response = await fetch("https://example.com/api/user");
if (!response.ok) {
throw new Error("API failed: " + response.status);
}
const data = await response.json();
console.log(data);
} catch (error)
console.log("API Test Failed:", error.message);
}
}
Important:
response.ok

Generally successful HTTP status range ke liye true hota hai.

Real API Test Flow 🔥🔥 ------------------------------------------------------------------------------------
Send Request
↓
Receive Response
↓
Check Status Code
↓
Check Response Body
↓
Check Headers
↓
Check Business Data
↓
PASS / FAIL

Example:
if (response.status !== 200) {
throw new Error("Expected 200");
}

if (data.role !== "admin") {
throw new Error("Role mismatch");
}

console.log("API Test Passed");
