// The student needs to get on a train that leaves from the station D kilometers away in T minutes.

// She can get a taxi that drives at V1 km/h for the price of R €/km or she can walk at V2 km/h for free.

// A correct solution will be a function that returns the minimum price she needs to pay the taxi driver
// or the string "Won't make it!".

// All the inputs will be positive integers, the output has to be a string containing a number with two
// decimal places - or "Won't make it!" if that is the case.

// It won't take her any time to get on the taxi or the train.

// In non-trivial cases you need to combine walking and riding the taxi so that she makes it,
// but pays as little as possible.

//TRAIN LEAVES IN: X km away, in Y mins
//TAXI: speed Z(km)/1 hr, price R(euro)/1 km
//WALK: T(km)/1 hr, free

//fxn output- cheapest price(to two decimals) /or won't make it
//input only positive #s

function calcTheCost(km, hr) {
  ////state////
  let cheapestPrice = 0;

  //how much if taxi//
  const taxiSpeed = km / 1;
  const taxiPrice = km * 1;

  //how much if walk//
  const walkSpeed = 1 * hr;
  const walkPrice = 0;

  /////return/////
  return cheapestPrice;
}

console.log(calcTheCost(300, 2));
