import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  reporter: [["list"], ["allure-playwright"]],
  use: {
    baseURL: "https://jsonplaceholder.typicode.com",
    trace: "on",
  },
});
