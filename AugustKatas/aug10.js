//-----------------//-------------🌖 🌗 🌘 You Got Change?🌒 🌓 🌔-------------//-----------------//
// Create a function that will take any amount of money and break it down to the smallest number of bills as possible.
// Only integer amounts will be input, NO floats. This function should output a sequence, where each element in the array
//  represents the amount of a certain bill type. The array will be set up in this manner:
// array[0] ---> represents $1 bills
// array[1] ---> represents $5 bills
// array[2] ---> represents $10 bills
// array[3] ---> represents $20 bills
// array[4] ---> represents $50 bills
// array[5] ---> represents $100 bills

// In the case below, we broke up $365 into 1 $5 bill, 1 $10 bill, 1 $50 bill, and 3 $100 bills.
// giveChange(365) // =>  [0,1,1,0,1,3]
// In this next case, we broke $217 into 2 $1 bills, 1 $5 bill, 1 $10 bill, and 2 $100 bills.
// giveChange(217) // => [2,1,1,0,0,2]

function giveChange(num) {
  const bills = [100, 50, 20, 10, 5, 1];
  let arr = [];
  for (let i = 0; i < 6; i++) {
    let billsDiv = Math.floor(num / bills[i]);
    arr.push(billsDiv);
    num -= bills[i] * billsDiv;
  }
  return arr.reverse();
}
//console.log(giveChange(365));

//-----------------//-------------🌖 🌗 🌘 Not Very Secure🌒 🌓 🌔-------------//-----------------//
// In this example you have to validate if a user input string is alphanumeric. The given string is not
// nil/null/NULL/None, so you don't have to check that.
// The string has the following conditions to be alphanumeric:
// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore

function alpha(str) {
  for (let i = 0; i < str.length; i++) {}
  return false;
}
console.log(alpha("L8trG8tr"));
