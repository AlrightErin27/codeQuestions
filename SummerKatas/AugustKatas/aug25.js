//--------------------------Deoderant Evaporator--------------------------//
// This program tests the life of an evaporator containing a gas.
// We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day)
// and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive
// The program reports the nth day (as an integer) on which the evaporator will be out of use.
// Example:
// evaporator(10, 10, 5) -> 29

function evap(content, evapPerDay, threshold) {
  //evapPerDay is % of loss
  //threshold is % when evap is no longer useful
  let days = 0,
    gas = 100;
  while (gas >= threshold) {
    gas -= gas * (evapPerDay / 100);
    days++;
  }
  return days;
}
//console.log(evap(10, 10, 10));

//--------------------------Vowel Count--------------------------//
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  const VOWELS = "aeiou".split("");
  str = str.toLowerCase();
  let count = 0;
  for (s of str) {
    if (VOWELS.includes(s)) count++;
  }
  return count;
}
//console.log(getCount("A llama pajama.")); //6

//--------------------------Get the Middle Char--------------------------//
// You are going to be given a word. Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
// #Examples:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"

function getMiddle(s) {
  //   s = s.split("");
  //   let mid = [],
  //     idx = 0,
  //     idx2 = 0;
  //   if (s.length % 2 !== 0) {
  //     idx = Math.round(s.length / 2) - 1;
  //     mid.push(s[idx]);
  //   } else {
  //     idx = s.length / 2 - 1;
  //     idx2 = idx + 1;
  //     mid.push(s[idx]);
  //     mid.push(s[idx2]);
  //   }
  //   return mid.join("");

  let mid = s.length / 2;
  return s.length % 2 ? s.charAt(Math.floor(mid)) : s.slice(mid - 1, mid + 1);
}
//console.log(getMiddle("Yess"));

//--------------------------Highest and Lowest--------------------------//
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Example:
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

function highAndLow(str) {
  str = str.split(" ").sort((a, b) => a - b);
  return `${str[str.length - 1]} ${str[0]}`;
}
//console.log(highAndLow("4 -3 10 8"));

//--------------------------You are a Square--------------------------//
// You like building blocks. You especially like building blocks that are squares. And what you even like more,
// is to arrange them into a square of square building blocks!
// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle!
// Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait!
// That's it! You just have to check if your number of building blocks is a perfect square.
// Task
// Given an integral number, determine if it's a square number:
// In mathematics, a square number or perfect square is an integer that is the square of an integer;
// \in other words, it is the product of some integer with itself.
// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

//function isSquare(n) {
//   if (n < 0) return `${false}, ${n}: Negative numbers cannot be square numbers`;
//   if (n >= 0 && Math.sqrt(n) % 1 === 0) {
//     return `${true}, ${n} is a square number (${n} * ${n})`;
//   }
//   return `${false}, ${n} is not a square number`;
////}

const isSquare = (n) => (n >= 0 && Math.sqrt(n) % 1 === 0 ? true : false);

//console.log(isSquare(3));

//--------------------------Descending Order--------------------------//
// Your task is to make a function that can take any non-negative integer as an argument and return
// it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

// function descendingOrder(n) {
//   return String(n)
//     .split("")
//     .sort((a, b) => b - a)
//     .join("");
// }

const descendingOrder = (n) =>
  String(n).length !== 1
    ? Number(
        String(n)
          .split("")
          .sort((a, b) => b - a)
          .join("")
      )
    : n;

//console.log(descendingOrder(0));

//--------------------------Mumbling--------------------------//
// This time no story, no theory. The examples below show you how to write function accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt

function accum(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(
      str.charAt(i).toUpperCase() + str.charAt(i).toLowerCase().repeat(i)
    );
  }
  return arr.join("-");
}
//console.log(accum("Hiwha"));

//--------------------------Shortest Word--------------------------//
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(str) {
  str = str.split(" ").sort((a, b) => a.length - b.length);
  return str[0].length;
}
//console.log(findShort("My banana d"));

//--------------------------X's & O's--------------------------//
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive.
// The string can contain any char.

// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  let numX = 0,
    numO = 0;
  for (s of str.toLowerCase().split("")) {
    if (s === "x") {
      numX++;
    } else if (s === "o") {
      numO++;
    }
  }
  return numO === numX ? true : false;
}
//console.log(XO("erghxxoo"));
