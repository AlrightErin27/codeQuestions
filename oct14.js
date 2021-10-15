//         .-.             💀 Decode the Morse Code 💀                 =="
//        (o.o)                                                  .-.   \(_
//         (n)                                                  (-.-)  ,/
//       .-="=-.  \)                                             (-)  ()
//      // =T= \\,/                                            .-="=.//
//     () ==|== ()                                            //==I==`
//      \  ="=                                           _\__()  ===
//      /)(0V0)                                                 (0V0)
//        // \\                                                // //
//       //   \\                                              // //
//      ()     ()                                            () ()
//       \\    ||                                             \\ \\
//        \'   '|                                              \` \`
//      =="     "==                                          ==" =="
const decodeLetter = (letter) => {
  return MORSE_CODE[letter];
};

const decodeWord = (word) => {
  return word.split(" ").map(decodeLetter).join("");
};

const decodeMorse = (morseCode) => {
  return morseCode.trim().split("   ").map(decodeWord).join(" ");
};

// helper - this is preloaded Morse code:

const MORSE_CODE = {
  ".-": "A",
  "-…": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "…": "S",
  "-": "T",
  "..-": "U",
  "…-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "…--": "3",
  "….-": "4",
  "…..": "5",
  "-….": "6",
  "--…": "7",
  "---..": "8",
  "----.": "9",
};

// console.log(decoder(".... . -.--   .--- ..- -.. ."));

//         .-.            💀 Remove 1st & Last Letter 💀                 =="
//        (o.o)                                                  .-.   \(_
//         (n)                                                  (-.-)  ,/
//       .-="=-.  \)                                             (-)  ()
//      // =T= \\,/                                            .-="=.//
//     () ==|== ()                                            //==I==`
//      \  ="=                                           _\__()  ===
//      /)(0V0)                                                 (0V0)
//        // \\                                                // //
//       //   \\                                              // //
//      ()     ()                                            () ()
//       \\    ||                                             \\ \\
//        \'   '|                                              \` \`
//      =="     "==                                          ==" =="
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
// You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

const removeChar = (str) => str.slice(1, -1);
// console.log(removeChar("halloween"));
