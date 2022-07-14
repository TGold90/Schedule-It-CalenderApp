//Pseudo Code
//Add date and time to to jumbotron header (moment)
//add time blocks for each hour
//color code each time block to show past, present, future
//add input and save button to each time block
//save input to local storage
const container = $(".container");
const timeSlots = ["9AM", "10AM", "11Am", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
const timeId = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

var todayDate = $("#currentDay");

function showDate() { // Display current day and time
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    todayDate.text(rightNow);
  }

setInterval(showDate, 1000);

for(let i = 0; i < timeSlots.length; i++) {
  let row = $("<div class='row time-block'>").attr("id", timeId[i]);//add ID to each iteration

  let hour = $("<div class='col-1 hour'>");
  let textArea = $("<textarea class='col-md-10 description'>");
}