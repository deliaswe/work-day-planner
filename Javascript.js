$(document).ready(function () {
    const saveBtnEl = document.querySelector("saveBtn");
     // Event listenters to save and clear events
   // Event listener for saveBtn click
    $('.saveBtn').on('click', function (e) {
    e.preventDefault();
    var events = $(this).siblings('.description').val();
     // get the id attribute
    var currentHour = $(this).parent().attr('id');
     // save in local storage
    localStorage.setItem(currentHour, events);
});
    clearBtn = document.querySelector("#clear-btn");
   //Event listener to clear planner and local storage
    clearBtn.addEventListener("click",function(e) {
    e.preventDefault();
    $(".description").val("");
    localStorage.clear();
});
   // var today = dayjs().format("dddd, MMMM DD YYYY");
   // var today = dayjs();
var currentHour = dayjs().format('HH');
timeBlock = document.querySelector("time-block");
   //compare past, present and future and call matching class
    $(".time-block").each(function() {
    var timeBlock = $(this).attr("id").split("-")[1];
    if (currentHour == timeBlock) {
        $(this).addClass("present");
        $(this).children(".description").addClass("present");
    } else if (currentHour < timeBlock) {
        $(this).removeClass("present");
        $(this).addClass("future");
    } else if (currentHour > timeBlock) {
        $(this).removeClass("future");
        $(this).addClass("past");
    }
});
   // Get item from local storage if any added
    $('#hour-09 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));
 // Adds current date and time to header

    function currentDateAndTime() {
        setInterval(function () {
            const today = dayjs().format("dddd, MMMM DD YYYY");
            $('#currentDay').text(today);
        })
        };
    currentDateAndTime();
   // $('#currentDay').text(dayjs().hour());
   // let displayDate = document.getElementById("currentDay");
   // displayDate.innerHTML = today; //
});