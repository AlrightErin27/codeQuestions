//🦧 🦧 🦧 🦧 🦧 🦧 🦧 🦧 🦧 🦧-- Area of a Square --🦧 🦧 🦧 🦧 🦧 🦧 🦧 🦧 🦧 🦧//
// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input.
// Return the result rounded to two decimals.

const squareArea = (A) =>
  Math.round(Math.pow((4 * A) / (2 * Math.PI), 2) * 100) / 100;

//🦧 🦧 🦧 🦧 🦧 🦧 🦧 🦧 🦧 🦧-- Watermelon --🦧 🦧 🦧 🦧 🦧 🦧 🦧 🦧 🦧 🦧//
// Example: the boys can divide a stack of 8 watermelons into 2+6 melons, or 4+4 melons.
// The boys are extremely tired and want to start their meal as soon as possible, that's why you should
// help them and find out, whether they can divide the fruits in the way they want. For sure, each of them
// should get a part of positive weight.
// Task
// Given an integral number of watermelons w (1 ≤ w ≤ 100; 1 ≤ w in Haskell), check whether Pete
// and Billy can divide the melons so that each of them gets an even amount.

function divide(num) {
  //   let arr = [];
  //   for (let i = 1; i < num + 1; i++) {
  //     arr.push(i);
  //   }
  //   let X = 0,
  //     Y = 0;

  //   for (let j = 0; j < arr.length; j++) {
  //     for (let k = 0; k < arr.length; k++) {
  //       if (
  //         (arr[j] + arr[k]) % 2 === 0 &&
  //         arr[j] + arr[k] === num &&
  //         arr[j] !== arr[k]
  //       ) {
  //         X = arr[j];
  //         Y = arr[k];
  //       }
  //     }
  //   }
  //   return X === 0 || Y === 0 ? false : true;
  return num > 2 && num % 2 === 0;
}

// console.log(divide(4));

//🦧 🦧 🦧 🦧 🦧 🦧 🦧 🦧 🦧 🦧-- Double Char --🦧 🦧 🦧 🦧 🦧 🦧 🦧 🦧 🦧 🦧//
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// doubleChar("String") ==> "SSttrriinngg"
// doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"
// doubleChar("1234!_ ") ==> "11223344!!__

// function doubleChar(str) {
//   let arr = [];
//   for (s of str.split("")) {
//     arr.push(s + s);
//   }
//   return arr.join("");
// }

const doubleChar = (str) =>
  str
    .split("")
    .map((x) => x + x)
    .join("");

// console.log(doubleChar("Bananas"));

//🦧 🦧 🦧 🦧 🦧 🦧 🦧 🦧 🦧 🦧-- Merge 2 Arrays --🦧 🦧 🦧 🦧 🦧 🦧 🦧 🦧 🦧 🦧//
// Write a function that combines two arrays by alternatingly taking elements from each array in turn.
// Examples:
// [a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]
// [1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]
// Points:
// The arrays may be of different lengths, with at least one character/digit.
// One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).

function mergeArrays(a, b) {
  let arr = [];
  for (let i = 0; i < a.length + b.length; i++) {
    arr.push(a[i]);
    arr.push(b[i]);
  }
  return arr.filter((x) => x !== undefined);
}

// console.log(mergeArrays([`a`, `b`, `c`], [1, 2, 3, 4, 5]));

//🦧 🦧 🦧 🦧 🦧 🦧 🦧 🦧 🦧 🦧-- Good vs Evil --🦧 🦧 🦧 🦧 🦧 🦧 🦧 🦧 🦧 🦧//
// Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil.
// Different races will certainly be involved. Each race has a certain worth when battling against others.
// On the side of good we have the following races, with their associated worth:
//0 Hobbits: 1
//1 Men: 2
//2 Elves: 3
//3 Dwarves: 3
//4 Eagles: 4
//5 Wizards: 10

// On the side of evil we have:
// Orcs: 1
// Men: 2
// Wargs: 2
// Goblins: 2
// Uruk Hai: 3
// Trolls: 5
// Wizards: 10

function goodVsEvil(good, evil) {
  good = good.split(" ");
  evil = evil.split(" ");
  let gPts =
    Number(good[0]) +
    Number(good[1]) * 2 +
    Number(good[2]) * 3 +
    Number(good[3]) * 3 +
    Number(good[4]) * 4 +
    Number(good[5]) * 10;
  let ePts =
    Number(evil[0]) +
    Number(evil[1]) * 2 +
    Number(evil[2]) * 2 +
    Number(evil[3]) * 2 +
    Number(evil[4]) * 3 +
    Number(evil[5]) * 5 +
    Number(evil[6]) * 10;

  if (gPts > ePts) {
    return "Battle Result: Good triumphs over Evil";
  } else if (ePts > gPts) {
    return "Battle Result: Evil eradicates all trace of Good";
  } else {
    return "Battle Result: No victor on this battle field";
  }
}
// console.log(goodVsEvil("1 1 1 1 1 1", "1 1 1 1 1 1 1"));
