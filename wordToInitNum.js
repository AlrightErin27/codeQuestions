// Task:
// Your task is to write the word to number converter. Digits in the number should match letters in the word.
// Plus generated number should be the smallest possible number you can get.

// Words will contain of maximum 10 distinct letters, but word can be any length, even longer than 10 characters long.
// Number can NOT start with 0
// Same letters share the same digit regardless of case
// For empty string return 0
// Examples:
// "A" -> 1 - OK

// "ABA" -> 353 - WRONG ( number is OK, but it's not the smallest number )

// "ABA" -> 333 - WRONG ( different letters map to same digits )

// "ABA" -> 357 - WRONG ( same letters map to different digits )

function wordToNum(word) {
  //digits in num match letters in word
  //generated num is smallest possible num
  //words max contain 10 distinct letters
  //word input can be larger than 10 chars
  //num cannot begin with 0
  //letters are not case sensitive //CHECK
  //
  let lowerCase = word.toLowerCase();
  let splitWord = lowerCase.split("");

  //   console.log(splitWord);
  //   if (word.length === 0) {
  //     return `Longer input needed`;
  //   } else if (word.length === 1) {
  //     return 1;
  //   } else {
  //     let n = splitWord.charCodeAt(0) - 65;
  //     console.log(n);
  //   }
  return splitWord
    .map(function (c) {
      return "abcdefghijklmnopqrstuvwxyz".indexOf(c);
    })
    .join("");
}

console.log(wordToNum("Erin"));
