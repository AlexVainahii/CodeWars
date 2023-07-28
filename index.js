const myFunctions = require("./task");

const {
  functionExample,
  isValidWalk,
  order,
  toCamelCase,
  validBraces,
  alphabetPosition,
  duplicateEncode,
} = myFunctions;
// console.log("validBraces(([{}])) :>> ", validBraces("([{}()])"));

// console.log("myFunctions  :>> ", toCamelCase("the_stealth-warrior"));

// console.log("myFunctions  :>> ", order("is2 Thi1s T4est 3a"));

// console.log(
//   "myFunctions  :>> ",
//   isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])
// );
// console.log(
//   "myFunctions  :>> ",
//   alphabetPosition("The sunset sets at twelve o' clock.")
// );
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
console.log(
  'duplicateEncode("rEce(,,.de"),"()()() :>> ',
  duplicateEncode("rEcede")
);
