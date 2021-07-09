// Bob is a chicken sexer. His job is to sort baby chicks into a Male(M) and Female(F) piles.
// When bob can't guess can throw his hands up and declare it with a '?'.

// Bob's bosses don't trust Bob's ability just yet, so they have paired him with an expert sexer.
// All of Bob's decisions will be checked against the experts choices to generate a correctness score.

// Scoring Rules
// When they agree, he gets 1 point.
// When they disagree but one has said '?', he gets 0.5 points.
// When they disagree completely, he gets 0 points.

function correctness(bobsChoice, expertChoice) {
  const bobSorted = bobsChoice.sort();
  const expertSorted = expertChoice.sort();
  let points = 0;
  console.log(bobSorted, expertSorted);

  for (let i = 0; i < bobsChoice.length; i++) {
    if (bobSorted === expertSorted) {
      points += bobsChoice.length;
    } else if (
      (bobSorted[i] === "F" && expertSorted[i] === "?") ||
      (bobSorted[i] === "M" && expertSorted[i] === "?")
    ) {
      points += 0.5;
    } else if (bobSorted[i] === expertSorted[i]) {
      points += 1;
    }
  }
  return `Bob gets ${points} points.`;
}
console.log(
  correctness(
    ["F", "F", "F", "M", "M", "M", "M"],
    ["?", "F", "F", "M", "M", "M", "M"]
  )
);
