//----------------🐷 Latin---------------//
// Move the first letter of each word to the end of it, then add "ay" to the end of the word.
//Leave punctuation marks untouched.

const pigLatin = (str) => {
  const arr = str.split(" ");
  return arr
    .map(function (word) {
      let first = word.charAt(0);
      return word.slice(1) + first + "ay";
    })
    .join(" ");
};
//console.log(pigLatin("Pig latin is cool")); // igPay atinlay siay oolcay
