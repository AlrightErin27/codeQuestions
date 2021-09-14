//--------------------- ┌───── •✧ 🌸 ✧• ─────┐ ---------------------//
//--------------------- Stop gninnipS My sdroW ---------------------//
//--------------------- └───── •✧ 🌸 ✧• ─────┘ ---------------------//
// Write a function that takes in a string of one or more words, and returns the same string,
// but with all five or more letter words reversed (like the name of this kata).
// Strings passed in will consist of only letters and spaces.
// Spaces will be included only when more than one word is present.
// Examples:
// spinWords("Hey fellow warriors") => "Hey wollef sroirraw"
// spinWords("This is a test") => "This is a test"
// spinWords("This is another test") => "This is rehtona test"

function spinWords(str) {
  //   let arr = [];
  //   const s = str.split(" ");
  //   for (let i = 0; i < s.length; i++) {
  //     s[i].length < 5
  //       ? arr.push(s[i])
  //       : arr.push(s[i].split("").reverse().join(""));
  //   }
  //   return arr.join(" ");

  return str
    .split(" ")
    .map(function (w) {
      return w.length < 5 ? w : w.split("").reverse().join("");
    })
    .join(" ");
}

//console.log(spinWords("I'm in a glass case of emotion"));

//--------------------- ┌───── •✧ 🌼 ✧• ─────┐ ---------------------//
//---------------------       Array.diff       ---------------------//
//--------------------- └───── •✧ 🌼 ✧• ─────┘ ---------------------//
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// arrayDiff([1,2,2,2,3],[2]) == [1,3]

const arrayDiff = (a, b) => a.filter((e) => !b.includes(e));

// console.log(arrayDiff([4, 9, 1, 23, 9], [9, 1]));
// console.log(arrayDiff([], [100, 300, 200]));

//--------------------- ┌───── •✧ 🐯 ✧• ─────┐ ---------------------//
//---------------------     Bit Counting       ---------------------//
//--------------------- └───── •✧ 🐯 ✧• ─────┘ ---------------------//
// Write a function that takes an integer as input, and returns the number of bits that are equal to one in
// the binary representation of that number. Y
// ou can guarantee that input is non-negative.
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

// function countBits(n) {
//   let num = n.toString(2).split(""),
//     count = 0;
//   for (e of num) if (e == 1) count++;
//   return count;
// }
const countBits = (n) =>
  n
    .toString(2)
    .split("")
    .filter((e) => e == 1).length;

//console.log(countBits(1234));

//--------------------- ┌───── •✧ 🐙 ✧• ─────┐ ---------------------//
//---------------------    Sum of Positive     ---------------------//
//--------------------- └───── •✧ 🐙 ✧• ─────┘ ---------------------//
// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0

// const positiveSum = (arr) => {
//   let sum = 0;
//   for (a of arr) {
//     if (a > 0) sum += a;
//   }
//   return sum;
// };

const positiveSum = (arr) => arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);

// console.log(positiveSum([-9, 3, 4, -2, 0]));

//--------------------- ┌───── •✧ 🐸 ✧• ─────┐ ---------------------//
//---------------------  Counting Duplicates   ---------------------//
//--------------------- └───── •✧ 🐸 ✧• ─────┘ ---------------------//
// Write a function that will return the count of distinct case-insensitive alphabetic characters
// and numeric digits that occur more than once in the input string. The input string can be assumed to contain only
// alphabets (both uppercase and lowercase) and numeric digits.
// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
  let t = text.toLowerCase().split(""),
    count = 0,
    used = [];

  t.forEach(function (l) {
    if (!used.includes(l) && text.toLowerCase().split(l).length - 1 > 1) {
      count++;
      used.push(l);
    }
  });
  return count;
}

// console.log(duplicateCount("eeesfccgnde")); //1

//--------------------- ┌───── •✧ 🍁 ✧• ─────┐ ---------------------//
//---------------------    Return Negative     ---------------------//
//--------------------- └───── •✧ 🍁 ✧• ─────┘ ---------------------//
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// Example:
// makeNegative(1); // return -1
// makeNegative(-5); // return -5
// makeNegative(0); // return 0
// makeNegative(0.12); // return -0.12
// Notes:
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

// const makeNegative = (n) => (n !== 0 ? -n : 0);
const makeNegative = (n) => -Math.abs(n);

// console.log(makeNegative(9));

//--------------------- ┌───── •✧ 🪲 ✧• ─────┐ ---------------------//
//---------------------   Duplicate Encoder    ---------------------//
//--------------------- └───── •✧ 🪲 ✧• ─────┘ ---------------------//
// The goal of this exercise is to convert a string to a new string where each character in the
// new string is "(" if that character appears only once in the original string, or ")" if that
// character appears more than once in the original string. Ignore capitalization when determining
// if a character is a duplicate.
// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read
// "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(str) {
  let result = "";
  const word = str.toLowerCase();
  for (w of word) {
    word.lastIndexOf(w) == word.indexOf(w) ? (result += `(`) : (result += `)`);
  }
  return result;
}

// console.log(duplicateEncode("dinEe"));
