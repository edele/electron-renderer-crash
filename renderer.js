const { logMemory } = require("./logMemory.js");
let arr = [];

setInterval(e => {
  for (let i = 0; i < 5000; i++) {
    arr.push("x".repeat(100 * 1024 * 1024));
  }

  logMemory();
});

logMemory();
