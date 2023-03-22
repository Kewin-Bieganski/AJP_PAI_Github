addEventListener("DOMContentLoaded", () => {
    var changeCalendarButton = document.querySelector(".title");
    let calendarContainer = document.querySelector(".container");
    changeCalendarButton.addEventListener("click", () => {
        calendarContainer.classList.toggle("flat");
    });
});
