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
