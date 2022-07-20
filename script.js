
const container = $(".container");
const timeSlots = ["9AM", "10AM", "11Am", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
const timeId = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
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

