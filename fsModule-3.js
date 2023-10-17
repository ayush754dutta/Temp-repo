"use strict";

const fs = require("fs");

// console.log(fs);

// 1. Sychronous Approach:
const { readFileSync, writeFileSync } = fs;

console.log("Start Here....Sync");

const first = readFileSync("./content/first.txt", "utf8");
console.log(first);

const second = readFileSync("./content/second.txt", "utf8");
console.log(second);

writeFileSync(
  "./content/resultCreated-sync.txt",
  `THE RESULT IS: ${first} and ${second}`,
  { flag: "a" }
);
console.log("I am done with the Task...Sync");

// 2. Asynchronous Approach:
console.log("Start the next one....");
const { readFile, writeFile } = fs;

console.log("Start Here....ASYNC");
readFile("./content/first.txt", "utf8", (error, result) => {
  if (error) {
    console.log(error);
    return;
  }
  const firstResult = result;
  readFile("./content/second.txt", "utf8", (error, result) => {
    if (error) {
      console.log(error);
      return;
    }
    const secondResult = result;
    writeFile(
      "./content/resultCreated-async.txt",
      `ASYNC RESULT: ${firstResult} and ${secondResult}`,
      (error, result) => {
        if (error) {
          console.log(error);
          return;
        }
        console.log(result);
      }
    );
  });
});
console.log("I am done with the task....ASYNC ");
