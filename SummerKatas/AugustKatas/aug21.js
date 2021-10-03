//🧿🧿🧿~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Map Operator~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~🧿🧿🧿//
// Difference between map and forEach (loop) is that for each doesn't return us anything.
//Map will give a new array without effecting the OG Array.

let dwarves = ["Bifur", "Bofur", "Bombur", "Fili", "Kili"];

// let nameLengths = dwarves.map(function (item, idx, array) {

//returns the amount of times as there are # els in arr//

//////////If you put return 12 it would give us [12, 12, 12, 12, 12] (five times bc = array.length)
/////////If return index [0, 1, 2, 3, 4].... If return item ["Bifur", "Bofur", "Bombur", "Fili", "Kili"]

//});

//////////////////////////////////////////////////////////
let nameLengths = dwarves.map(function (item, idx, array) {
  let len = item.length;
  return len;
});
//console.log(nameLengths);

//////////////////////////////////////////////////////////
let nameYes = dwarves.map(function (item, idx, array) {
  return item + "yes";
});
//console.log(nameYes);

//🧿🧿🧿~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ATwisted Arr 7kyu~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~🧿🧿🧿//
// You have two arrays: arrSearch and arrTake. arrSearch has to be sorted in reverse alphabetical order.
// Now, from arrSearch extract the third element, and from that element select the third letter.
// If the letter you selected matches the first letter of one or more elements of arrTake, return the first
//  element that starts with the respective letter. If there is no element to match in the second array
//then return 'Nothing here'.

function select(arr1, arr2) {
  let letter = arr1.sort().reverse()[2][2];
  return arr2.filter((w) => w[0] == letter)[0] || `Nothing here`;
}

//arrS sorted to reverse alpha order-> extract 3rd el -> third letter from el
//if letter === 1st letter of 1  or 1+ from arrT return 1st el that starts with letter
// console.log(
//   select(
//     ["banana", "rose", "orange", "apple"],
//     ["carrot", "nectarines", "cucumber", "nocturnal"]
//   )
// );

//🧿🧿🧿~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Adding Arrs 7kyu~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~🧿🧿🧿//
// Create a function that takes an array of letters, and combines them into words in a sentence.
// The function should combine all the 0th indexed letters to create the word 'just', all the 1st indexed
//  letters to create the word 'live', etc.
// Shorter words will have an empty string in the place once the word has already been mapped out
// (see the last element in the last element in the array).
// arrAdder([
// ["J", "L", "L", "M"],
//   ["u", "i", "i", "a"],
//   ["s", "v", "f", "n"],
//   ["t", "e", "e", ""];
//     ]) // => "Just Live Life Man"

function arrAdd(arr) {
  let result = "";
  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr.length; j++) {
      result += arr[j][i];
    }
    result += " ";
  }
  return result.trim();
}

// console.log(
//   arrAdd([
//     ["J", "L", "L", "M"],
//     ["u", "i", "i", "a"],
//     ["s", "v", "f", "n"],
//     ["t", "e", "e", ""],
//   ])
// );
