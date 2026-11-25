// ----------------------------------------- Selectors & Locators ------------------------------------------ //

// Selectors ---------------------------------------------------------------------------------
Selector ek pattern hai jisse hum HTML element ko identify karte hain.
Example:
<input id="username">
Isko ID se identify:
"#username"

const username = page.locator("#username");
await username.fill("admin");

page → browser page
locator() → element find karta hai
#username → selector
fill() → input mein value enter karta hai

// Playwright ke important locators -----------------------------------------------------------
getByRole()
await page.getByRole("button", { name: "Login" }).click();

getByLabel()
await page.getByLabel("Username").fill("admin");

getByText()
page.getByText("Welcome");

getByPlaceholder()
page.getByPlaceholder("Enter username");

getByTestId()
page.getByTestId("login-button");

XPath
page.locator("//button[@id='login']");

// Multiple elements ------------------------------------------------------------------------------
// HTML
<button>Delete</button>
<button>Delete</button>
<button>Delete</button>

// JavaScript
page.getByRole("button", { name: "Delete" });

locator.first()
locator.last()
locator.nth()

// Locator chaining --------------------------------------------------------------------------------
Suppose:

<div class="user-card">
    <h2>Sudhir</h2>
    <button>Delete</button>
</div>

Hum pehle card locate kar sakte hain:
const card = page.locator(".user-card");

Phir uske andar button:
const deleteButton = card.getByRole("button", {
name: "Delete"
});

Isko locator chaining bolte hain.
