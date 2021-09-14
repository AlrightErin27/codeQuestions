// |￣￣￣￣￣￣￣ |--------Categroize New Member--------------------//
// |    7kyu     |
// |＿＿＿＿＿ _＿_|
// (\__/)||
// (•ㅅ•) ||
// / 　 づ
// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with
//  an application form that will tell prospective members which category they will be placed.
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club,
//  handicaps range from -2 to +26; the better the player the lower the handicap.

//senior === 55+yrs & handicap greater than 7
//handicaps can range -2-26 (lower === better)

// function openOrSenior(data) {
//   let arr = [];
//   for (let i = 0; i < data.length; i++) {
//     if (data[i][0] >= 55 && data[i][1] > 7) {
//       arr.push(`Senior`);
//     } else {
//       arr.push(`Open`);
//     }
//   }
//   return arr;
// }

function openOrSenior(data) {
  return data.map(([age, hCap]) => (age > 54 && hCap > 7 ? `Senior` : `Open`));
}

// console.log(
//   openOrSenior([
//     [18, 20],
//     [45, 2],
//     [61, 12],
//     [37, 6],
//     [21, 21],
//     [78, 7],
//   ])
// );
//["Open", "Open", "Senior", "Open", "Open", "Senior"]

// |￣￣￣￣￣￣￣ |--------Ones & Zeros--------------------//
// |    7kyu     |
// |＿＿＿＿＿ _＿_|
// (\__/)||
// (•ㅅ•) ||
// / 　 づ
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

const binaryArrayToNumber = (arr) => parseInt(arr.join(""), 2);

// console.log(binaryArrayToNumber([0, 0, 1, 0]));

// |￣￣￣￣￣￣￣ |--------Find the Divisors--------------------//
// |    7kyu     |
// |＿＿＿＿＿ _＿_|
// (\__/)||
// (•ㅅ•) ||
// / 　 づ
// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array
// with all of the integer's divisors(except for 1 and the number itself), from smallest to largest.
// If the number is prime return the string '(integer) is prime' (null in C#)
// (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

function divisors(n) {
  let arr = [];
  for (let i = 2; i <= Math.floor(n / 2); i++) {
    if (n % i == 0) arr.push(i);
  }
  return arr.length ? arr : `${n} is prime`;
}
// console.log(divisors(13));
// console.log(divisors(12));

// |￣￣￣￣￣￣￣ |--------IQ Test--------------------//
// |    6kyu     |
// |＿＿＿＿＿ _＿_|
// (\__/)||
// (•ㅅ•) ||
// / 　 づ
// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given
// numbers differs from the others. Bob observed that one number usually differs from the others in evenness.
// Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different
// in evenness, and return a position of this number.

function iqTest(n) {
  n = n.split(" ");
  let arr = [];
  for (x of n) {
    arr.push(Number(x));
  }
  //  //////arr/////// //
  let odd = arr.filter(function (el) {
    return el % 2 !== 0;
  });
  let even = arr.filter(function (el) {
    return el % 2 === 0;
  });

  return odd.length < even.length
    ? arr.indexOf(odd[0] + 1)
    : arr.indexOf(even[0] + 1);
}

// console.log(iqTest("2 4 7 8 10")); //3 b/c 7 is odd
// console.log(iqTest("1 2 1 1")); //2 b/c 2 is even

// |￣￣￣￣￣￣￣ |--------Detect Pangram--------------------//
// |    6kyu     |
// |＿＿＿＿＿ _＿_|
// (\__/)||
// (•ㅅ•) ||
// / 　 づ
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence
// "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(str) {
  const ALPHA = "abcdefghijklmnopqrstuvwxyz".split("");
  return ALPHA.every((x) => str.toLowerCase().includes(x)) ? true : false;
}
// console.log(isPangram("Teenage mutant ninja turtles"));
// console.log(isPangram("The quick brown fox jumps over the lazy dog"));

// |￣￣￣￣￣￣￣ |--------Format a String like "Bart, Lisa & Maggie"--------------------//
// |    6kyu     |
// |＿＿＿＿＿ _＿_|
// (\__/)||
// (•ㅅ•) ||
// / 　 づ
// Given: an array containing hashes of names
// Return: a string formatted as a list of names separated by commas except for the last two names,
//  which should be separated by an ampersand.
// Example:
// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'
// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'
// list([ {name: 'Bart'} ])
// // returns 'Bart'
// list([])
// // returns ''
// Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

function list(names) {
  let result = "";
  const comma = ", ",
    and = " & ";
  while (names.length) {
    result += names.shift().name;

    if (names.length === 1) {
      result += and;
    } else if (names.length > 1) {
      result += comma;
    }
  }
  return result;
}
// console.log(list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }]));
// console.log(list([{ name: "Bart" }]));
