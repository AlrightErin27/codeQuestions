// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative
// persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:

//  persistence(39) # returns 3, because 3*9=27, 2*7=14, 1*4=4
//                  # and 4 has only one digit

//  persistence(999) # returns 4, because 9*9*9=729, 7*2*9=126,
//                   # 1*2*6=12, and finally 1*2=2

//  persistence(4) # returns 0, because 4 is already a one-digit number

function persistence(num) {
  let output = [];
  let digits = num.toString().split("");
  let multiplicative = 0;
  //   console.log(digits);
  //////////////////////////////////////

  //////////////////////////////////////
  return multiplicative;
}
persistence(39);

// if (num <= 0) {
//     console.log("ERROR ❌");
//     return "ERROR ❌";
//   } else if (num.length === 1) {
//     return 0;
//   } else {
//     strNum = num.toString();
//   }
