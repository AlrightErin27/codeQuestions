//--------------------    🐬             ---Lonely Frog ---------------//
//--------------------🌊🌊🌊🌊🌊🏄🌊🌊🌊🏖🌴------------------------------//
// You are a lonely frog.
// You live on a coordinate axis.
// The meaning of your life is to jump and jump ..
// The only rule is that each jump is 1 units more than the last time.
// Now, here comes your new task. Your starting point is 0, the target point is n.
// Your first jump distance is 1, and the second step is 2, and so on ..
// Of course, you can choose to jump forward or jump backward.
// You need to jump to the target point with minimal steps. Please tell me, what's the minimal steps?

function jumpTo(n) {
  n = Math.abs(n); //makes all inputs positive b/c jump dist is relative to 0

  let position = 0, //start of frog on axis
    jump = 1; //start jump length

  while (position < n) {
    //while the position isn't n
    position += jump; //position adds lenght of current jump
    jump++; //jump adds 1 restarting the cycle
  }

  //once position is equal or greater than n
  if ((position - n) % 2 === 0) {
    //if equal
    return jump - 1;
  } else {
    position += jump;
    return (position - n) % 2 === 0 ? jump : jump + 1;
  }
}

// console.log(jumpTo(7));

//--------------------    🐬             ---Pandemia-------------------//
//--------------------🌊🌊🌊🌊🌊🏄🌊🌊🌊🏖🌴------------------------------//
// ⚠️ The world is in quarantine! There is a new pandemia that struggles mankind.
// Each continent is isolated from each other but infected people have spread before the warning. ⚠️
// 🗺️ You would be given a map of the world in a type of string:
// string s = "01000000X000X011X0X"
// '0' : uninfected
// '1' : infected
// 'X' : ocean
// ⚫ The virus can't spread in the other side of the ocean.
// ⚫ If one person is infected every person in this continent gets infected too.
// ⚫ Your task is to find the percentage of human population that got infected in the end.
// ☑️ Return the percentage % of the total population that got infected.
// ❗❗ The first and the last continent are not connected!

function infected(str) {
  const arr = str.split("X");
  let safe = 0,
    infected = 0;

  for (a of arr) a.includes("1") ? (infected += a.length) : (safe += a.length);

  return (infected / (safe + infected)) * 100 || 0;
}

// console.log(infected("01000000X000X011X0X"));

//--------------------    🐬             ---Sort the Vowels-------------------//
//--------------------🌊🌊🌊🌊🌊🏄🌊🌊🌊🏖🌴-------------------------------------//
// Write a function which takes a input string s and return a string in the following way:
// | on left side of vowels
// | on right side of constinets
// | if empty space

// function sortVowels(str) {
//   let arr = [];
//   const VOWELS = "aeiou".split("");
//   const CONSONANTS = "bcdfghjklmnpqrstvwxyz".split("");
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === " ") {
//       arr.push(` |`);
//     } else if (
//       VOWELS.includes(str[i]) ||
//       VOWELS.includes(str[i].toLowerCase())
//     ) {
//       arr.push(`|${str[i]}`);
//     } else if (
//       CONSONANTS.includes(str[i]) ||
//       CONSONANTS.includes(str[i].toLowerCase())
//     ) {
//       arr.push(`${str[i]}|`);
//     }
//   }

//   return arr.join("\n");
// }

function sortVowels(s) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  if (typeof s === "string")
    return [...s]
      .map((letter) => (vowels.includes(letter) ? `|${letter}` : `${letter}|`))
      .join("\n");
  return "";
}

// console.log(sortVowels("Laszlo Cravensworth"));
