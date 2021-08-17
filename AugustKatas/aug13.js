//-----------------------------🥸----LAST SURVIVOR----🥸-----------------------------//
// You are given a string of letters and an array of numbers.
// The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
// After each removal the size of the string decreases (there is no empty space).
// Return the only letter left.
// Example:

// let str = "zbk", arr = [0, 1]
//     str = "bk", arr = [1]
//     str = "b", arr = []
//     return 'b'
// Notes
// The given string will never be empty.
// The length of the array is always one less than the length of the string.
// All numbers are valid.
// There can be duplicate letters and numbers.

function lastSurvivor(letters, coords) {
  letters = letters.split("");
  for (let i = 0; i < coords.length; i++) {
    letters.splice(coords[i], 1);
  }
  return letters.join("");
}
//console.log(lastSurvivor("fish", [0, 2, 1]));
//ish     //is    //i

//-----------------------------🥸----SQUARE EVERY DIGIT----🥸-----------------------------//
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer

function squareDigits(num) {
  let arr = [];
  num = String(num).split("");

  for (let i = 0; i < num.length; i++) {
    arr.push(num[i] * num[i]);
  }
  return Number(arr.join(""));
}
//console.log(squareDigits(3212));

//-----------------------------🥸----PARTS OF A LIST----🥸-----------------------------//
// Write a function partlist that gives all the ways to divide a list (an array) of at least two elements
// into two non-empty parts.
// Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C:
//     see Examples test Cases - )
// Each part will be in a string
// Elements of a pair must be in the same order as in the original array.

function partList(arr) {
  let newArr,
    result = [];
  for (let i = 1; i < arr.length; i++) {
    newArr = [];
    newArr.push(arr.slice(0, i).join(" "));
    newArr.push(arr.slice(i).join(" "));
    result.push(newArr);
  }
  return result;
}

//console.log(partList(["This", "is", "Sparta!"]));
//This, is Sparta
// This is, Sparta

//-----------------------------🥸----BOUNCING BALLS----🥸-----------------------------//
// A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.
// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).
// His mother looks out of a window 1.5 meters from the ground.
// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

const bouncingBall = (h, b, w) =>
  h <= 0 || b <= 0 || b >= 1 || w >= h ? -1 : 2 + bouncingBall(h * b, b, w);

//console.log(bouncingBall(3, 0.66, 1.5)); //3

//-----------------------------🥸----VASYA CLERK----🥸-----------------------------//
// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. E
// ach of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.
// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
// Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the
// order people queue?
// Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment.
// Otherwise return NO.
// Examples:
// tickets([25, 25, 50]) // => YES
// tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
// tickets([25, 25, 50, 50, 100]) // => NO.

function tix(ppl) {
  let bank25 = 0,
    bank50 = 0;
  for (let p of ppl) {
    if (p === 25) {
      bank25++;
    } else if (p === 50) {
      bank25--;
      bank50++;
    } else {
      bank25--;
      bank25 > 0 ? bank50-- : (bank25 -= 2);
    }
    if (bank25 < 0 || bank50 < 0) return `NO`;
  }
  return `YES`;
}
