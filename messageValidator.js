// In this kata, you have an input string and you should check whether it is a valid message.
// To decide that, you need to split the string by the numbers, and then compare the numbers with
// the number of characters in the following substring.

// For example "3hey5hello2hi" should be split into 3, hey, 5, hello, 2, hi and the function should
// return true, because "hey" is 3 characters, "hello" is 5, and "hi" is 2; as the numbers and the
// character counts match, the result is true.

// Notes:
// Messages are composed of only letters and digits
// Numbers may have multiple digits: e.g. "4code13hellocodewars" is a valid message
// Every number must match the number of character in the following substring, otherwise
// the message is invalid: e.g. "hello5" and "2hi2" are invalid
// If the message is an empty string, you should return true

//---------------------------------------------------------------
//fxn checks if input string is valid message
//split the string by the nums
//then compare the nums with the num or chars in the following substring
//no more than three messages per message
//nums can be multi digits
//any other edge cases are invalid
//returns a boolean. if string is empty it is still true

const isValid = (maybeMessage) => {
  //split string by nums
  const splitStr = maybeMessage.split(/\d+(?:\.\d+)?/g, 4);
  //   console.log(splitStr);

  //return boolean
};

console.log(isValid("3dog2hi10rovejoline")); //true
// console.log(isValid("3dog2hi5first")); //true
// console.log(isValid("")); //true
// console.log(isValid("8jazz")); //false
// console.log(isValid("9")); //false
