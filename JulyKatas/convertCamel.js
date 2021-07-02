// Complete the method/function so that it converts dash/underscore delimited words into camel casing.
// The first word within the output should be capitalized only if the original word was capitalized
// (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
//-----------------------------------------------------------------------//
//convert delimited words to camel casing
//1st word should only be cap if OG word was cap

function capFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function camelConversion(str) {
  let splitStr = str.split(/_|-/);
  let result = "";
  let firstUpper = false;

  //if no string input
  if (str.length === 0) return str;

  //if the first letter is upper case... turns first upper to true
  if (str[0] === str[0].toUpperCase()) firstUpper = true;

  //loop thru split string
  for (let i = 0; i < splitStr.length; i++) {
    if (i === 0 && !firstUpper) {
      result += splitStr[i];
    } else {
      result += capFirstLetter(splitStr[i]);
    }
  }
  return result;
  //return newStr
}
//console.log(camelConversion("bananas-in_pjs")); //"bananasInPjs"
//console.log(camelConversion("Bananas-in_suits")); //"BananasInSuits"

//////////////////////////////////VERSION 2///////////////////////////////////

function conversion(str) {
  let regX = RegExp("-|_", "g"); //search for - or _
  let words = str.split(regX);
  let result = words[0];
  for (i = 1; i < words.length; i++) {
    //puts in uppercase every first letter, excluding the first word (i starts in 1)
    result += words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return result;
}

console.log(conversion("bananas-in_pjs")); //"bananasInPjs"
console.log(conversion("Bananas-in_suits")); //"BananasInSuits"
