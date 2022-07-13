var todayDate = $("#currentDay");


function showDate() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    todayDate.text(rightNow);
  }

  setInterval(showDate, 1000);