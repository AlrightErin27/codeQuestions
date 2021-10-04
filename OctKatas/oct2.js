//~~~~~~~~~🍬~🕸~🦇~~~~~    Breaking Chocolate Problem    ~~~~~🎃~🕷~👻~~~~~~~~~~~~~~//
// Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable.
// Implement a function that will return minimum number of breaks needed.
// For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one
// break, but for size 3 x 1 you must do two breaks.
// If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.

const breakChocolate = (n, m) => (n * m === 0 ? 0 : n * m - 1);

// console.log(breakChocolate(2, 1));

//~~~~~~~~~🍬~🕸~🦇~~~~~    Remove the Min    ~~~~~🎃~🕷~👻~~~~~~~~~~~~~~//
// The museum of incredible dull things
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect,
// comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one
// with the lowest rating.
// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a
// program that tells her the ratings of the items after one removed the lowest one. Fair enough.
// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple
// elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
// Don't change the order of the elements that are left.

function removeSmallest(nums) {
  let arr = [...nums];
  let copy = [...nums];
  let sorted = copy.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === sorted[0]) {
      arr.splice(i, 1);
      break;
    }
  }
  return arr;
}

// console.log(removeSmallest([5, 5, 1, 9, 11, 1]));

//~~~~~~~~~🍬~🕸~🦇~~~~~    Sum of a Sequence    ~~~~~🎃~🕷~👻~~~~~~~~~~~~~~//
// Your task is to make function, which returns the sum of a sequence of integers.
// The sequence is defined by 3 non-negative values: begin, end, step.
// If begin value is greater than the end, function should returns 0

// Examples
// sequenceSum(2,2,2) === 2
// sequenceSum(2,6,2) === 12 // 2 + 4 + 6
// sequenceSum(1,5,1) === 15 // 1 + 2 + 3 + 4 + 5
// sequenceSum(1,5,3) === 5 // 1 + 4

function sumSequence(begin, end, step) {
  let sum = 0;
  for (let i = begin; i <= end; i += step) sum += i;
  return sum;
}
// console.log(sumSequence(2, 6, 2));

//~~~~~~~~~🍬~🕸~🦇~~~~~    Largest 5 Digit in a Series    ~~~~~🎃~🕷~👻~~~~~~~~~~~~~~//
// In the following 6 digit number:
// 283910
// 91 is the greatest sequence of 2 consecutive digits.
// In the following 10 digit number:
// 1234567890
// 67890 is the greatest sequence of 5 consecutive digits.
// Complete the solution so that it returns the greatest sequence of five consecutive digits found
// within the number given. The number will be passed in as a string of only digits. It should return a
// five digit integer. The number passed may be as large as 1000 digits.

function solution(num) {
  let arr = [];

  for (let i = 0; i < Number(num.length) - 4; i++)
    arr.push(num.slice(i, i + 5));

  arr.sort((a, b) => b - a);
  return Number(arr[0]);
}
// console.log(solution("1234567890"));

//~~~~~~~~~🍬~🕸~🦇~~~~~    Largest 5 Digit in a Series    ~~~~~🎃~🕷~👻~~~~~~~~~~~~~~//
// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string
// consisting of k consecutive strings taken in the array.

function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) return "";

  return strarr.reduce((long, x, i) => {
    const currStr = strarr.slice(i, i + k).join("");
    // console.log(long, "🤷🏻‍♀️");
    return currStr.length > long.length ? currStr : long;
  }, "");
}
// console.log(longestConsec(["Hippo", "Dog", "Giraffes", "Squirrels"], 2));

//~~~~~~~~~🍬~🕸~🦇~~~~~    Mexican Wave    ~~~~~🎃~🕷~👻~~~~~~~~~~~~~~//

// function wave1(str) {
//   let arr = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === " ") continue;
//     arr.push(
//       str.slice(0, i) +
//         str.charAt(i).toUpperCase() +
//         str.slice(i + 1, str.length)
//     );
//   }
//   return arr;
// }

function wave(str) {
  let arr = [];
  str.split("").forEach((char, idx) => {
    arr.push(str.slice(0, idx) + char.toUpperCase() + str.slice(idx + 1));
  });
  return arr;
}

// console.log(wave("pepper pots"));

//~~~~~~~~~🍬~🕸~🦇~~~~~    Highest Scoring Word    ~~~~~🎃~🕷~👻~~~~~~~~~~~~~~//
// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

function high(x) {
  const ALPHA = "abcdefghijklmnopqrstuvwxyz";

  const words = x.split(" ");

  const scores = words
    .map((x) => [...x].map((letter) => ALPHA.indexOf(letter) + 1))
    .map((x) => x.reduce((a, b) => a + b, 0));

  return words[scores.indexOf(Math.max(...scores))];
}

// function high(x) {
//   const ALPHA = "abcdefghijklmnopqrstuvwxyz";
//   let arr = [];
//   let words = x.split(" ");

//   for (word of words) {
//     for (letter of word) {
//       let val = 0;
//       val += ALPHA.indexOf(letter) + 1;
//       arr.push(val);
//       console.log(arr);
//       break;
//     }
//   }
//   let idx = arr.indexOf(Math.max(...arr));

//   return words[idx];
// }
// console.log(high("man i need a taxi up to ubud")); //taxi
