// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string)
// of size sz (ignore the last chunk if its size is less than sz).

// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk;
// otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

// If
// sz is <= 0 or if str is empty return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
//------------------------------------------------------------------------------------//
//input = string of digits, & sz
//cut string into chunks (substring of initial string) into length of size (last chunk can be less)
//if the chunk is % by sz -> reverse it "0123" -> "3210"
//otherwise rotate it to the left by one position "0023" -> "3002"
//return chunks as one string

const inverseOrRotate = (str, sz) => {
  const ln = str.length;
  let arr = [];

  if (sz < 1 || !str || sz > ln) {
    return `BAD DATA`;
  } else if (ln === 1 && sz === 1) {
    return str;
  } else {
    let num = parseInt(ln / sz);
    //console.log(num);
    let a = [],
      b = [];
    for (let i = 0; i < num; i++) {}
  }
};

console.log(inverseOrRotate("1, 2, 3, 4", 2));
