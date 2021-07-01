// There are some apples that you want to give out as a present.
//You are going to distribute them between some gift boxes in such a way that all
//the boxes will contain an equal number of apples. You can leave out some of the apples, but no more than max_left.
//You also don't want to leave out more apples than necessary; that is, if each box contains N apples,
//the number of left out apples should be less than N.

// Assume that you have an infinite number of gift boxes, and that all of them have the capacity of capacity.
// In how many ways can you distribute the apples satisfying all of the above conditions?

// Input
// The total number of apples (4 <= apples <= 100)
// The maximum amount of apples you can put into a single box (4 <= capacity <= 20)
// The maximum amount of apples you can leave out (0 <= max_left <= 3)
// Output
// The number of possible distributions
// Example
// apples = 7
// capacity = 4
// max_left = 1

// result = 3
// There are three ways to distribute the apples:

// seven boxes, one apple per box, no apples left out
// three boxes, two apples per box, one apple left out
// two boxes, three apples per box, one apple left out

//-----------------------------------------------------------------------//
//all baskets have equal amounts of apples
//...you can leave odd apples out but not more that max_left
//amount of baskets is infinite

const applesDistribution = (apples, boxCapacity, maxResidue) => {
  let applesPerBox = 1;
  for (let i = 2; i <= boxCapacity; i++) {
    if (apples % i <= maxResidue) {
      applesPerBox++;
    }
  }
  return `${applesPerBox} apples per box`;
};

console.log(applesDistribution(7, 4, 1)); //3
console.log(applesDistribution(10, 5, 1)); //4
