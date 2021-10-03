// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

//////////////////////////////////////////////////////////////////////////////
//input: string of words, output: highest scoring word
//the closer to the end of the alphabet a letter is the higher it scores
//edge case: 2 words = score -> return first of those 2 words

function high(x) {
  let words = x.split(" "),
    mx = 0,
    res = "";

  for (let i = 0; i < words.length; i++) {
    let s = words[i],
      val = 0;
    for (let j = 0; j < s.length; j++) {
      val += s.charCodeAt(j) - 96;
    }
    if (val > mx) {
      (mx = val), (res = s);
    }
  }
  return res;
}
//console.log(high("man i need a taxi up to ubud")); //taxi

// function highWords(x) {
//   const arr = x.toLowerCase().split(" "); //each word is an item in arr
//   console.log(arr);
//   let sum = 0,
//     holder = 0,
//     holder2 = 0;

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       sum += arr[i].charCodeAt(j) - 96;
//     }
//   }
// }
// console.log(highWords("man i need a taxi"));
