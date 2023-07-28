// duplicateEncode("recede"),"()()()
function duplicateEncode(word) {
  //   return word
  //     .split("")
  //     .map((char, ind, array) => {
  //       return array.reduce(
  //         (prev, acc) => (acc === char ? prev + 1 : prev),
  //         0
  //       ) === 1
  //         ? "("
  //         : ")";
  //     })
  //     .join("");

  return word
    .toLowerCase()
    .split("")
    .map((char, ind, array) =>
      array.indexOf(char) === array.lastIndexOf(char) ? "(" : ")"
    )
    .join("");

  // word = word.toLowerCase();
  //   return word
  //     .toLowerCase()
  //     .replace(/./g, (m) =>
  //       word.toLowerCase().indexOf(m) == word.toLowerCase().lastIndexOf(m)
  //         ? "("
  //         : ")"
  //     );
}
module.exports = duplicateEncode;
