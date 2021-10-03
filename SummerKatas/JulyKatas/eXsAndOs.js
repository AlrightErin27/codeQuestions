// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//-----------------------------------//
function XO(str) {
  let xNum = "",
    oNum = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "x") {
      xNum += str[i];
    } else if (str[i].toLowerCase() === "o") {
      oNum += str[i];
    }
  }
  return xNum.length === oNum.length;
}
//console.log(XO("YourMamaLlamaOxx"));
function OX(str) {
  return (
    str
      .toLowerCase()
      .split("")
      .filter((x) => x === "x").length ===
    str
      .toLowerCase()
      .split("")
      .filter((x) => x === "o").length
  );
}
//console.log(OX("YourMamaLlamaxx"));
