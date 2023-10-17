// Built in Modules:

// 1. OS: Operating system module:

const os = require("os");
// console.log(os);

const { freemem, userInfo, totalmem, release } = os;

console.log(freemem());
console.log(userInfo());
console.log(totalmem());
console.log(release());

console.log(`System Uptime is : ${os.uptime()}`);

const currentOsInfo = {
  username: os.userInfo(),
  release: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),
};

console.log(currentOsInfo);
