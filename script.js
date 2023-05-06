var timeDisplayEl = $('#currentDay');
var timeblockEl = $('#time-block');
var saveBtns = $('.saveBtn');


$(function() {

// Display the current day on the header
    const now = moment();
    const currentDateTime = now.format("YYYY-MM-DD HH:mm:ss");



function displayTime() {
    var hour = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(hour);
}
    setInterval(displayTime, 1000);
    displayTime();

// ****** SAVE *****
    $(".time-block").each(function() {
    var id = $(this).attr("id");
    var event = localStorage.getItem(id);

    if (event !== null) {
        $(this).children(".description").val(event);
    }
});

// ***** SAVE *****
    $(".saveBtn").on("click", function() {
    var eventId = $(this).parent().attr("id");
    var eventText = $(this).siblings(".description").val();

    localStorage.setItem(eventId, eventText);
});

// **** CHANGE COLORS *****
    function updateTimeBlocks() {
    var currentTime = dayjs().hour();

    $(".time-block").each(function() {
        var blockTime = parseInt($(this).attr("id"));

        if (blockTime < currentTime) {
        $(this).children(".description").addClass("past");
    }
    else if (blockTime === currentTime) {
        $(this).children(".description").removeClass("past");
        $(this).children(".description").addClass("present");
    }
    else {
        $(this).children(".description").removeClass("past");
        $(this).children(".description").removeClass("present");
        $(this).children(".description").addClass("future");
    }
    });
}

// Update every second
    setInterval(updateTimeBlocks, 1000);
});