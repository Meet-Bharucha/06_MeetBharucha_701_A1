// Global variable
global.customMessage = "🌍 Hello from global object!";

// 1. __dirname and __filename
console.log("Current directory:", __dirname);
console.log("Current file:", __filename);

// 2. Using console
console.log("Console log");
console.warn("Console warning");
console.error("Console error");

// 3. Using process object
console.log("Process ID:", process.pid);
console.log("Node version:", process.version);
console.log("Platform:", process.platform);
console.log("Env variables:", process.env.NODE_ENV || 'not set');

// 4. Using setTimeout and setInterval
setTimeout(() => {
  console.log("This runs after 2 seconds (setTimeout)");
}, 2000);

let count = 0;
const intervalId = setInterval(() => {
  console.log(`Interval running... Count: ${++count}`);
  if (count === 3) {
    clearInterval(intervalId);
    console.log("Interval cleared");
  }
}, 1000);

// 5. Using Buffer (binary data)
const buf = Buffer.from("Node.js is cool!");
console.log("Buffer content:", buf);
console.log("Buffer to string:", buf.toString());

// 6. Using global object directly
console.log("Global custom message:", global.customMessage);
