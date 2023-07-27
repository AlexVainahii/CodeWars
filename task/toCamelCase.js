// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(arg) {
  return arg
    .split(/[_-]/g)
    .map((element, index) => {
      return index === 0
        ? element
        : element[0].toUpperCase() + element.slice(1);
    })
    .join("");
}

module.exports = toCamelCase;
