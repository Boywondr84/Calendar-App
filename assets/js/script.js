// Date & Time display
var date = moment();
function displayDate() {
    document.getElementById("currentDay").innerText = "Today's date and time are " + date.format("MMMM Do YYYY, h:mm:ss a");
};
displayDate();

$(".saveBtn").on("click", function() {
    var value=$(this)
    .siblings(".description").val();
    var time=$(this)
    .parent().attr("id");
    localStorage.setItem(time,value);
    console.log(value);
    console.log(time);
});

var currentHour=moment().hour();
console.log(currentHour);
//.time-block to compare current hour to calendar hour
$(".time-block").each(function() {
    var timeblock=parseInt($(this).attr("id"));
    //if statement
    if (timeblock < currentHour) {
        $(this).addClass("past");
    } 
    else if (timeblock === currentHour) {
        $(this).addClass("present");
    }
    else
        $(this).addClass("future");
});

$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-1 .description").val(localStorage.getItem("hour-1"));
$("#hour-2 .description").val(localStorage.getItem("hour-2"));
$("#hour-3 .description").val(localStorage.getItem("hour-3"));
$("#hour-4 .description").val(localStorage.getItem("hour-4"));
$("#hour-5 .description").val(localStorage.getItem("hour-5"));