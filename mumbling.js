// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.
//---------------------------------------------------//

function accum(str) {
  let letters = str.split(""),
    words = [];
  //console.log(letters);

  for (let i = 0; i < letters.length; i++) {
    //push letters arr at idx i into empty arr in uppercase
    // words = [E, R, I, N] + the number i is at plus one joining the same letter in lowercase
    // words = [E, Rr, Iii, Nnnn]

    words.push(
      letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase())
    );
  }

  return words.join("-");
}

//console.log(accum("ERIN"));

const echo = (s) => {
  return s
    .split("")
    .map((a, b) => a.toUpperCase() + b.toLowerCase().repeat(i))
    .join("-");
};
console.log(accum("BAT"));
