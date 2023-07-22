/*Your task is to sort a given string. 
Each word in the string will contain a single number. 
This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in 
the input String will only contain valid consecutive numbers.
Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
""  -->  ""


*/

function order(words) {
  let s = "";
  let k = 0;
  const arrayNumb = [];
  const arrayWord = [];
  for (let i = 0; i <= words.length; i++) {
    if (words[i] !== " " && words[i]) {
      if (!isNaN(Number(words[i]))) {
        k = Number(words[i]);
      }
      s += words[i];
    } else {
      let j = 0;
      while (j < arrayNumb.length && arrayNumb[j] < k) {
        j = j + 1;
      }

      arrayNumb.splice(j, 0, k);
      arrayWord.splice(j, 0, s);
      s = "";
    }
  }

  return arrayWord.join(" ");
}
module.exports = order;
