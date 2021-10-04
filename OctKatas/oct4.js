//----🕸🕸🕸🕸🕸🕸🕸🕸🕸🕸🕸🕸--- Password Check ---🕸🕸🕸🕸🕸🕸🕸🕸🕸🕸🕸🕸----//
// Password Check - Binary to String
// A wealthy client has forgotten the password to his business website, but he has a list of possible passwords.
// His previous developer has left a file on the server with the name password.txt. You open the file and
// realize it's in binary format.
// Write a script that takes an array of possible passwords and a string of binary representing the possible
// password. Convert the binary to a string and compare to the password array. If the password is found,
// return the password string, else return false;

// function decodePass(passArr, bin) {
//   bin = bin.split(" ");
//   let arr = [];

//   for (let i = 0; i < bin.length; i++) {
//     arr.push(String.fromCharCode(parseInt(bin[i], 2)));
//   }

//   for (let j = 0; j < passArr.length; j++) {
//     return passArr[j] === arr.join("") ? passArr[] : false;
//   }
// }

function decodePass(passArr, bin) {
  let binary = bin.split(" ");
  let password = binary
    .map((elem) => String.fromCharCode(parseInt(elem, 2)))
    .join("");
  for (let i = 0; i < passArr.length; i++) {
    if (passArr[i] == password) {
      return passArr[i];
    }
  }
  return false;
}

// console.log(
//   decodePass(
//     ["password123", "admin", "admin1"],
//     "01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011"
//   )
// );

//----🕸🕸🕸🕸🕸🕸🕸🕸🕸🕸🕸🕸--- Negative Connotation ---🕸🕸🕸🕸🕸🕸🕸🕸🕸🕸🕸🕸----//
// You will be given a string with sets of characters, (i.e. words), seperated by between one and three spaces (inclusive).
// Looking at the first letter of each word (case insensitive-"A" and "a" should be treated the same),
// you need to determine whether it falls into the positive/first half of the alphabet ("a"-"m") or the
// negative/second half ("n"-"z").
// Return True/true if there are more (or equal) positive words than negative words, False/false otherwise.

function connotation(str) {
  str = str.split(" ");
  const POS = "abcdefghijklmABCDEFGHIJKLM";
  let count = 0,
    arr = [];

  for (s of str) if (s !== "") arr.push(s);

  for (let i = 0; i < arr.length; i++) {
    POS.includes(arr[i][0]) ? count++ : count--;
  }

  return count >= 0 ? true : false;
}

// console.log(connotation("Is  this the  best  Kata?"));

//----🕸🕸🕸🕸🕸🕸🕸🕸🕸🕸🕸🕸--- Encrypt This ---🕸🕸🕸🕸🕸🕸🕸🕸🕸🕸🕸🕸----//
// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:
// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.

function encryptThis(txt) {
  txt = txt.split(" ");
  let arr = [];

  for (let i = 0; i < txt.length; i++) {
    if (txt[i].length === 1) {
      arr.push(txt[i][0].charCodeAt(0) + txt[i].substring(i + 1));
    } else {
      let first = txt[i][0],
        second = txt[i][1],
        last = txt[i][txt[i].length - 1],
        sliceSeg = txt[i].slice(2, -1);
      if (txt[i].length === 2) {
        arr.push(first.charCodeAt(0) + last);
      } else if (txt[i].length === 3) {
        arr.push(first.charCodeAt(0) + last + second);
      } else {
        arr.push(first.charCodeAt(0) + last + sliceSeg + second);
      }
    }
  }
  return arr.join(" ");
}

// function encryptThis(txt) {
//   txt = txt.split(" ");
//   let arr = [];
//   for (word of txt) {
//     const first = word[0].charCodeAt(0),
//       second = word[1],
//       last = word[word.length - 1],
//       mid = word.slice(2, -1);

//     if (word.length === 1) {
//       arr.push(first);
//     } else if (word.length === 2) {
//       arr.push(first + last);
//     } else if (word.length === 3) {
//       arr.push(first + last + second);
//     } else {
//       arr.push(first + last + mid + second);
//     }

//     return arr.join(" ");
//   }
// }

// console.log(encryptThis("He had a bandaid"));
