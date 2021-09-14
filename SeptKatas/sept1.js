//------------🍦🍦🍦---Even or Odd---🍦🍦🍦------------//
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

const evenOrOdd = (n) => (n % 2 ? `Odd` : `Even`);
// console.log(evenOrOdd(200));
// console.log(evenOrOdd(3));

//------------🍦🍦🍦---Sort and Star---🍦🍦🍦------------//
// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and
//     based on the ASCII values of the chars) and then return the first value.
// The returned value must be a string, and have "***" between each of its letters.
// You should not remove or add elements from/to the array.

function twoSort(arrStr) {
  let arr = [];
  for (s of arrStr.sort()[0]) arr.push(s + `***`);
  let str = arr.join("");
  return str.substring(0, str.length - 3);
}
console.log(twoSort(["seals", "apples", "starfish"]));

//   return arrStr.sort()[0].split("").join("***");
