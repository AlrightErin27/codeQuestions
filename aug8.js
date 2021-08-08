//////////////////////////////////Swap Vowels Case//////////////////////////////////
// Given a string, return a copy of the string with the vowels' case swapped.
// For this kata, assume that vowels are in the set "aeouiAEOUI".
// Example: Given a string "C is alive!", your function should return "C Is AlIvE!"
// Addendum: Your solution is only required to work for the ASCII character set.
// Please make sure you only swap cases for the vowels.

function swap(str) {
  let vowels = "aeiouAEIOU";
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) === -1) {
      newStr += str[i];
    } else if (str[i] === str[i].toUpperCase()) {
      newStr += str[i].toLowerCase();
    } else {
      newStr += str[i].toUpperCase();
    }
  }
  return newStr;
}
//console.log(swap("The sUnsEt in MIAMI")); //ThE sunset In MiaMi

//////////////////////////////////Simple Beads Count//////////////////////////////////
// Two red beads are placed between every two blue beads. There are N blue beads.
// After looking at the arrangement below work out the number of red beads.

// @ @@ @ @@ @ @@ @ @@ @ @@ @

// Implement count_red_beads(n) (in PHP count_red_beads($n); in Java, Javascript, TypeScript,
// C, C++ countRedBeads(n)) so that it returns the number of red beads.
// If there are less than 2 blue beads return 0.

// function countRedBeads(n) {
//   if (n < 0) {
//     return 0;
//   } else {
//     let numBeads = n * 3 - 2;
//     return numBeads - n;
//   }
// }

const countRedBeads = (n) => (n < 2 ? 0 : n * 3 - 2 - n);

console.log(countRedBeads(5));
