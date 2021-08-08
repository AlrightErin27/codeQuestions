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
//console.log(countRedBeads(5));

//////////////////////////////////Even or Odd- Which is Greater?//////////////////////////////////
// Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of
// all the individual odd digits. Always a string of numbers will be given.
// If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"
// If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"
// If the total of both even and odd numbers are identical return: "Even and Odd are the same"

function which(str) {
  let even = 0,
    odd = 0;
  for (let i = 0; i < str.length; i++)
    str[i] % 2 === 0 ? (even += Number(str[i])) : (odd += Number(str[i]));

  if (even === odd) {
    return "Even and Odd are the same";
  } else if (even > odd) {
    return "Even is greater than Odd";
  } else {
    return "Odd is greater than Even";
  }
}
//console.log(which("112"));

//////////////////////////////////Bumps in the Road//////////////////////////////////
// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about
// 15 more bumps before it dies totally.
// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps
// ("n"), work out if you make it home safely.
// 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".

function bump(x) {
  let b = 0;
  for (let i = 0; i < x.length; i++) {
    x[i] === "n" ? b++ : b;
  }
  return b <= 15 ? "Woohoo!" : "Car Dead";
}
// console.log(bump("n")); //"Woohoo!"
// console.log(bump("_nnnnnnn_n__n______nn__nn_nnn")); //"Car Dead"
// console.log(bump("______n___n_")); //"Woohoo!"

//////////////////////////////////Two to One//////////////////////////////////
// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible,
// containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// function twoToOne(s1, s2) {
//   const arr = (s1 + s2).split("").sort();
//   result = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (result.indexOf(arr[i]) === -1) {
//       result += arr[i];
//     }
//   }
//   return result;
// }

function longest(s1, s2) {
  let arr = (s1 + s2).split("").sort(),
    result = "";
  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) result += arr[i];
  }
  return result;
}

//console.log(longest("aabcd", "aakdl"));

//////////////////////////////////Find the Parity Outlier//////////////////////////////////
// You are given an array (which will have a length of at least 3, but could be very large) containing integers.
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
//  Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function outlier(integers) {
  let even = [],
    odd = [];
  for (let i = 0; i < integers.length; i++) {
    integers[i] % 2 === 0 ? even.push(integers[i]) : odd.push(integers[i]);
  }
  return even.length === 1 ? Number(even) : Number(odd);
}
//console.log(outlier([1, 2, 3]));

//////////////////////////////////Convert Str to Camel Case//////////////////////////////////
// Complete the method/function so that it converts dash/underscore delimited words into camel casing.
// The first word within the output should be capitalized only if the original word was capitalized
// (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
  let newStr = "",
    result = "";

  if (str === "") return str;

  for (let i = 0; i < str.length; i++)
    str[i] === "_" || str[i] === "-" ? (newStr += " ") : (newStr += str[i]);

  let arr = newStr.split(" ");

  for (let j = 1; j < arr.length; j++)
    result += arr[j][0].toUpperCase() + arr[j].slice(1);

  return arr[0] + result;
}
// console.log(toCamelCase("the_steal-warrior"));
