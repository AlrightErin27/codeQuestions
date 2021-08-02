// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives,
// and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

function invert(arr) {
  //   let inverted = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] >= 0) {
  //       inverted.push(-Math.abs(arr[i]));
  //     } else {
  //       inverted.push(Math.abs(arr[i]));
  //     }
  //   }
  //   return inverted;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(-arr[i]);
  }
  return newArr;
}

console.log(invert([0, 4, -5]));
