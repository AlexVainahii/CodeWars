function alphabetPosition(text) {
  return text
    .toLowerCase()
    .replace(/\W|\_|\d/g, "")
    .split("")
    .map((item) => item.charCodeAt(0) - 96)
    .join(" ");
}
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
module.exports = alphabetPosition;
