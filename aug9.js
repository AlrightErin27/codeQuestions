////////////////////////////////////////🍌 🍉 🍇 🍓 🫐 Sum of Pairs 🫐 🍓 🍇 🍉 🍌////////////////////////////////////////
// Given a list of integers and a single sum value, return the first two values (parse from the left please)
// in order of appearance that add up to form the sum.

function sumPairs(ints, s) {
  //   let reverse = ints.reverse(),
  //     pairs = [];
  //   for (let i = 0; i < ints.length; i++) {
  //     for (let j = 0; j < ints.length; j++) {
  //       if (reverse[i] + reverse[j] === s) {
  //         pairs = [reverse[i], reverse[j]];
  //       } else if (reverse[i] + reverse[j] !== s && ints[i] + ints[j] === s) {
  //         pairs = [ints[i], ints[j]];
  //       }
  //     }
  //   }
  //   if (pairs.length !== 0) {
  //     return pairs;
  //   }

  let limit = ints.length,
    result,
    i,
    j;

  for (i = 0; i < limit; i++) {
    for (j = i + 1; j < limit; j++) {
      if (ints[i] + ints[j] == s) {
        result = [ints[i], ints[j]];
        limit = j;
      }
    }
  }

  return result;
}
// console.log(sumPairs([10, 5, 2, 3, 7, 5], 10)); //[3, 7]
// console.log(sumPairs([5, 4, 2, 1], 6)); //[5, 1]

/////////////////////////////////////🍌 🍉 🍇 🍓 🫐 Count the Smiley Faces 🫐 🍓 🍇 🍉 🍌/////////////////////////////////////
//eyes must be: : or ;
//nose can be: - or ~
//mouth must be: ) or D
function countSmileys(arr) {
  //   var smileys = [
  //     ":)",
  //     ";)",
  //     ":-)",
  //     ";-)",
  //     ";~)",
  //     ":~)",
  //     ":D",
  //     ";D",
  //     ":-D",
  //     ":~D",
  //     ";-D",
  //     ";~D",
  //   ];
  //   var count = 0;
  //   for (var i = 0; i < arr.length; i++) {
  //     for (var j = 0; j < smileys.length; j++) {
  //       if (arr[i] === smileys[j]) {
  //         count++;
  //       }
  //     }
  //   }
  //   return count;

  let count = 0,
    SMILES = [
      ":D",
      ";D",
      ":)",
      ";)",
      ":-D",
      ";-D",
      ":-)",
      ";-)",
      ":~D",
      ";~D",
      ":~)",
      ";~)",
    ];
  for (let i = 0; i < arr.length; i++) {
    if (SMILES.includes(arr[i])) count++;
  }
  return count;
}
//console.log(countSmileys([":)", ";(", ";}", ":-D"])); //2

/////////////////////////////////////🍌 🍉 🍇 🍓 🫐 Break the Camel 🫐 🍓 🍇 🍉 🍌/////////////////////////////////////
// Complete the solution so that the function will break up camel casing, using a space between words.
// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
function camelBreak(str) {
  let arr = [];
  if (str === "" || str === str.toLowerCase()) return str;
  const split = str.split("");
  for (let i = 0; i < split.length; i++)
    split[i] === split[i].toLowerCase()
      ? arr.push(split[i])
      : arr.push(" ", split[i]);

  return arr.join("");
}
//console.log(camelBreak("camelCasing"));

/////////////////////////////////////🍌 🍉 🍇 🍓 🫐 Move the Zeros 🫐 🍓 🍇 🍉 🍌/////////////////////////////////////
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the
// order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  //   const NUMS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  //   let newArr = [],
  //     count = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     if (!NUMS.includes(arr[i])) return false;
  //     if (arr[i] === 0) {
  //       count++;
  //     } else {
  //       newArr.push(arr[i]);
  //     }
  //   }
  //   if (count === 0) {
  //     return newArr;
  //   } else {
  //     for (let j = 0; j < count; j++) {
  //       newArr.push(0);
  //     }
  //     return newArr;
  //   }

  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) arr[count++] = arr[i];
  }
  for (let i = count; i < arr.length; i++) arr[i] = 0;
  return arr;
}
//console.log(moveZeros([1, 0, 2, 3, 0, 5]));

/////////////////////////////////////🍌 🍉 🍇 🍓 🫐 Your Order Please 🫐 🍓 🍇 🍉 🍌/////////////////////////////////////
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position
// the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid
// consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words) {
  words = words.split(" ");
  const num = "123456789".split("");
  let yourOrder = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (num.indexOf(words[i][j] > -1)) {
        yourOrder[num.indexOf(words[i][j])] = words[i];
      }
    }
  }
  return yourOrder.join(" ");
}
//console.log(order("is2 Thi1s T4est 3a")); //Th1is is2 3a T4est
