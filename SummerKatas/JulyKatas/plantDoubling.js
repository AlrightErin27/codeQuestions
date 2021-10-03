//starts off with plants = 0
//every morning rob can plant as many as he'd like
//every night each plant becomes 2 plants

//rob wants a total of n plants
//find min num of plants he needs to plant in 1 day

// Example
// n = 5, output is 2
//to get 5 plants he adds 1 plant on morning 1 ---> by 3rd morning he'd have 4
//that morning he plants 1 more to get 5.

// n = 5, output is 2
// n = 8, output is 1
// n = 536870911, output is 29
// n = 1, output is 1
////////////////////////////////////////////////////////////////////////////////////////

function plantDoubling(n) {
  let count = 1;
  while (n !== 1) {
    if (n % 2) {
      n -= 1;
      count += 1;
    } else {
      n /= 2;
    }
  }
  return count;
}

//console.log(plantDoubling(536870911));
