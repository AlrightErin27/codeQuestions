// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more,
// is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle!
// Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it!
// You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words,
// it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

//------------------------------------------------//
//fxn input int num--> check if square
//returns boolean

// function checkIfSquare(num) {
//   let isSquare = false;
//   if (num < 0) {
//     return `${isSquare}:\n ${num} is negative & cannot be square.`;
//   } else if (Math.sqrt(num) % 1 === 0) {
//     isSquare = true;
//     return `${isSquare}:\n ${num} can be squared`;
//   } else {
//     return `${isSquare}:\n ${num} cannot be squared`;
//   }
// }

// console.log(checkIfSquare(-1));
// console.log(checkIfSquare(0));
// console.log(checkIfSquare(3));
// console.log(checkIfSquare(4));
// console.log(checkIfSquare(25));
// console.log(checkIfSquare(26));

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

// function isSquare(num) {
//   let isSquare = false;
//   if (num < 0) {
//     return `${isSquare}:\n ${num} is negative & cannot be square.`;
//   } else if (Math.sqrt(num) % 1 === 0) {
//     isSquare = true;
//     return `${isSquare}:\n ${num} can be squared`;
//   } else {
//     return `${isSquare}:\n ${num} cannot be squared`;
//   }
// }

function isThisSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}
console.log(isThisSquare(-1));
console.log(isThisSquare(0));
console.log(isThisSquare(3));
console.log(isThisSquare(4));
console.log(isThisSquare(25));
console.log(isThisSquare(26));
