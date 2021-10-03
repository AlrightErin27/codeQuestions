/////////////////------------------Opposite Numbers 8kyu------------------/////////////////
// Very simple, given a number, find its opposite.
// Examples:
// 1: -1
// 14: -14
// -34: 34

const opposite = (n) => -n;
//console.log(opposite(100));

/////////////////------------------V A P O R W A V E 7kyu------------------/////////////////
// Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E
// sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character)
// to create this V A P O R W A V E effect.
// Examples:
//   vaporcode("Lets go to the movies") // output => "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
//   vaporcode("Why isn't my code working?") // output => "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"

function vaporcode(str) {
  let arr = [];
  for (s of str.toUpperCase()) if (s !== " ") arr.push(s);
  return arr.join("  ");
}
//console.log(vaporcode("Let's go to the movies"));

/////////////////------------------Smallest Product 7kyu------------------/////////////////
// Given a non-empty array of non-empty integer arrays, multiply the contents of each nested array and return the smallest total.
// Example
// input = [
//   [1, 5],
//   [2],
//   [-1, -3]
// ]
// result = 2

function smallest(arr) {
  return (arr = arr.map((x) => x.reduce((a, b) => a * b)));
  // return arr.sort((a, b) => a - b)[0];
}

//console.log(smallest([[1, 5], [2], [-1, -6, 5]]));

/////////////////------------------Alphabet War 7kyu------------------/////////////////
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high
// and the war began.
// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight.
// When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return
// Let's fight again!.
// The left side letters and their power:
//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:
//  m - 4
//  q - 3
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.

function war(fight) {
  let score = 0;
  for (const l of fight) {
    switch (l) {
      case "w":
        score -= 4;
        break;
      case "p":
        score -= 3;
        break;
      case "b":
        score -= 2;
        break;
      case "s":
        score -= 1;
        break;
      case "m":
        score += 4;
        break;
      case "q":
        score += 3;
        break;
      case "d":
        score += 2;
        break;
      case "z":
        score += 1;
        break;
    }
  }

  return score < 0
    ? "Left side wins!"
    : score > 0
    ? "Right side wins!"
    : "Let's fight again!";
}
//console.log(war("w"));

/////////////////------------------Strange Strings 7kyu------------------/////////////////
// Here you have a connected to a socket, and the data looks very strange.
// It seems to be separated by a random special character! Oh No! We need your
// help to find the special character, parse the data, and return it translated!
// There isn't much time, hurry we need your help!

// function wordSplitter(str) {
//   str = str.split("");
//   for (let i = 0; i < str.length; i++) {
//     if (str[i].match(/[^A-Za-z0-9]/g)) str.splice(i, 1, " ");
//   }
//   return str.join("").split(" ");
// }
const wSplitter = (str) => str.split(/[^a-z\d.-]/i);

//console.log(wSplitter("32.0500;-6C:PITCH=-72#ROLL!21.3"));
//console.log(wSplitter("32.0500;-6C:PITCH=-72#ROLL!21.3"));

/////////////////------------------Beast Feast 8kyu------------------/////////////////
// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule:
// the dish must start and end with the same letters as the animal's name. For example, the great blue
// heron is bringing garlic naan and the chickadee is bringing chocolate cake.
// Write a function feast that takes the animal's name and dish as arguments and returns true or false to
// indicate whether the beast is allowed to bring the dish to the feast.
// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast
// and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string.
// They will not contain numerals.

const feast = (b, d) =>
  b[0] === d[0] && b[b.length - 1] === d[d.length - 1] ? true : false;

//console.log(feast("mole", "magic brownie"));
// function rev(str) {
//   str = str.split(" ");
//   return str.reverse();
// }

const rev = (s) => s.split(" ").reverse();
console.log(rev("hahahah yeah"));
