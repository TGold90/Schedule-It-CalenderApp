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

saveBtn.on("click", function(event){
  (event.target.parentElement.id)

// function saveEvent(event){
  console.log(event.target.parentElement.id);

  // event.preventDefault();

  let eventText = description.val; //this is returning null
  console.log(eventText);

  if (eventText === "") {
  return;

}
  descriptionText.push(eventText);
  description.val = "";

  console.log(descriptionText);
  
  storeEvent();
})

function storeEvent() {
  
  localStorage.setItem("descriptionText", JSON.stringify(descriptionText));
}

