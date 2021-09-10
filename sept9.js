///----(っ＾▿＾)۶🍸🌟🍺٩(˘◡˘ )-Growth of a Population----------------///
// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases
// by 2 percent per year and moreover 50 new inhabitants per year come to live in the town.
// How many years does the town need to see its population greater or equal to p = 1200 inhabitants?
// At the end of the first year there will be:
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants
// At the end of the 2nd year there will be:
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)
// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213
// It will need 3 entire years.
// More generally given parameters:
// p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)
// the function nb_year should return n number of entire years needed to get a population greater or equal to p.
// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

function nbYear(p0, percent, aug, p) {
  let count = 0;
  while (p0 < p) {
    p0 += p0 * (percent / 100) + aug;
    count++;
  }
  return count;
}

//console.log(nbYear(1500, 5, 100, 5000)); ///15

///----(っ＾▿＾)۶🍸🌟🍺٩(˘◡˘ )-Is this a Triangle?----------------///
// Implement a method that accepts 3 integer values a, b, c. The method should return true
// if a triangle can be built with the sides of given length and false in any other case.
// (In this case, all triangles must have surface greater than 0 to be accepted).

// function isTriangle(a, b, c) {
//   if (a + b > c && a + c > b && c + b > a) return true;
//   return false;
// }

const isTri = (a, b, c) => (a + b > c && a + c > b && c + b > a ? true : false);

///----(っ＾▿＾)۶🍸🌟🍺٩(˘◡˘ )----Find the Perfect Square----------------///
// You might know some pretty large perfect squares. But what about the NEXT one?
// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter.
// Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.
// Examples:
// findNextSquare(121) --> returns 144
// findNextSquare(625) --> returns 676
// findNextSquare(114) --> returns -1 since 114 is not a perfect square

function findNextSquare(sq) {
  let root = Math.sqrt(sq);
  return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
}

///----(っ＾▿＾)۶🍸🌟🍺٩(˘◡˘ )----Friend or Foe?----------------///
// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise,
// you can be sure he's not...
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
// i.e.
// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.

const friend = (arr) => arr.filter((name) => name.length === 4);

//console.log(friend(["Erin", "Vanessa", "Beth"]));

///----(っ＾▿＾)۶🍸🌟🍺٩(˘◡˘ )----Regex Validate PIN Code----------------///
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.
// Examples
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// function validatePIN(pin) {
//   if (pin.match(/^[0-9]+$/) && (pin.length === 4 || pin.length === 6)) {
//     return true;
//   }
//   return false;
// }

const validatePIN = (pin) =>
  pin.match(/^[0-9]+$/) && (pin.length === 4 || pin.length === 6)
    ? true
    : false;

//console.log(validatePIN("12331"));

///----(っ＾▿＾)۶🍸🌟🍺٩(˘◡˘ )----Binary Addition----------------///
// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
// The binary number returned should be a string.
// Examples:
// add_binary(1, 1) == "10" (1 + 1 = 2 in decimal or 10 in binary)
// add_binary(5, 9) == "1110" (5 + 9 = 14 in decimal or 1110 in binary)

const addBinary = (a, b) => (a + b).toString(2);

//console.log(addBinary(5, 9));

///----(っ＾▿＾)۶🍸🌟🍺٩(˘◡˘ )----Sum of Odd Numbers----------------///
// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

const rowSumOddNumbers = (n) => n * n * n;

// console.log(rowSumOddNumbers(42)); //74088

///----(っ＾▿＾)۶🍸🌟🍺٩(˘◡˘ )----Printer Errors----------------///
// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which,
// for the sake of simplicity, are named with letters from a to m.
// The colors used by the printer are recorded in a control string. For example a "good" control string would
// be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time
// color h then one time color a...
// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is
// produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
// You have to write a function printer_error which given a string will return the error rate of the
// printer as a string representing a rational whose numerator is the number of errors and the denominator
// the length of the control string. Don't reduce this fraction to a simpler expression.
// The string has a length greater or equal to one and contains only letters from ato z.

const printerError = (str) => {
  let f = str
    .toLowerCase()
    .split("")
    .filter((s) => !s.match(/^[a-m]+$/));
  return `${f.length}/${str.length}`;
};
//console.log(printerError("aAaaz"));

///----(っ＾▿＾)۶🍸🌟🍺٩(˘◡˘ )----Persistent Bugger----------------///
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative
// persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(n) {
  for (var i = 0; n > 9; i++) {
    n = n
      .toString()
      .split("")
      .reduce((a, b) => a * b);
  }
  return i;
}
// console.log(persistence(17)); //1 * 7 //==1
//console.log(persistence(27)); //2 * 7 // 1 * 4//==2

///----(っ＾▿＾)۶🍸🌟🍺٩(˘◡˘ )----Take a Ten Minute Walk----------------///
// You live in the city of Cartesia where all roads are laid out in a perfect grid.
// You arrived ten minutes too early to an appointment, so you decided to take the
// opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones
// -- everytime you press the button it sends you an array of one-letter strings representing directions to
// walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and
// you know it takes you one minute to traverse one city block, so create a function that will return true
// if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!)
// and will, of course, return you to your starting point. Return false otherwise.

function isValidWalk(walk) {
  let xAxis = 0,
    yAxis = 0;
  for (block of walk) {
    switch (block) {
      case "w":
        xAxis++;
        break;
      case "e":
        xAxis--;
        break;
      case "n":
        yAxis++;
        break;
      case "s":
        yAxis--;
        break;
    }
  }
  return walk.length === 10 && xAxis + yAxis === 0;
}

// console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
// console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));

///----(っ＾▿＾)۶🍸🌟🍺٩(˘◡˘ )----Switch Alphabet Position----------------///
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.
// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

function alphabetPosition(text) {
  const ALPHA = " abcdefghijklmnopqrstuvwxyz";
  let arr = [];
  for (letter of text.toLowerCase().split("")) {
    if (letter.match(/^[a-z]+$/)) {
      arr.push(ALPHA.indexOf(letter));
    }
  }
  return arr.join(" ");
}
//console.log(alphabetPosition("Erin!"));

///----(っ＾▿＾)۶🍸🌟🍺٩(˘◡˘ )----Unique Order----------------///
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without
// any elements with the same value next to each other and preserving the original order of elements.
// For example:
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

function uniqueOrder(iterable) {
  //   if (!Array.isArray(iterable) === true) {
  //     iterable = iterable.split("");
  //   }
  //   let arr = [];
  //   for (let i = 0; i < iterable.length; i++) {
  //     if (iterable[i] !== iterable[i + 1]) {
  //       arr.push(iterable[i]);
  //     }
  //   }
  //   return arr;
  return [...iterable].filter((a, i) => a !== iterable[i - 1]);
}

// console.log(uniqueOrder([1, 2, 2, 2, 3, 4, 4, 4]));
// console.log(uniqueOrder("AAAABBBCCDAABBB"));

///----(っ＾▿＾)۶🍸🌟🍺٩(˘◡˘ )----Dubstep----------------///
// Let's assume that a song consists of some number of words (that don't contain WUB). To make the dubstep
// remix of this song, Polycarpus inserts a certain number of words "WUB" before the first word of the song
// (the number may be zero), after the last word (the number may be zero), and between words (at least one between
//     any pair of neighbouring words), and then the boy glues together all the words, including "WUB", in one string
//     and plays the song at the club.
// For example, a song with words "I AM X" can transform into a dubstep remix as "WUBWUBIWUBAMWUBWUBX" and cannot
// transform into "WUBWUBIAMWUBX".
// Recently, Jonny has heard Polycarpus's new dubstep track, but since he isn't into modern music, he decided to find
// out what was the initial song that Polycarpus remixed. Help Jonny restore the original song.
// Input
// The input consists of a single non-empty string, consisting only of uppercase English letters, the string's
// length doesn't exceed 200 characters
// Output
// Return the words of the initial song that Polycarpus used to make a dubsteb remix. Separate the words with a space.

// function songDecoder(song) {
//   //   song = song.split("WUB");
//   //   let arr = [];
//   //   for (s of song) {
//   //     if (s !== "") {
//   //       arr.push(s);
//   //     }
//   //   }
//   //   return arr.join(" ");

// }

const songDecoder = (str) =>
  str
    .split("WUB")
    .filter((noise) => noise !== "")
    .join(" ");

// console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"));

///----(っ＾▿＾)۶🍸🌟🍺٩(˘◡˘ )----Your Order, Please----------------///
// Your task is to sort a given string. Each word in the string will contain a single number.
// This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. The words in the input String
// will only contain valid consecutive numbers.
// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words) {
  let arr = words.split(" "),
    result = [];
  for (let i = 0; i <= arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j].indexOf(i) >= 0) {
        result.push(arr[j]);
      }
    }
  }
  return result.join(" ");
}
// console.log(order("a2m I1 ti3red"));
