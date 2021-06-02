// Your family runs a shop and have just brought a Scrolling Text Machine
// (http://3.imimg.com/data3/RP/IP/MY-2369478/l-e-d-multicolour-text-board-250x250.jpg)
// to help get some more business.

// The scroller works by replacing the current text string with a similar text string,
// but with the first letter shifted to the end; this simulates movement.

// You're father is far too busy with the business to worry about such details, so, naturally,
// he's making you come up with the text strings.

// Create a function named rotate() that accepts a string argument and returns an array of
// strings with each letter from the input string being rotated to the end.

// rotate("Hello") // => ["elloH", "lloHe", "loHel", "oHell", "Hello"]
// Note: The original string should be included in the output array The order matters.
// Each element of the output array should be the rotated version of the previous element.

function rotate(string) {
  //   //convert input into array
  //   const newArr = string.split("");

  //   //map thru new array
  //   const mappedArr = newArr.map((e) => newArr);
  //   console.log(mappedArr);

  const map = string
    .split("")
    .map((e) => (string = string.slice(1) + string.slice(0, 1)));

  //returns array of strings
  //each letter from the input must rotate to the end
  return map;
}

console.log(rotate("Banana Butler 🍌"));

// let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// let citrus = fruits.slice(1, 2);
// console.log(citrus);

// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']
