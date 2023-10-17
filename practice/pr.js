"use strict";

const sayHi = require("./utils");
const names = require("./names");

console.log(names);
console.log(sayHi);

sayHi(names.sarah);
sayHi(names.ayush);
sayHi("John Doe");

const e = require("./exports");

console.log(e);
console.log(e.items);
console.log(e.person);
console.log(e.person.firstName);

// mind grenade:

require("./mind-grenade");
