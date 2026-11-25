// ------------------------------------- Browser Automation --------------------------------------- //

Normally user:
Browser open
↓
Website open
↓
Username enter
↓
Password enter
↓
Login click
↓
Result check

Automation mein ye kaam code karta hai.
Automation Script
↓
Browser
↓
Website
↓
Action
↓
Validation

Example:
await page.goto("https://example.com");
await page.getByLabel("Username").fill("admin");
await page.getByLabel("Password").fill("admin123");
await page.getByRole("button", { name: "Login" }).click();

Browser kya hai? ----------------------------------------------------------------------------------
Browser = Chrome, Firefox, Edge etc.

Automation tool browser ko control karta hai.
Playwright
↓
Browser
↓
Website

Example conceptually:
const browser = await playwright.chromium.launch();

Browser Context kya hai? ---------------------------------------------------------------------------------
Browser Context = isolated browser session/profile.
Browser
├── Context 1 → Admin
└── Context 2 → User

Page kya hai? -----------------------------------------------------------------------------------------
Page = browser ke andar ek tab.
Browser
↓
Context
↓
Page / Tab

Page 1 → Google
Page 2 → Amazon
Page 3 → Gmail

Browser → Context → Page --------------------------------------------------------------------------------
Browser
↓
Browser Context
↓
Page
↓
Website
↓
Elements

Navigation ---------------------------------------------------------------------------------------------
Page ko website par le jaana:
await page.goto("https://example.com");

Back
await page.goBack();

Forward
await page.goForward();

Reload
await page.reload();

Ye browser ke normal buttons ke equivalent hain.

Common Browser Actions ----------------------------------------------------------------------------
Click
await page.getByRole("button", {
name: "Login"
}).click();

Fill
await page.getByLabel("Username").fill("admin");

Select
await page.getByLabel("Browser").selectOption("chrome");

Hover
await page.getByText("Products").hover();

Keyboard
await page.keyboard.press("Enter");

Wait kya hota hai? --------------------------------------------------------------------------------
Suppose:
Page open
↓
API call chal rahi hai
↓
Data load hota hai
↓
Button appear hota hai

Agar automation turant button click karegi:
Button abhi available nahi
↓
Test fail ❌

Isliye synchronization important hai.

Bad approach:
await page.waitForTimeout(5000);

Har jagah blindly use karna ❌

Better:
await page.getByRole("button", {
name: "Login"
}).click();
Playwright ko actionability/synchronization handle karne do.

1.  Browser start
    ↓
2.  Page open
    ↓
3.  Website navigate
    ↓
4.  Element locate
    ↓
5.  Action perform
    ↓
6.  Wait / synchronization
    ↓
7.  Result validate
    ↓
8.  Test Pass / Fail

                 BROWSER
                    │
          ┌─────────┴─────────┐
          │                   │

    Context 1 ------------- Context 2
    │ │
    Page 1 ---------------- Page 2
    │ │
    Website --------------- Website
    │
    Locator
    │
    Action
    │
    Validation
    │
    PASS / FAIL
