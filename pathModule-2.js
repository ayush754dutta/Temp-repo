"use strict";

const path = require("path");

console.log(path.sep);

const filePath = path.join("./content/subfolder/test.txt");
console.log(filePath);

const basename = path.basename(filePath);
console.log(basename);

let absolute = path.resolve(__dirname);
console.log(absolute);

absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
