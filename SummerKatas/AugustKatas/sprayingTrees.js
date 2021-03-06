// There are five workers : James,John,Robert,Michael and William.They work one by one and on weekends they rest.
// Order is same as in the description(James works on mondays,John works on tuesdays and so on).You have
// to create a function 'task' that will take 3 arguments(w, n, c):

// Weekday

// Number of trees that must be sprayed on that day

// Cost of 1 litre liquid that is needed to spray tree,let's say one tree needs 1 litre liquid.

// Let cost of all liquid be x

// Your function should return string like this : 'It is (weekday) today, (name), you have to work,
// you must spray (number) trees and you need (x) dollars to buy liquid'

//one tree === one liter
function sprayTrees(w, n, c) {
  const names = ["James", "John", "Robert", "Michael", "William"];
  let name = "";
  if (w === "Monday") {
    name = names[0];
  } else if (w === "Tuesday") {
    name = names[1];
  } else if (w === "Wednesday") {
    name = names[2];
  } else if (w === "Thursday") {
    name = names[3];
  } else {
    name = names[4];
  }
  const x = c * n;
  return `It is ${w} today, ${name}, you have to work, you must spray ${n} trees and you need ${x} dollars to buy liquid`;
}
