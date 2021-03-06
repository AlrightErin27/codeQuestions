// Your company, Congo Pizza, is the second-largest online frozen pizza retailer.
// You own a number of international warehouses that you use to store your frozen pizzas,
// and you need to figure out how many crates of pizzas you can store at each location.

// Congo recently standardized its storage containers: all pizzas fit inside a cubic crate,
// 16-inches on a side. The crates are super tough so you can stack them as high as you want.

// Write a function box_capacity() that figures out how many crates you can store in a given warehouse.
// The function should take three arguments: the length, width, and height of your warehouse (in feet)
//  and should return an integer representing the number of boxes you can store in that space.

// For example: a warehouse 32 feet long, 64 feet wide, and 16 feet high can hold 13,824 boxes
// because you can fit 24 boxes across, 48 boxes deep, and 12 boxes high, so box_capacity(32, 64, 16) should return 13824.
//------------------------------------------------------------------------------------------------//

//fxn = how many crates stored at each local?
//all pizzas fit in a cubic crate of 16" & can be stacked infinitely
//3 args length, width & height (feet)
//returns an int = num boxes in each local
//32, 64, 16 === 13824 boxes (24 across, 48 wide & 12 high)

function box_capacity(length, width, height) {
  const crate = 1.33333333333; //in feet
  const totalCrates = (length / crate) * (width / crate) * (height / crate);
  //output to round to whole num
  const rounded = Math.round(totalCrates);
  //returns num boxes fit
  return rounded;
}
console.log(box_capacity(32, 64, 16));
