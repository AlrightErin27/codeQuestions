// Number of people in the bus
// There is a bus moving in the city, and it takes and drop some people in each bus stop.

// You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which
// represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

// Your task is to return number of people who are still in the bus after the last bus station (after the last array).
// Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably
// sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer
// can't be negative.

// The second value in the first integer array is 0, since the bus is empty in the first bus stop.
////////////////////////////////////////////////////////////////////////////////////////////////////
//every stop it either +s or -s ppl
//input = arr ints (the num of ppl). arr has two items: 1st ppl + bus, 2nd ppl - bus
// return amount ppl still in bus at end route

function busStops(arrOfArrs) {
  let people = 0;

  //loop thru the amount of stops made arrOfArrs[idx]
  for (let i = 0; i < arrOfArrs.length; i++) {
    //add the amount the amount of people who come and go at each stop
    people += arrOfArrs[i][0];
    people -= arrOfArrs[i][1];
  }
  return people;
}

console.log(
  busStops([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
); //5

console.log(
  busStops([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10],
  ])
); //17
