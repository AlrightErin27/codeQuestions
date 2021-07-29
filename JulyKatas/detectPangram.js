// A pangram is a sentence that contains every single letter of the alphabet at least once.
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
// because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not.
// Ignore numbers and punctuation.

function isPangram(string) {
  let alphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let str = string.toUpperCase();
  let count = 0;
  let returnBoolean;
  for (i = 0; i < alphabets.length; i++) {
    if (str.indexOf(alphabets[i]) > -1) {
      count++;
    }
  }
  if (count === 26) {
    returnBoolean = true;
  } else {
    returnBoolean = false;
  }
  return returnBoolean;
}
console.log(isPangram("The quick brown fox jumps over the lazy dog"));
