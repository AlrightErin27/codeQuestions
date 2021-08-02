// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:

function findNeedle(haystack) {
  //   let local = 0;
  //   for (let i = 0; i < haystack.length; i++) {
  //     if (haystack[i] === "needle") {
  //       local = i;
  //     }
  //   }
  //   return `found the needle at position ${local}`;

  return "found the needle at position " + haystack.indexOf("needle");
}

console.log(findNeedle([2, "3", "monkey", "needle", 342]));
