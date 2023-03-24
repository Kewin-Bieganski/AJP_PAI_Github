addEventListener("DOMContentLoaded", () => {
    const changeCalendarButton = document.querySelector(".title");
    const calendarContainer = document.querySelector(".container");
    changeCalendarButton.addEventListener("click", () => {
        calendarContainer.classList.toggle("flat");
    });
});
