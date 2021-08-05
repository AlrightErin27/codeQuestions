////////////////////////////////////////////Split Strings////////////////////////////////////////////
// Complete the solution so that it splits the string into pairs of two characters.
// If the string contains an odd number of characters then it should replace the missing
// second character of the final pair with an underscore ('_').

// Ex)solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

function solution(str) {
  let arr = [],
    i = 0;
  if (str.length % 2 !== 0) {
    str = str + "_";
  }
  while (i < str.length) {
    arr.push(str[i] + str[i + 1]);
    i += 2;
  }
  return arr;
}
//console.log(solution("errin"));

////////////////////////////////////////////Sum of Digits////////////////////////////////////////////
// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in
// this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digital_root(n) {
  let arr = n.toString().split("");
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (n < 10) {
      return (counter += Number(arr[i]));
    } else if (arr.length === 2) {
      return (counter += Number(arr[i] + arr[i + 1]));
    }
  }

  //   if (n > 10) {
  //     return n;
  //   } else if (arr.length === 2) {
  //     return Number(arr[0] + arr[1]);
  //   } else {
  //     for (let i = 0; i < arr.length; i++) {
  //       counter += parseInt(arr[i]);
  //     }
  //   }

  //   return counter < 10 ? counter : digital_root(result);
}
// console.log(digital_root(45));

////////////////////////////////////////////Count the Number of Duplicates////////////////////////////////////////////
function countDuplicates(str) {
  let arr = str.toLowerCase().split("").sort(),
    count = 0,
    last = "";
  for (let i = 0; i < arr.length; i++) {
    if (i != 0)
      if (arr[i - 1] === arr[i] && last !== arr[i]) count++, (last = arr[i]);
  }
  return count;
}
// console.log(countDuplicates("aBcd")); //0 duplicates
// console.log(countDuplicates("aabbcde")); //a & b are duplicates
// console.log(countDuplicates("indivisibility")); //i occurs 6 times

////////////////////////////////////////////Find the Divisors////////////////////////////////////////////
// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the
// integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string
// '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

function divisors(n) {
  let divs = [];
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      divs.push(i);
    }
  }
  return divs.length ? divs : n + " is prime";
}
//console.log(divisors(600));

////////////////////////////////////////////Anagram Detection////////////////////////////////////////////
// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
// Note: anagrams are case insensitive
// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"
// "Buckethead" is an anagram of "DeathCubeK"

const anagramDetection = (test, og) => {
  const t = test.toLowerCase().split("").sort().join(""),
    o = og.toLowerCase().split("").sort().join("");
  if (t === o) {
    return true;
  }
  return false;
};
//console.log(anagramDetection("Nsh", "Hn"));

////////////////////////////////////////////Name Shuffler////////////////////////////////////////////
function shuffle(str) {
  //   let arr = str.split(" ");
  //   if (arr.length <= 1 || arr.length > 2) {
  //     return `Invalid Input`;
  //   }
  //   return `${arr[1]} ${arr[0]}`;
  return str.split(" ").reverse().join(" ");
}
//console.log(shuffle("Tom Ford"));

////////////////////////////////////////////10 Minute Walk////////////////////////////////////////////
// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early
// to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a
// Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings
// representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter
// (direction) and you know it takes you one minute to traverse one city block, so create a function that will return
// true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will,
// of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e',
// or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

//you have 10 min, n s w e
// you always walk one block per letter
//1 min = 1 block

function walkItOff(walk) {
  if (walk.length < 10) {
    return false;
  }
  let north = 0,
    east = 0;

  for (let i = 0; i < walk.length; i++) {
    if (walk[i] === "n") {
      north++;
    } else if (walk[i] === "s") {
      north--;
    } else if (walk[i] === "e") {
      east++;
    } else {
      east--;
    }
  }
  if (north === 0 && east === 0) {
    return true;
  }
  return false;
}
console.log(walkItOff(["n", "n", "s", "e", "w"]));
