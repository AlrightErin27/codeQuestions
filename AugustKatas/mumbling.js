// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    arr.push(s.charAt(i).toUpperCase() + s.charAt(i).toLowerCase().repeat(i));
  }
  return arr.join("-");
}
console.log(accum("Erin"));
