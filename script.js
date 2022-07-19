//Pseudo Code
//Add date and time to to jumbotron header (moment)
//add time blocks for each hour
//color code each time block to show past, present, future
//add input and save button to each time block
//save input to local storage
const container = $(".container");
const timeSlots = ["9AM", "10AM", "11Am", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
const timeId = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const saveBtn = $(".saveBtn");
const timeBlock = $('.time-block');
const description = $(".description");

var descriptionText = [];

var todayDate = $("#currentDay");

function showDate() { // Display current day and time
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    todayDate.text(rightNow);
  }

setInterval(showDate, 1000);

// for(let i = 0; i < timeSlots.length; i++) { //this is the javascript option to get 
//   let row = $("<div class='row time-block'>").attr("id", timeId[i]);//add ID to each iteration

//   let hour = $("<div class='col-1 hour'>");
//   let textArea = $("<textarea class='col-md-10 description'>");
//   textArea.attr("id", timeSlots[i]);
//   let saveBtn = $("<button class='col-1 btn saveBtn'>").text('Add Event');
//   container.append(row);

//   hour.text(timeSlots[i]);
//   row.append(hour);
//   row.append(textArea);
//   row.append(saveBtn);
// }

function timeState(){
  let currentHour = moment().hours(); 
  $(".time-block").each(function () {
  let currentBlock = parseInt($(this).attr("id"));
  console.log(currentBlock);
  if (currentBlock < currentHour) {
    $(this).addClass("past");
} else if (currentBlock === currentHour) {
    $(this).removeClass("past");
    $(this).addClass("present");
} else {
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");
}
  });
}

timeState();

saveBtn.click(eventHandle)
 
function eventHandle(){
var eventText = $(this).siblings("textarea").val();
var id = $(this).siblings("textarea").attr("id");
localStorage.setItem(id, eventText);
};
  

$("#hour-09").val(localStorage.getItem("hour-09"));
$("#hour-10").val(localStorage.getItem("hour-10"));
$("#hour-11").val(localStorage.getItem("hour-11"));
$("#hour-12").val(localStorage.getItem("hour-12"));
$("#hour-13").val(localStorage.getItem("hour-13"));
$("#hour-14").val(localStorage.getItem("hour-14"));
$("#hour-15").val(localStorage.getItem("hour-15"));
$("#hour-16").val(localStorage.getItem("hour-16"));
$("#hour-17").val(localStorage.getItem("hour-17"));

