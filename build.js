const fs = require("node:fs");
const path = require("node:path");

const dist = path.join(__dirname, "dist");

fs.mkdirSync(dist, { recursive: true });
fs.copyFileSync(
  path.join(__dirname, "index.js"),
  path.join(dist, "index.js")
);

console.log("Build completed successfully.");
