//--🪲-🕷-🪲-----🍭-👻-🍭-----Find the Stray Number-----🍭-👻-🍭-----🪲-🕷-🪲--//
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.
// The input array will always be valid! (odd-length >= 3)
// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(n) {
  n = n.sort((a, b) => a - b);
  return n[0] === n[1] ? n[n.length - 1] : n[0];
}

// console.log(stray([2, 2, 2, 5, 2]));

//--🪲-🕷-🪲-----🍭-👻-🍭-----Money, Money, Money-----🍭-👻-🍭-----🪲-🕷-🪲--//
// Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does,
// he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount
// to a desired sum of money 'D'.
// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes
// 'T' for the year the new sum is re-invested.
// Note to Tax: not the invested principal is taxed, but only the year's accrued interest

//P amount $ wants to invest
//Y yrs till P is D
//D desired growth
//I yrly interest
//T yrly taxes

function calculateYears(P, I, T, D) {
  let yr = 0;
  while (P < D) {
    P += P * I * (1 - T);
    yr++;
  }
  return yr;
}

//--🪲-🕷-🪲-----🍭-👻-🍭-----Highest Profit Wins-----🍭-👻-🍭-----🪲-🕷-🪲--//
// Ben has a very simple idea to make some profit: he buys something and sells it again.
// Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price.
// Instead, he's going to buy it for the lowest possible price and sell it at the highest.
// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

function minMax(arr) {
  //   let result = [];
  //   if (arr.length === 1) {
  //     result.push(arr[0]) * 2;
  //     return result;
  //   }
  //   arr.sort((a, b) => a - b);
  //   result.push(arr[0]);
  //   result.push(arr[arr.length - 1]);
  //   return result;

  return [Math.min(...arr), Math.max(...arr)];
}
// console.log(minMax([5, 6, 7, 2, 100, 1]));

//--🪲-🕷-🪲-----🍭-👻-🍭-----Don't Give me Five!-----🍭-👻-🍭-----🪲-🕷-🪲--//
// In this kata you get the start number and the end number of a region and should return
// the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!
// Examples:
// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12

function dontGiveMeFive(start, end) {
  let arr = [],
    count = start - 1;
  while (count < end) {
    count++;
    if (!count.toString().match(/5/)) arr.push(count);
  }
  return arr.length;
}
// console.log(dontGiveMeFive(4, 17));

//--🪲-🕷-🪲-----🍭-👻-🍭-----Count the Divisors of a Number-----🍭-👻-🍭-----🪲-🕷-🪲--//
// Count the number of divisors of a positive integer n.
// Random tests go up to n = 500000.
// Examples (input --> output)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

function getDivisorsCnt(n) {
  let count = 0;
  for (let i = 1; i < n + 1; i++) {
    if (n % i === 0) count++;
  }
  return count;
}

// console.log(getDivisorsCnt(10));

//--🪲-🕷-🪲-----🍭-👻-🍭-----Supermarket Queue-----🍭-👻-🍭-----🪲-🕷-🪲--//
// There is a queue for the self-checkout tills at the supermarket. Your task is write a
// unction to calculate the total time required for all the customers to check out!
// input
// customers: an array of positive integers representing the queue. Each integer represents
// a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

// function queueTime(customers, n) {
//   if (customers.length === 0) return 0;
//   if (customers.length === 1) return customers[0];
//   if (n >= customers.length) {
//     customers.sort((a, b) => b - a);
//     return customers[0];
//   }

//   let count = 0;
//   if (n === 1) {
//     for (c of customers) count += c;
//     return count;
//   }

//   for (let i = 1; i < customers.length; i++) count += customers[i];
//   if (customers[0] >= count) return `🍓${customers[0]}`;

//   let temp1 = 0,
//     temp2 = 0;

//   for (let i = 0; i < customers.length; i++) {
//     if (i % 2 === 0) {
//       temp1 += customers[i];
//     } else {
//       temp2 += customers[i];
//     }
//   }
//   return temp1 >= temp2 ? `🦇${temp1}` : `🦀${temp2}`;
// }

function queueTime(customers, reg) {
  let arr = [];

  for (let i = 0; i < reg; i++) {
    arr[i] = 0; //[0, 0]
  }

  for (let i = 0; i < customers.length; i++) {
    arr[0] += customers[i]; //[ 644, 0 ]
    arr.sort((a, b) => a - b); //[ 318, 326 ]
  }

  return arr[arr.length - 1];
}

// console.log(
//   queueTime(
//     [
//       10, 44, 50, 29, 39, 11, 27, 43, 21, 17, 33, 12, 9, 19, 15, 14, 49, 27, 44,
//       18, 49, 21, 23, 20,
//     ],
//     2
//   )
// ); //326
