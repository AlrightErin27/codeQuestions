// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// function shortestWord(str) {
//   let arr = str.split(" ");
//   let min = arr[0].length;

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i].length < min) {
//       min = arr[i].length;
//     }
//   }
//   return min;
// }

const shortestWord = (str) => {
  return str.split(" ").sort((a, b) => a.length - b.length)[0].length || 0;
};

console.log(shortestWord("a castle in the sky")); //1
console.log(shortestWord("because everything wont")); //4
console.log(shortestWord("sky yes please")); //3
