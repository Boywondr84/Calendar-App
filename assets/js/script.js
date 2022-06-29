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
        console.log("button clicked", event);
    });
});



// Change text-area background color according to past, present, future
// Text area needs a data index and time index

// getHourEvent();

// Save button - ultimately save info to local storage
// $(".saveBtn").on("click", saveHourEvent)


// var saveHourEvent = function() {
//     var saveText= $(this).siblings(".text-area").val();
//     var saveHour= $(this).siblings(".hourTime").text();
//     localStorage.setItem(saveHour, saveText);
// }
