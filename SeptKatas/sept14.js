// 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙  String Ends With? 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 //
// Complete the solution so that it returns true if the first argument(string) passed in ends with the
// 2nd argument (also a string).
// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// const solution = (str, end) => str.indexOf(end, str.length - end.length) !== -1;
const solution = (str, end) => str.endsWith(end);

// console.log(solution("abcde", "e"));

// 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙  Sum of the 1st nth term of Series 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 //
// Your task is to write a function which returns the sum of following series upto nth term(parameter).
// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.
// If the given value is 0 then it should return 0.00
// You will only be given Natural Numbers as arguments.
// Examples:
// SeriesSum(1) => 1 = "1.00"
// SeriesSum(2) => 1 + 1/4 = "1.25"
// SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"

function SeriesSum(n) {
  let arr = [],
    count = 1,
    res = 0;
  for (let i = 0; i < n; i++) {
    arr.push(count);
    count += +3;
    res += 1 / arr[i];
  }
  return (Math.round(res * 100) / 100).toFixed(2);
}
// console.log(SeriesSum(4)); //1.49
// console.log(SeriesSum(1));

// 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙  Odd or Even? 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 //
// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).
// Examples:
// Input: [0]
// Output: "even"
// Input: [0, 1, 4]
// Output: "odd"
// Input: [0, -1, -5]
// Output: "even"

function oddOrEven(arr) {
  //   let sum = 0;
  //   for (a of arr) sum += a;
  //   return sum % 2 ? `odd` : `even`;
  /////////////////////////////////////
  return arr.reduce((a, b) => a + b, 0) % 2 ? `odd` : `even`;
}
// console.log(oddOrEven([0, 1, 4])); // Odd
// console.log(oddOrEven([-1, -1, -4])); // Even

// 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙  Sort the Odd 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 //
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while
// leaving the even numbers at their original positions.
// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// function sortArray(arr) {
//   let oddIdx = [],
//     oddArr = [],
//     evenArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2) {
//       oddIdx.push(arr.indexOf(arr[i]));
//       oddArr.push(arr[i]);
//     } else {
//       evenArr.push(arr[i]);
//     }
//   }
//   let sorted = oddArr.sort((a, b) => a - b);
//   for (let j = 0; j < oddIdx.length; j++) {
//     evenArr.splice(oddIdx[j], 0, sorted[j]);
//   }
//   return evenArr;
// }

function sortArray(arr) {
  let odds = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2) odds.push(arr[i]);
  }
  odds.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2) arr[i] = odds.shift();
  }
  return arr;
}

// console.log(sortArray([5, 8, 6, 3, 4]));
// console.log(sortArray([11, 1, 1, 11, 5, 2, 111, 0])); //[ 1, 1, 5, 11, 2, 11, 111, 0 ]

// 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙  Find the Missing Letter 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 //
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing
//letter in the array.
// You will always get an valid array. And it will be always exactly one letter be missing. The length
// of the array will always be at least 2.
// The array will always contain letters in only one case.
// Example:
// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'
// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"
// (Use the English alphabet with 26 letters!)

function findMissingLetter(arr) {
  arr[0] === arr[0].toLowerCase()
    ? (ALPHA = "abcdefghijklmnopqrstuvwxyz".split(""))
    : (ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""));

  let idx = ALPHA.indexOf(arr[0]);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ALPHA[idx]) idx++;
  }

  return ALPHA[idx];
}
// console.log(findMissingLetter(["a", "b", "c", "d", "f"]));
// console.log(findMissingLetter(["O", "P", "R", "S"]));

// 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙  Which Are In? 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙 //
// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of
// the strings of a1 which are substrings of strings of a2.
// Example 1:
// a1 = ["arp", "live", "strong"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns []

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
// Beware: r must be without duplicates.

function inArray(arr1, arr2) {
  return arr1.filter((a1) => arr2.find((a2) => a2.match(a1))).sort();
}

// console.log(
//   inArray(
//     ["arp", "live", "strong"],
//     ["lively", "alive", "harp", "sharp", "armstroong"]
//   )
// ); //["arp", "live", "strong"]
