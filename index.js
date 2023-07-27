const myFunctions = require("./task");

const { functionExample, isValidWalk, order, toCamelCase, validBraces } =
  myFunctions;
console.log("validBraces(([{}])) :>> ", validBraces("([{}()])"));

// console.log("myFunctions  :>> ", toCamelCase("the_stealth-warrior"));

// console.log("myFunctions  :>> ", order("is2 Thi1s T4est 3a"));

// console.log(
//   "myFunctions  :>> ",
//   isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])
// );
