// // Given an array of integers, write a function that returns a sorted list of all duplicates in the array.

// function sorted(array) {
//   let doublesArr = [];
//   //sort arr
//   let arraySorted = array.sort();
//   //   console.log(arraySorted);
//   //loop thru array
//   for (let i = 0; i < array.length; i++) {
//     //compare index to next index push into new array if same
//     if (array[i] === array[i + 1]) {
//       doublesArr.push(array[i]);
//     }
//   }

//   //second loop
//   for (let e = 0; e < doublesArr.length; e++) {
//     if (doublesArr[e] === doublesArr[e + 1]) {
//       doublesArr.pop(doublesArr[e]);
//     }
//   }
//   //   console.log({ doublesArr });
//   return doublesArr;
// }

// console.log(sorted([8, 4, 4, 3, 5, 5, 5, 3])); //3

// -----------------------------------------------------
// Given two unsorted strings, write a function that returns the
// number of common characters.

//fxn with string inputs
//return will be a string of common chars

// function sortStrings(str1, str2) {
//   //sort both strings
//   let sorted1 = str1.sort();
//   let sorted2 = str2.sort();
//conditions: check which is larger & loop thru that
//if strings same length loop thru str1 1
//   if (sorted1.length > sorted2.length) {
//     for (let i = 0; i < sorted1.length; i++) {

//     }
//   } else if (sorted1.length < sorted2.length) {
//     for (let i = 0; i < sorted2.length; i++) {
//       console.log("buefb");
//     }
//   } else {
//     console.log("buefb");
//   }
//   //loop thru str1

//   return commonChars;
// }

// Implement an algorithm to determine if a string has all unique
// characters. What if you
// can not use additional data structures?

//fxn input str
//output is boolean

function uniqueChars(str) {
  //convert str to array
  const arr = str.split("");

  //sort our string
  const sortedStr = arr.sort();
  //   console.log(arr, sortedStr);
  //edge case
  if (str.length === 0 || str.length === 1) {
    return true;
  }
  //loop thru sorted
  for (let i = 0; i < sortedStr.length - 1; i++) {
    if (sortedStr[i] === sortedStr[i + 1]) {
      return false;
    }
  }

  return true;
}
console.log(uniqueChars("gsht"));
