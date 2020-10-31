let currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
let currentHour = moment().format('h:mm:ss a');
// Hour Array
let nineAm = $("#9am");
let tenAm = $("#10am");
let elevenAm = $("#11am");
let twelvePm = $("#12pm");
let onePm = $("#13pm");
let twoPm = $("#14pm");
let threePm = $("#15pm");
let fourPm = $("#16pm");
let fivePm = $("#17pm");
let sixPm = $("#18pm");
let sevenPm = $("#19pm");

let hour = moment().hours();
let userInput;
let hourSpan;