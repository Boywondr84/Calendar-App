// Date & Time display
var date = moment();
function displayDate() {
    document.getElementById("currentDay").innerText = "Today's date and time are " + date.format("MMMM Do YYYY, h:mm a");
};
displayDate();

var currentHour = date.hour();
// console.log(currentHour);

// hour blocks
var hour9 = (09);
var hourNineBackground = document.getElementById("hour9")
// console.log(hour9);

var hour10 = (10);
var hourTenBackground = document.getElementById("hour10");

var hour11 = (11);
var hourElevenBackground = document.getElementById("hour11");

var hour12 = (12);
var hourTwelveBackground = document.getElementById("hour12");

var hour13 = (13);
var hourThirteenBackground = document.getElementById("hour13");

var hour14 = (14);
var hourFourteenBackground = document.getElementById("hour14");

var hour15 = (15);
var hourFifteenBackground = document.getElementById("hour15");

var hour16 = (16);
var hourSixteenBackground = document.getElementById("hour16");

var hour17 = (17);
var hourSeventeenBackground = document.getElementById("hour17");

// background colors if past, present, future
if (hour9 < currentHour) {
    hourNineBackground.classList.add("past");

} else if (hour9 === currentHour) 
{
    hourNineBackground.classList.add("present");
} else {
    hourNineBackground.classList.add("future");
};

if (hour10 < currentHour) {
    hourTenBackground.classList.add("past");

} else if (hour10 === currentHour) 
{
    hourTenBackground.classList.add("present");
} else 
{
    hourTenBackground.classList.add("future");
};

if (hour11 < currentHour) {
    hourElevenBackground.classList.add("past");
    
} else if (hour11 === currentHour) 
{
    hourElevenBackground.classList.add("present");
} else
{
    hourElevenBackground.classList.add("future");
};

if (hour12 < currentHour) {
    hourTwelveBackground.classList.add("past");

} else if (hour12 === currentHour) 
{
    hourTwelveBackground.classList.add("present");
} else
{
    hourTwelveBackground.classList.add("future");
};

if (hour13 < currentHour) {
    hourThirteenBackground.classList.add("past");

} else if (hour13 === currentHour)
{
    hourThirteenBackground.classList.add("present");
} else
{
    hourThirteenBackground.classList.add("future");
};

if (hour14 < currentHour) {
    hourFourteenBackground.classList.add("past");

} else if (hour14 === currentHour)
{
    hourFourteenBackground.classList.add("present");

} else 
{
    hourFourteenBackground.classList.add("future");
};

if (hour15 < currentHour) {
    hourFifteenBackground.classList.add("past");

} else if (hour15 === currentHour)
{
    hourFifteenBackground.classList.add("present");

} else 
{
    hourFifteenBackground.classList.add("future");
};

if (hour16 < currentHour) {
    hourSixteenBackground.classList.add("past");

} else if (hour16 === currentHour)
{
    hourSixteenBackground.classList.add("present");
} else
{
    hourSixteenBackground.classList.add("future");
};

if (hour17 < currentHour) {
    hourSeventeenBackground.classList.add("past");

} else if (hour17 === currentHour) 
{
    hourSeventeenBackground.classList.add("present");
} else
{
    hourSeventeenBackground.classList.add("future");
};

// save button
$(".saveBtn").on("click", function() {
    var value=$(this)
    .siblings(".description").val();
    var time=$(this)
    .parent().attr("id");
    localStorage.setItem(time,value);
    console.log(value);
    console.log(time);
});

// local storage
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));