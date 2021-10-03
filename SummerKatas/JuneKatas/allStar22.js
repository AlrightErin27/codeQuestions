// All Star Code Challenge #22

// Create a function that takes an integer argument of seconds and converts the
// value into a string describing how many hours and minutes comprise that many seconds.

// Any remaining seconds left over are ignored.

// Note:
// The string output needs to be in the specific form - "X hour(s) and X minute(s)"

// For example:

// 3600 --> "1 hour(s) and 0 minute(s)"
// 3601 --> "1 hour(s) and 0 minute(s)"
// 3500 --> "0 hour(s) and 58 minute(s)"
// 323500 --> "89 hour(s) and 51 minute(s)"

//make fxn with integer input in seconds
//fxn converts input into a string of hours & minutes.
//remaining seconds are ignored.

function converter(seconds) {
  if (seconds <= 0) {
    return `Input error!`;
  } else {
    const amountHrs = Math.floor(seconds / 3600);
    const amountMins = Math.floor((seconds % 3600) / 60);
    return `${amountHrs} hr(s) and ${amountMins} min(s)`;
  }
  //
}

console.log(converter(7260));
console.log(converter(-7260));
