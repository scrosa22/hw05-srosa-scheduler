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
      var blockOfTime = parseInt($(this).attr("id").split(hour)[0]);

      if (blockOfTime < timeNow) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (blockOfTime === timeNow) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
    });
  }
  $("#hour07 .description").val(localStorage.getItem("hour07"));
  $("#hour08 .description").val(localStorage.getItem("hour08"));
  $("#hour09 .description").val(localStorage.getItem("hour09"));

  timeTracker();
});
