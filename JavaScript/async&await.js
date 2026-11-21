// ------------------------------------------- Async/Await -------------------------------------------- //
// Agar function ke aage async lagate hain to function Promise return karta hai.
// async → function ko asynchronous banata hai
// await → Promise ke result ka wait karta hai

async function test() {
  return "Success";
}
console.log(test()); // output: Promise { 'Success' }

// Real Automation Example ----------------------------------------------------------------------

// async function loginTest(page) {
//   await page.goto("https://example.com");
//   await page.locator("#username").fill("admin");
//   await page.locator("#password").fill("admin123");
//   await page.locator("#login").click();
// }
// goto -> wait for operation -> fill username -> wait -> fill password -> wait -> click

// Multiple await -------------------------------------------------------------------------------

// async function test() {
//   const user = await getUser();
//   const orders = await getOrders(user);
//   const result = await verifyOrders(orders);
//   console.log(result);
// }
// test();
// getUser() -> await -> getOrders() -> await -> verifyOrders() -> await -> result

// try...catch ke saath Async/Await ----------------------------------------------------------------
// async function testLogin() {
//   try {
//     const result = await login();

//     console.log(result);
//   } catch (error) {
//     console.log("Login failed:", error);
//   }
// }
/*
 await login()
     ↓
 ┌───┴────┐
 ↓        ↓
Success  Error
 ↓        ↓
try     catch
 */

// Automation Example ---------------------------------------------------------------------------------
// async function loginTest(page) {
//   try {
//     await page.goto("https://example.com");
//     await page.locator("#username").fill("admin");
//     await page.locator("#password").fill("admin123");
//     await page.locator("#login").click();
//     console.log("Login test completed");
//   } catch (error) {
//     console.log("Login test failed");
//     console.log(error);
//   }
// }
// async -> await -> await -> await -> try/catch

// Async function return ---------------------------------------------------------------------------------
async function getUser() {
  return "admin";
}
async function test1() {
  const user = await getUser();
  console.log(user);
}
test1();

// Async/Await + API Testing -----------------------------------------------------------------------------
// async function getUser() {
//   const response = await fetch("https://example.com/api/user");
//   const data = await response.json();
//   return data;
// }
// async function apiTest() {
//   const user = await getUser();
//   console.log(user);
// }
// API Request -> await response -> Response -> await response.json() -> JSON Data -> Assertions
// const response = await fetch(...); -> Response milne ke baad next statement execute karo.

// await ka matlab poore JavaScript program ko freeze kar dena nahi hai.
// await current async operation ka result milne tak us async function ke next step ko wait karwata hai.

// Playwright mein ye bahut dikhega ---------------------------------------------------------------------------

// async ({ page }) => {    -> Function asynchronous hai.
// await page.goto(...)     ->  Promise-based operation ka wait.
// Multiple awaits -> await page.locator(...).fill(...) , await page.locator(...).click(...)  -> Sequential automation steps.

/*

Promise style                      Async/Await
--------------	                   -----------------
.then()	                           await
.catch()	                       try/catch
chaining zyada ho sakti hai	       code sequential dikhta hai
valid approach	                   automation mein very common

*/
