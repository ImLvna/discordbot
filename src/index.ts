import { registerCallback } from "./healthcheck";

console.log("Hello, world");

// Register the healthcheck callback
registerCallback(() => {
  return true;
});
