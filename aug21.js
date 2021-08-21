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
console.log(
  select(
    ["banana", "rose", "orange", "apple"],
    ["carrot", "nectarines", "cucumber", "nocturnal"]
  )
);

//🧿🧿🧿~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Map Operator~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~🧿🧿🧿//
