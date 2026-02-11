const fs = require("fs");
const { marked } = require("marked");

const md = fs.readFileSync("README.md", "utf-8");
const body = marked.parse(md);

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>neat.style — One line to make any HTML page beautiful</title>
  <meta name="description" content="A classless CSS framework. One line of code to make any raw HTML page beautiful. No classes, no JavaScript, no config.">
  <link rel="stylesheet" href="neat.css">
</head>
<body>
${body}
</body>
</html>
`;

fs.writeFileSync("index.html", html);
console.log("Built index.html from README.md");
