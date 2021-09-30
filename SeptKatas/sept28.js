//---------🙈 🙉 🙊--------Tortoise Racing--------🙈 🙉 🙊-------------//
// Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour.
// Young B knows she runs faster than A, and furthermore has not finished her cabbage.
// When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour.
// How long will it take B to catch A?
// More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0)
// and a lead g (integer > 0) how long will it take B to catch A?
// The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds
// (round down to the nearest second) or a string in some languages.
// If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, Pascal,
// [-1, -1, -1] for Perl,[] for Kotlin or "-1 -1 -1".

//A goes 720 feet / 1 hr
//B goes 850 feet / 1 hr
//A has a 70 feet lead

// function race(slowT, fastT, lead) {
//   //how long for b to run lead
//   let bTimeMins = fastT / (60 * lead);
//   //how far A has gone during that
//   let aDiffFt = 60 / (slowT * bTimeMins);
//   return aDiffFt;
//   //return [hour, min, sec] of how long it will take for B to reach A
// }

const race = (slowT, fastT, lead) => {
  if (fastT < slowT) return null;
  let secs = Math.floor((lead / (fastT - slowT)) * 3600);
  let h = Math.floor(secs / 3600);
  let m = Math.floor((secs - h * 3600) / 60);
  let s = secs - h * 3600 - m * 60;
  return [h, m, s];
};

//console.log(race(720, 850, 70));
