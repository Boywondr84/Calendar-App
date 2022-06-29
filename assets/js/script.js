// Date & Time display
var date = moment();
function displayDate() {
    document.getElementById("currentDay").innerText = "Today's date and time are " + date.format("MMMM Do YYYY, h:mm:ss a");
};
displayDate();

// Save button: needs to get element by ID & event listener + function
// var saveButtons = document.querySelectorAll(".saveBtn");
// saveButtons.forEach(button => {
//     button.addEventListener("click", function handleClick(event) {
//         console.log("button clicked", event.target);
//         alert("Saved!");
//         // button.setAttribute("style", "background-color: pink");
//     });
// });

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
})

$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-1 .description").val(localStorage.getItem("hour-1"));



// added button id #'s to all saveBtns. Will this be useful when saving and retrieving?

// // load from local storage
// var loadSchedule = function () {
//     saveButtons = JSON.parse(localStorage.getItem("schedule"));
// }

// // loop over object properties

// // When save button clicked, information from row into local storage(time & text) if/else statement??

// var saveButtons = function() {
// localStorage.setItem("schedule", JSON.stringify(saveButtons));
// };

// var savedHour = function (timeHour) {
//     // find the hour
//     var hour = $(timeHour).find("p").text();
//     console.log(hour);


// window.localStorage.clear();


// var saveHourEvent = function() {
//     var saveText= $(this).siblings(".text-area").val();
//     var saveHour= $(this).siblings(".hourTime").text();
//     localStorage.setItem(saveHour, saveText);
// }

// Local storage trial
// var timeHour = document.getElementById("timeHour");
// var timeHourText = document.getElementById("timeHourText");
// var button1 = document.getElementById("button1");
// var saveButtons = document.getElementById("button1");

// saveButtons = function() {
//     var key = timeHour.text;
//     var value = timeHourText(".text-area").val();

//     console.log(key);
//     console.log(value);
// };

// Change text-area background color according to past, present, future
// Text area needs a data index and time index

// getHourEvent();