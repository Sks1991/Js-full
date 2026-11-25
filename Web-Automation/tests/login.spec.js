const { test, expect } = require("@playwright/test");

test("Forms Lab test", async ({ page }) => {
  // Open website
  await page.goto("http://127.0.0.1:5500/Web-Automation/demo-app/index.html"); // open website

  await page.getByLabel("Username").fill("admin"); // Enter username
  await page.getByLabel("Password").fill("admin123"); // Enter password
  await page.getByRole("button", { name: "Sign In" }).click(); // click on login

  await expect(page.locator("#app")).toBeVisible(); // Assertion

  await expect(page.locator("#dashboard")).toBeVisible(); // Dashboard visible

  // --------------------------------------------- Forms ------------------------------------------------------------- //
  // Forms Lab open
  await page.getByRole("button", { name: "Forms Lab" }).click();

  // Text
  await page.getByLabel("Full Name").fill("Sudhir Kumar");

  // Email
  await page.getByLabel("Email").fill("test@gmail.com");

  // Age
  await page.getByLabel("Age").fill("25");

  // Date of birth
  await page.getByLabel("Date of Birth").fill("1991-03-10");

  // Department Dropdown
  await page.getByLabel("Department").selectOption("QA");

  // Skills (Multi-select)
  await page
    .getByLabel("Skills (Multi-select)")
    .selectOption(["Playwright", "JavaScript", "API Testing"]);

  // Radio Experience Level

  await page.getByLabel("Mid").check();

  // Checkbox
  await page.getByLabel("Automation").check();
  await page.getByLabel("API").check();

  // Textarea (bio)
  await page.getByLabel("About You").fill("I am a QA Automation Engineer.");

  // Slider ko specific value (jaise 10) par set karne ke liye
  await page.locator("#experienceRange").fill("4");

  // Save Profile
  await page.getByRole("button", { name: "Save Profile" }).click();

  // ------------------------------------------ Advanced Lab --------------------------------------------------- //

  // Select Advance Lab
  await page.getByRole("button", { name: "Advanced Lab" }).click();

  // Click On Modal & Toast
  await page.getByRole("button", { name: "Open Modal" }).click();
  await page.locator("#modalConfirmBtn").click();

  // Click on show toast
  await page.getByRole("button", { name: "Show Toast" }).click();

  // Loading & Disabled
  await page.getByRole("button", { name: "Load Data" }).click();

  await expect(
    page.getByRole("button", { name: "Disabled Button" }),
  ).toBeDisabled();

  // Dialogs
  await page.getByRole("button", { name: "Show Alert" }).click();

  await page.getByRole("button", { name: "Show Confirm" }).click();

  // Mouse Hover
  await page.locator(".hover-target").hover();

  // File Upload
  await page
    .locator("#fileUpload")
    .setInputFiles("C:/Users/sudhi/OneDrive/Desktop/download.jpg");

  // Download
  await page.locator("#downloadBtn").click();

  //New Tab
  await page.locator("#newTabBtn").click();

  // Keyboard Input
  await page.locator("#keyboardInput").fill("This is my QA learning..........");
  await page.locator("#keyboardInput").press("Enter");

  // Iframe Input & Submit
  const frame = page.frameLocator("iframe");
  await frame.getByPlaceholder("Frame input").fill("Hello");
  await frame.getByRole("button", { name: "Submit" }).click();
});
