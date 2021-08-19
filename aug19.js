//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~🌵 🌻 🦎 FIND THE ODD INT 6KYU🦎 🌻 🌵~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
const findOdd = (A) => A.find((i) => A.filter((el) => el === i).length % 2);

//console.log(findOdd([-1, 12, 3, 12, -1])); //3

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~🌵 🌻 🦎 SORT NUMBERS 7KYU🦎 🌻 🌵~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an
// empty array or null/nil value then it should return an empty array.
// For example:
// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

const solution = (n) => (n === null ? [] : n.sort((a, b) => a - b));

//console.log(solution(null));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~🌵 🌻 🦎 PREVIOUS MULT OF 3 7KYU🦎 🌻 🌵~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.
// Return n if the input is already a multiple of three, and return null/nil/None if no such number exists.
// Examples
// 1      => null
// 25     => null
// 36     => 36
// 1244   => 12
// 952406 => 9

const prevMultOfThree = (n) => {
  if (n < 3) return null;
  for (x of String(n)) {
    if (n % 3 === 0) {
      return Number(n);
    } else {
      n = String(n).slice(0, -1);
    }
  }
  return null;
};
//console.log(prevMultOfThree(25));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~🌵 🌻 🦎 REVERSE WORDS 7KYU🦎 🌻 🌵~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
const reverseWords = (str) =>
  str.split("").reverse().join("").split(" ").reverse().join(" ");

//console.log(reverseWords("elbuod  secaps"));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~🌵 🌻 🦎 BATTLE OF THE CHARS 7KYU🦎 🌻 🌵~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// Groups of characters decided to make a battle. Help them to figure out which group is more powerful.
// Create a function that will accept 2 variables and return the one who's stronger.
// Rules:
// Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
// Only capital characters can and will participate a battle.
// Only two groups to a fight.
// Group whose total power (A + B + C + ...) is bigger wins.
// If the powers are equal, it's a tie.
// Examples:
//   battle("ONE", "TWO"); // => "TWO"`
//   battle("ONE", "NEO"); // => "Tie!"

function battle(x, y) {
  a = x
    .split("")
    .map((z) => z.charCodeAt(0) - 64)
    .reduce((a, b) => a + b, 0);
  b = y
    .split("")
    .map((z) => z.charCodeAt(0) - 64)
    .reduce((a, b) => a + b, 0);
  return a < b ? y : a > b ? x : "Tie!";
}
//console.log(battle("Hello!", "Bye"));
