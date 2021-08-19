//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~🌼 🌻 🌞O-RING ARRAYS 7KY🌞 🌻 🌼~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// It started as a discussion with a friend, who didn't fully grasp some way of setting defaults, but I thought the
// idea was cool enough for a beginner kata: binary OR each matching element of two given arrays (or lists, if you do
// it in Python; vectors in c++) of integers and give the resulting ORed array [starts to sound like a tongue twister,
//doesn't it?].

// If one array is shorter than the other, use the optional third parameter (defaulted to 0) to OR the unmatched elements.
// For example:
// orArrays([1,2,3],[1,2,3]) === [1,2,3]
// orArrays([1,2,3],[4,5,6]) === [5,7,7]
// orArrays([1,2,3],[1,2]) === [1,2,3]
// orArrays([1,2],[1,2,3]) === [1,2,3]
// orArrays([1,2,3],[1,2,3],3) === [1,2,3]

function orArrays(arr1, arr2, add) {
  if (arr1.length < arr2.length) {
    [arr1, arr2] = [arr2, arr1];
  }
  return arr1.map((el, idx) => el | arr2[idx] || add);
}
// console.log(orArrays([2, 3], [1, 2, 3]));
// console.log(orArrays([1, 2, 3], [4, 5, 6]));
// console.log(orArrays([1, 2, 3], [1, 2]));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~🌼 🌻 🌞Convert an Array to a String🌞 🌻 🌼~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// Create a function that takes an array of numbers or letters and returns a string.
// Examples
// arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"
// arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"
// arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"

const toStr = (arr) => arr.join("");
//console.log(toStr([1, "d", 4, 5]));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~🌼 🌻 🌞Years to Days🌞 🌻 🌼~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
const convert = (yrs) => yrs * 365;
//console.log(convert(3));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~🌼 🌻 🌞Easy JS🌞 🌻 🌼~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
const firstEl = (arr) => arr[0];
const nextEdge = (s1, s2) => s1 + s2 - 1;
const findPerimeter = (s1, s2) => (s1 + s2) * 2;
const addition = (n) => n++;
const circuitPower = (v, c) => v * c;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~🌼 🌻 🌞CONVERTING OBJS TO ARRS🌞 🌻 🌼~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// Write a function that converts an object into an array,
// where each element represents a key-value pair in the form of an array.

// Examples
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

// toArray({}) ➞ []

function toArray(obj) {
  let arr = [];
  for (const [k, val] of Object.entries(obj)) {
    let newArr = [k, val];
    arr.push(newArr);
  }
  return arr;
}
//console.log(toArray({ shrimp: 15, tots: 12 }));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~🌼 🌻 🌞FIND THE SMALLEST AND BIGGEST NUMBERS🌞 🌻 🌼~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

function minMax(arr) {
  let sArr = arr.sort((a, b) => a - b);
  return [sArr[0], sArr[sArr.length - 1]];
}
//console.log(minMax([-9, 0, 5, 100, 12]));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~🌼 🌻 🌞MATCHSTICK HOUSES🌞 🌻 🌼~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// function matchstickHouse(n) {
//   if (n === 1) return n * 6;
//   let m = n * 6 - (n - 1);
//   return m;
// }
const matchHouses = (n) => (n <= 1 ? n * 6 : n * 6 - (n - 1));
//console.log(matchHouses(2));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~🌼 🌻 🌞ADD UP🌞 🌻 🌼~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
const addUp = (n) => {
  let count = 0;
  for (let i = 1; i < n + 1; i++) count += i;
  return count;
};
//console.log(addUp(4));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~🌼 🌻 🌞TIME FOR MILK AND COOKIES🌞 🌻 🌼~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function
// that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's
// Date month is 0 based, meaning December is the 11th month while January is 0.

const timeForMilkAndCookies = (d) =>
  d.getDate() === 24 && d.getMonth() === 11 ? true : false;

//console.log(timeForCookies(new Date(2013, 12, 24)));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~🌼 🌻 🌞MULTIPLES OF 3 AND 5 6KYU🌞 🌻 🌼~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

function solution(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) sum += i;
  }
  return sum;
}
// console.log(solution(15));
// console.log(solution(10));
// console.log(solution(20));
// console.log(solution(21));
