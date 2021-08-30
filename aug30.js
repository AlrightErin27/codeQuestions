//============(っ ͡❛ ͜ʖ ͡❛)っ 💕🐰 💕===Create Phone Number===================//
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers i
// n the form of a phone number.
// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

const createPhoneNumber = (n) =>
  `(${n.slice(0, 3).join("")}) ${n.slice(3, 6).join("")}-${n
    .slice(6, 10)
    .join("")}`;

//console.log(createPhoneNumber([8, 3, 1, 4, 5, 7, 1, 3, 8, 4]));

//============(っ ͡❛ ͜ʖ ͡❛)っ 💕🐰 💕===Who Likes it?===================//
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts,
// pictures or other items. We want to create the text that should be displayed next to such an item.
// Implement the function likes which takes an array containing the names of people that like an item.
// It must return the display text as shown in the examples:

// likes [] -- must be "no one likes this"
// likes ["Peter"] -- must be "Peter likes this"
// likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"

function likes(names) {
  if (names.length === 0) {
    return `no one likes this`;
  } else if (names.length === 1) {
    return `${names} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[3]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

//console.log(likes(["Bella", "Edward", "Jacob", "Alice"]));

//============(っ ͡❛ ͜ʖ ͡❛)っ 💕🐰 💕===Sum of Digits / Digital Root===================//
// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this
// way until a single-digit number is produced. The input will be a non-negative integer.
// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digital_root(n) {
  let count = 0;
  for (num of n.toString().split("")) {
    count += Number(num);
  }
  return Number(count);
}
console.log(digital_root(1));
