const fs = require("fs");
const path = require("path");

const bump = process.argv[2] || "patch";

if (!["patch", "minor", "major"].includes(bump)) {
  console.error("Usage: node scripts/bump.js [patch|minor|major]");
  process.exit(1);
}

const pkgPath = path.resolve(__dirname, "..", "package.json");
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));

const parts = pkg.version.split(".").map(Number);

if (bump === "major") {
  parts[0]++;
  parts[1] = 0;
  parts[2] = 0;
} else if (bump === "minor") {
  parts[1]++;
  parts[2] = 0;
} else {
  parts[2]++;
}

const next = parts.join(".");
pkg.version = next;

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");
console.log(next);
