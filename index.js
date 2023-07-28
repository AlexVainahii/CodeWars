const myFunctions = require("./task");

const { functionExample, isValidWalk, order, toCamelCase, validBraces } =
  myFunctions;
// console.log("validBraces(([{}])) :>> ", validBraces("([{}()])"));

// console.log("myFunctions  :>> ", toCamelCase("the_stealth-warrior"));

// console.log("myFunctions  :>> ", order("is2 Thi1s T4est 3a"));

// console.log(
//   "myFunctions  :>> ",
//   isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])
// );

function nextSmaller(n) {
  const arr = String(n).split(""); //n.toString() 28706004446
  // let d = 2;
  // let number = arr[arr.length - d] + arr[arr.length - 1];
  // console.log(+number);

  // while () {
  //   d++;
  //   number = arr[arr.length - d] + number;
  //   console.log(d);
  //   nextSmaller(+number);
  // }

  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] < arr[j]) {
        arr.splice(j, 0, ...arr.splice(i, 1));
        // console.log(arr);
        const l = arr.splice(j + 1, arr.length - 1).sort((a, b) => b - a);
        return arr.concat(l).join("").startsWith("0")
          ? -1
          : +arr.concat(l).join("");
      }
      // if (arr[i] === arr[j]) {
      //   if (i === j + 1) break;
      //   arr.splice(j + 1, 0, ...arr.splice(j, 1));
      //   const l = arr.splice(j + 2, arr.length - 1).sort((a, b) => b - a);
      //   return arr.concat(l).join("")
      //     ? -1
      //     : +arr.concat(l).join("") === n
      //     ? -1
      //     : +arr.concat(l).join("");
      // }
    }
  }
  return -1;
}

console.log("nextSmaller  :>> ", nextSmaller(28706006446)); //22855577
2829214;

2829142;

28706004664;

28706006446;
28706004664;

28706003446
28704664300

28704664400
28700664440


28706004654;
28706004654;

28706005446;

28706004446;

28704664400;

28676544000;
28700665440;

1274092203;
1274092032;

1274092023;
1274039220;

1234567908;
1234567;
