// Our first node js program:
/*
const amount = 7;

if (amount < 10) {
  console.log("Small amount...");
} else {
  console.log("Huge Amount");
}
console.log("Hey It's my first node app!!!");

console.log(__dirname);
console.log(__filename);
*/

///////////////////////////////////////////////////////////////////////////////////////////////////
/*
// Modules:

const names = require("./names");
console.log(names);

// sayHi("John Doe");
// sayHi(sarah);
// sayHi(harry);

const sayHi = require("./utils");

sayHi(names.harry);
sayHi(names.sarah);
sayHi("Ayush");

// An alternate syntax to above:

const exportModule = require("./exports");
console.log(exportModule);

require("./default");
*/

/////////////////////////////////////////////////////////////////////////////////////////////
/*
// Built-in modules:

// 1. OS:

const os = require("os");

// console.log(os);

// if we want to get info about current user:

const user = os.userInfo();

console.log(user);

// for how much time our pc has been running:

console.log(`The PC has been running for ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};
console.log(currentOS);
*/

/*
// 2. Path:
const path = require("path");
console.log(path);

console.log(path.sep);

const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
*/

// 3. FS:

const { readFileSync, writeFileSync } = require("fs");

console.log(readFileSync);
console.log(writeFileSync);

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first);
console.log(second);

// now if a file does not exist:

writeFileSync(
  "./content/result-sync.txt",
  `Here is the Result: ${first} and ${second}`,
  { flag: "a" }
);

//asynchronous approach for above:

const { readFile, writeFile } = require("fs");
console.log("Starting Here...");
readFile("./content/first.txt", "utf8", (error, result) => {
  if (error) {
    console.log(error);
    return;
  }
  // console.log(result);

  const first = result;
  readFile("./content/second.txt", "utf8", (error, result) => {
    if (error) {
      console.log(error);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `HERE IS THE RESULT: ${first} ${second}`,
      (error, result) => {
        if (error) {
          console.log(result);
          return;
        }
        console.log(result);
        console.log("Done With the task");
      }
    );
  });
});
console.log("Starting next one");

const { readFile, writeFile } = require("fs");

console.log("start here...");

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("end here...");
});

console.log("next task...");
