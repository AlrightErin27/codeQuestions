// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

let repeatStr = (n, str) => {
  return str.repeat(n);
};

console.log(repeatStr(6, "I"));
