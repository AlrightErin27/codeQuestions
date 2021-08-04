//-----------------------------------Find the Squares-----------------------------------//
// Complete the function that takes an odd integer (0 < n < 1000000) which is the difference between two
// consecutive perfect squares, and return these squares as a string in the format "bigger-smaller"
// Examples
// 9  -->  "25-16"
// 5  -->  "9-4"
// 7  -->  "16-9"

const findSquares = (num) => {
  if (num % 2 === 0 || num < 0 || num > 1000000) {
    return `Invalid Input 🙈`;
  } else {
    let max = Math.ceil(num * 0.5),
      min = num - max;
    return `${max * max} - ${min * min}`;
  }
};
//console.log(findSquares(-9));

//-----------------------------------No Oddities Here-----------------------------------//
// Write a small function that returns the values of an array that are not odd.
// All values in the array will be integers. Return the good values in the order they are given.

function noOdds(values) {
  //   let evenArr = [];
  //   for (let i = 0; i < values.length; i++) {
  //     if (values[i] % 2 === 0) {
  //       evenArr.push(values[i]);
  //     }
  //   }
  //   return evenArr;
  return values.filter((x) => x % 2 === 0);
}
//console.log(noOdds([3, 6, 9, 10]));

//-----------------------------------Sum of 2 Lowest Positive Integers-----------------------------------//
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4
// positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.
function sumLowest(numbers) {
  let sorted = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
      sorted.push(numbers[i]);
    }
    sorted.sort(function (a, b) {
      return a - b;
    });
  }
  return sorted[0] + sorted[1];
}
//console.log(sumLowest([90, -3, 4, 1, -2]));

//-----------------------------------Number of People on the Bus-----------------------------------//
// There is a bus moving in the city, and it takes and drop some people in each bus stop.
// You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two
// items which represent number of people get into bus (The first item) and number of people get off the bus
// (The second item) in a bus stop.
// Your task is to return number of people who are still in the bus after the last bus station
// (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in
// the bus, and they are probably sleeping there :D
// Take a look on the test cases.
// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0.
// So the return integer can't be negative.
// The second value in the first integer array is 0, since the bus is empty in the first bus stop.

//arr = a list of intArrs
//intArr = has 2 items, pplGettingOn & pplGettingOff
function busStops(number) {
  let totalPpl = 0;
  for (let i = 0; i < number.length; i++) {
    totalPpl += number[i][0];
    totalPpl -= number[i][1];
  }
  return totalPpl;
}
//console.log(
//   busStops([
//     [3, 0],
//     [9, 1],
//     [4, 10],
//     [12, 2],
//     [6, 1],
//     [7, 10],
//   ])
// );

//-----------------------------------Shiritori-----------------------------------//
// For example: apple -> eggs -> salmon -> nut -> turkey ...
// Your Task:
// You will be given a list of strings, a transcript of an English Shiritori match.
// Your task is to find out if the game ended early, and return a list that contains every valid string
// until the mistake. If a list is empty return an empty list. If one of the elements is an empty string,
// that is invalid and should be handled.

//returns arr stopped at mistake or ""
//if starts w/"" `Invalid

function wordGame(words) {
  if (words.filter((e) => e !== "").length === 0 || words.length < 1) return [];
  const arr = [];
  for (let i = 0; i < words.length; i++) {
    const w1 = words[i];
    const w2 = words[i + 1];
    if (
      words.length - arr.length === 1 ||
      w1.charAt(w1.length - 1) === w2.charAt(0)
    )
      arr.push(w1);
    else {
      if (w1 !== "") arr.push(w1);
      return arr;
    }
  }
  return arr;
}
//console.log(wordGame(["ring", "graph", "hippo", "octopus"]));

//-----------------------------------Jerry's Misery-----------------------------------//
// Jerry is an excellent coder and sits high on the CW leaderboard. He solves kata like a banshee but would also like
// to lead a normal life, with other activities. But he just can't stop solving all the kata!!
// Given an array (x) you need to calculate the Jerry Misery Score. The values are worth the following points:
// kata = 5
// Pete's kata = 10
// life = 0
// eating = 1
// The Misery Score is the total points gained from the array. Once you have the total, return as follows:
// < 40 = 'Super happy!'
// < 70 >= 40 = 'Happy!'
// < 100 >= 70 = 'Sad!'
// > 100 = 'Miserable!'

function jerrysMisery(x) {
  //   let score = 0;
  //   for (let i = 0; i < x.length; i++) {
  //     if (x[i] === "kata") {
  //       score += 5;
  //     } else if (x[i] === "Petes kata") {
  //       score += 10;
  //     } else if (x[i] === "eating") {
  //       score += 1;
  //     }
  //   }
  //   console.log(score);
  //   if (score < 40) {
  //     return `Super happy!`;
  //   } else if (score >= 40 && score < 70) {
  //     return `Happy!`;
  //   } else if (score >= 70 && score < 100) {
  //     return `Sad!`;
  //   } else {
  //     return `Miserable!`;
  //   }

  const values = { "Petes kata": 10, kata: 5, eating: 1, life: 0 };
  const score = x.reduce((s, a) => s + values[a], 0);
  switch (true) {
    case score < 40:
      return "Super happy!";
    case score < 70:
      return "Happy!";
    case score < 100:
      return "Sad!";
    default:
      return "Miserable!";
  }
}
// console.log(
//   jerrysMisery([
//     "Petes kata",
//     "Petes kata",
//     "eating",
//     "Petes kata",
//     "Petes kata",
//     "eating",
//   ])
// );

//-----------------------------------Highest Scoring Word-----------------------------------//
// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

function highestScoring(str) {
  const arr = str.split(" ").sort().reverse();
  arr.sort;
}
console.log(highestScoring("banana apple orange butcher"));
