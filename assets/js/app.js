const seatingsAndScreen = document.querySelector(".seatingsAndScreen");
const selectOptions = document.querySelector("#moviesSelector");
const count = document.querySelector("#count");
const total = document.querySelector("#total");

seatingsAndScreen.addEventListener("click", (e) => {
    if (
        e.target.classList.contains("seat") &&
        !e.target.classList.contains("occupied")
    ) {
        e.target.classList.toggle("selected");
    }
});
