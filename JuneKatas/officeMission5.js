// If you have a task that you need to complete on a regular basis, you can set it up in Asana as a recurring task.
// One option is to schedule the task to repeat every k weeks on specified days of the week.

// It would be useful to be able to view the first n dates for which the task is scheduled.
// Given the first date for which the task is scheduled, return an array of the first n dates.

// In this task, you'll likely need month lengths and weekday names, provided here:

// Month lengths from January to December: 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31.

// During leap years February has 29 days. Names of weekdays: "Sunday", "Monday", "Tuesday", "Wednesday",
// "Thursday", "Friday", "Saturday".

// January 1, 2015 was a Thursday.
/////////////////////////////////////////////////////////////////
//task can be scheduled every "k" weeks on "x" day of the week.
//print 1st "n" dates that its scheduled
//returns an array of first dates

function asana(firstDate, daysOfTheWeek) {
  let fourFirstDates = [];

  return fourFirstDates;
}
console.log(asana("01/01/2015", ["Monday", "Thursday"]));
// the output should be
// ["01/01/2015", "05/01/2015", "15/01/2015", "19/01/2015"]
