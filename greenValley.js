// Input : an array of integers.

// Output : this array, but sorted in such a way that there are two wings:

// the left wing with numbers decreasing,

// the right wing with numbers increasing.

// the two wings have the same length. If the length of the array is
// odd the wings are around the bottom, if the length is even the bottom is considered to be part of the right wing.

// each integer l of the left wing must be greater or equal to its counterpart r
// in the right wing, the difference l - r being as small as possible. In other words the right
// wing must be nearly as steep as the left wing.

// The function is make_valley or makeValley or make-valley.

// a = [79, 35, 54, 19, 35, 25]
// make_valley(a) --> [79, 35, 25, *19*, 35, 54]
// The bottom is 19, left wing is [79, 35, 25], right wing is [*19*, 35, 54].
// 79..................54
//     35..........35
//         25.
//           ..19

// a = [67, 93, 100, -16, 65, 97, 92]
// make_valley(a) --> [100, 93, 67, *-16*, 65, 92, 97]
// The bottom is -16, left wing [100, 93, 67] and right wing [65, 92, 97] have same length.
// 100.........................97
//     93..........
//                .........92
//         67......
//                .....65
//             -16
//---------------------------------------------------------//

//input arr integers, output the arr sorted into 2 wings
//left wing: nums decrease
//right wing: nums increase
//wings are equal length
//if arr = odd -> bottom is right wing
//left wing: must be >= its right counter part
//right wing: the dif between its left counter part must be as small as possible

function makeValley(arr) {
  let leftW = []; //decrease
  let rightW = []; //increase

  //sort arr from biggest to smallest
  let sorted = arr.sort((a, b) => b - a);
  //console.log(sorted);

  for (let i = 0; i < arr.length; i++) {
    if (i % 2) {
      rightW.push(arr[i]);
    } else {
      leftW.unshift(arr[i]);
    }
  }
  return rightW.concat(leftW).reverse();
  //return `${leftW},${rightW}`;
  //return arr
}

console.log(makeValley([1, 44, 3, 12]));
