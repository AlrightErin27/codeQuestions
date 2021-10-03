//I will give you an integer. Give me back a shape that is as long and wide as the integer.
//The integer will be a whole number between 1 and 50.

let buildSquare = (num) => {
  if (num > 50 || num < 1) {
    return `🔥 ${num} is incorrect input:\n Choose a number between 1 & 50`;
  } else {
    return ("🦀 ".repeat(num) + "\n").repeat(num);
  }
  //return a pic of num square
};
console.log(buildSquare(5));
