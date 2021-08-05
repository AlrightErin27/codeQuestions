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
