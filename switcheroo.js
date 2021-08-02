// Given a string made up of letters a, b, and/or c, switch the position of letters a and b
// (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

function switcheroo(x) {
  //   let arr = x.split("");
  //   let viceVersaArr = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === "a") {
  //       viceVersaArr.push("b");
  //     } else if (arr[i] === "b") {
  //       viceVersaArr.push("a");
  //     } else {
  //       viceVersaArr.push("c");
  //     }
  //   }
  //   return viceVersaArr.join("");

  return x
    .split("")
    .map(function (e) {
      if (e === "b") return "a";
      if (e === "a") return "b";
      if (e === "c") return "c";
    })
    .join("");
}

console.log(switcheroo("aabc"));
