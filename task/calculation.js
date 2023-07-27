// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

// console.log("seven(times(five())) :>> ", five(plus(four())));

function opertion(arg1, op, arg2) {
  switch (op) {
    case "+":
      return arg1 + arg2;
    case "-":
      return arg1 - arg2;
    case "*":
      return arg1 * arg2;
    case "/":
      return Math.floor(arg1 / arg2);
    default:
      break;
  }
}

function zero(arg) {
  return !arg ? 0 : opertion(0, arg[0], Number(arg[1]));
}
function one(arg) {
  return !arg ? 1 : opertion(1, arg[0], Number(arg[1]));
}
function two(arg) {
  return !arg ? 2 : opertion(2, arg[0], Number(arg[1]));
}
function three(arg) {
  return !arg ? 3 : opertion(3, arg[0], Number(arg[1]));
}
function four(arg) {
  return !arg ? 4 : opertion(4, arg[0], Number(arg[1]));
}
function five(arg) {
  return !arg ? 5 : opertion(5, arg[0], Number(arg[1]));
}
function six(arg) {
  return !arg ? 6 : opertion(6, arg[0], Number(arg[1]));
}
function seven(arg) {
  return !arg ? 7 : opertion(7, arg[0], Number(arg[1]));
}
function eight(arg) {
  return !arg ? 8 : opertion(8, arg[0], Number(arg[1]));
}
function nine(arg) {
  return !arg ? 9 : opertion(9, arg[0], Number(arg[1]));
}

function plus(arg) {
  return "+" + arg;
}
function minus(arg) {
  return "-" + arg;
}
function times(arg) {
  return "*" + arg;
}
function dividedBy(arg) {
  return "/" + arg;
}
