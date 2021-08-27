//------------🔥 (╯°□°）╯︵ ┻━┻ 🔥--------Jaden Casing Strings--------------------------//
// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013).
// Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is
// known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check
// out how contractions are expected to be in the example below.
// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes
// from Jaden Smith, but they are not capitalized in the same way he originally typed them.
// Example:
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

function toJadenCase(wisdom) {
  //   let arr = [];
  //   for (w of wisdom.toLowerCase().split(" "))
  //     arr.push(w[0].toUpperCase() + w.substring(1));
  //   return arr.join(" ");
  return wisdom
    .split(" ")
    .map(function (w) {
      return w.charAt(0).toUpperCase() + w.slice(1);
    })
    .join(" ");
}

//console.log(toJadenCase("The biggest flex anyone will ever have is dying."));

//------------🔥 (╯°□°）╯︵ ┻━┻ 🔥--------Complementary DNA--------------------------//
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
// You have function with one side of the DNA (string, except for Haskell); you need to get the other
// complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
// Example: (input: output)
// DNAStrand ("ATTGC") // return "TAACG"
// DNAStrand ("GTAT") // return "CATA"

function DNAStrand(dna) {
  return dna
    .split("")
    .map(function (x) {
      return x === "T"
        ? "A"
        : x === "A"
        ? "T"
        : x === "C"
        ? "G"
        : x === "G"
        ? "C"
        : null;
    })
    .join("");
}
//console.log(DNAStrand("ATGC"));

//------------🔥 (╯°□°）╯︵ ┻━┻ 🔥--------Isograms--------------------------//
// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters is an isogram.
// Assume the empty string is an isogram. Ignore letter case.
// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

function isIsogram(str) {
  str = str.toLowerCase().split("").sort();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) return false;
  }
  return true;
}
// console.log(isIsogram("atag")); //false
// console.log(isIsogram("gatch")); // true;

//------------🔥 (╯°□°）╯︵ ┻━┻ 🔥--------Sum of Numbers--------------------------//
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between
// and including them and return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!

function getSum(a, b) {
  a > b ? ((max = a), (min = b)) : ((max = b), (min = a));
  let count = 0;
  for (let i = min; i <= max; i++) count += i;
  return count;
}
// console.log(getSum(-1, 2)); // -1 + 0 + 1 + 2 = 2
// console.log(getSum(3, 6)); // 3 + 4 + 5 + 6 = 18

//------------🔥 (╯°□°）╯︵ ┻━┻ 🔥--------Credit Card Mask--------------------------//
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your
// most secret question is still correct. However, since someone could look over your shoulder, you don't want that
// shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'.

const maskify = (cc) => {
  temp = cc.split("");
  let arr = [];
  const sliced = temp.slice(-4);
  for (let i = 0; i < temp.length - 4; i++) arr.push("#");
  return arr.join("") + sliced.join("");
};

//console.log(maskify("abcfadhtw214dk5278"));
