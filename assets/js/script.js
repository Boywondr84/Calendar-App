// Date & Time display
var date = moment();
function displayDate() {
    document.getElementById("currentDay").innerText = "Today's date and time are " + date.format("MMMM Do YYYY, h:mm:ss a");
};
displayDate();

// Save button: needs to get element by ID & event listener + function
var saveButtons = document.querySelectorAll(".saveBtn");
saveButtons.forEach(button => {
    button.addEventListener("click", function handleClick(event) {
        console.log("button clicked", event.target);
        // button.setAttribute("style", "background-color: pink");
    });
});
// added button id #'s to all saveBtns. Will this be useful when saving and retrieving?

// When save button clicked, information from row into local storage(time & text) if/else statement??
var saveButtons = {
    time: "Hour",
    text: "Meeting",
}
window.localStorage.setItem("schedule", JSON.stringify(saveButtons));

// window.localStorage.clear();

// Change text-area background color according to past, present, future
// Text area needs a data index and time index

// getHourEvent();


// var saveHourEvent = function() {
//     var saveText= $(this).siblings(".text-area").val();
//     var saveHour= $(this).siblings(".hourTime").text();
//     localStorage.setItem(saveHour, saveText);
// }