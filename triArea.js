// Calculate area of given triangle. Create a function t_area that will take a string which will represent triangle,
//find area of the triangle, one space will be equal to one length unit. The smallest triangle will have one length unit.

function tArea(s) {
  //formula Area = (height * base)/2
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "\n") {
      count++;
    }
  }
  const area = (count - 2) ** 2 / 2;
  return area;
}
console.log(tArea("\n.\n. .\n. . .\n")); //2
console.log(tArea("\n.\n. .\n")); //.5
