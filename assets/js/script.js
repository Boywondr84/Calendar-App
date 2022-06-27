// Date & Time display
var date = moment();

function displayDate() {
    document.getElementById("currentDay").innerText = "Today's date and time are " + date.format("MMMM Do YYYY, h:mm:ss a"); 
};
    displayDate();

// // Date & Time refresh
// setInterval(function() {
//     displayDate(), 5000;
// });

// variable for local storage
var schedule = {};

// save to local storage
var saveSchedule = function() {
    localStorage.setItem("schedule", JSON.stringify(schedule));
};
