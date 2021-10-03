// Write a function that returns true if the number is a "Very Even" number.
// If a number is a single digit, then it is simply "Very Even" if it itself is even.
// If it has 2 or more digits, it is "Very Even" if the sum of it's digits is "Very Even".

function isVeryEvenNumber(n) {
  //   const str = String(n);
  //   //console.log(str);
  //   let total = 0;
  //   for (let i = 0; i < str.length; i++) {
  //     total += Number(str[i]);
  //   }
  //   let count = 0;
  //   const str = String(n);
  //   if (str.length === 1 && n % 2 === 0) {
  //     return true;
  //   } else {
  //     for (let i = 0; i < str.length; i++) {
  //       count += Number(str[i]);
  //       if (count.length === 1)
  //     }
  //   }

  while (n > 9) {
    n = String(n)
      .split("")
      .reduce((a, c) => a + +c, 0);
  }
  return n % 2 == 0;
}

console.log(isVeryEvenNumber([33]));
