// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5
//-------------------------------------------------------------------------------//
//nathan drinks .5 litres / hour
// x hrs = ? litres?
//round return to smallest value

const cycling = (hours) => {
  let approxLiters = hours * 0.5;
  const liters = Math.round(approxLiters);
  return liters;
};
console.log(cycling(6.7));
