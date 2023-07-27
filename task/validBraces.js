function validBraces(braces) {
  if (braces.length % 2 !== 0) return false;

  while (braces.match(/\(\)|\{\}|\[\]/)) {
    braces = braces.replace(/\(\)|\{\}|\[\]/g, "");
  }

  return !braces.length;
}
module.exports = validBraces;

// ([{}()[]])
