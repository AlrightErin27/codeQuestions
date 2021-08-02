function add(num1, num2) {
  let arr1 = num1.toString().split(""),
    arr2 = num2.toString().split("");
  let result = [];

  while (arr1.length > 0 || arr2.length > 0) {
    let digit1 = arr1.pop(),
      digit2 = arr2.pop();
    let temp = (digit1 ? +digit1 : 0) + (digit2 ? +digit2 : 0);
    result.push(temp);
  }
  return +result.reverse().join("");
}

//16 + 18 = 2 14
//26 + 39 = 5 15
//122 + 81 = 1 10 3
console.log(add(164, 18)); //  1 7 12
