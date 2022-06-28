//Save button - ultimately save info to local storage
var save = document.getElementsByClassName(".saveBtn");
document.addEventListener("click", saveFunction);
function saveFunction() {
    document.getElementsByClassName(".saveBtn");
    console.log("works");
};


// Date & Time display
var date = moment();
function displayDate() {
    document.getElementById("currentDay").innerText = "Today's date and time are " + date.format("MMMM Do YYYY, h:mm:ss a");
};
displayDate();

// var block = document.createElement('input');
// console.dir(block);

// document.body.appendChild(block);

// document.createElement('p');
// var hour = document.createElement('div');
// var hourText = document.createTextNode("9am");
// hour.appendChild(hourText);
// document.body.appendChild(hour);

// hour.setAttribute("class", "hour col-1 ml-5 pt-3 text-right");

// variable for local storage
var schedule = {};

// save to local storage
var saveSchedule = function () {
    localStorage.setItem("schedule", JSON.stringify(schedule));
};

// create task input function
// var scheduleTask = function () {
//     var textInput = $("<p>")
//     .text(textInput)
//     .addClass(".textarea mb-1");
// }
