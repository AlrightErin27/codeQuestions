// create a function that takes a list of non-negative integers and strings and returns
// a new list with the strings filtered out.

function filter_list(l) {
  return l.filter(function (elem) {
    return typeof elem != "string";
  });
}

console.log(filter_list([1, "j", 2, "a", "b"])); //[1, 2]
