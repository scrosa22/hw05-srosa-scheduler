var todaysDate = moment().format("dddd, MMM Do YYYY");
$("#currentDay").html(todaysDate);

$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
  });

  function timeTracker() {
    var timeNow = moment().hour();

    $(".time-block").each(function () {
      var blockOfTime = parseInt($(this).attr("id").split("hour")[1]);
    //   debugger;
      if (blockOfTime < timeNow) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (blockOfTime === timeNow) {
        $(this).removeClass("future");
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }
  $("#hour07 .description").val(localStorage.getItem("hour07"));
  $("#hour08 .description").val(localStorage.getItem("hour08"));
  $("#hour09 .description").val(localStorage.getItem("hour09"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));
  $("#hour18 .description").val(localStorage.getItem("hour18"));
  $("#hour19 .description").val(localStorage.getItem("hour19"));
 

  timeTracker();
});
