const seatingsAndScreen = document.querySelector(".seatingsAndScreen");
const selectOptions = document.querySelector("#moviesSelector");
const count = document.querySelector("#count");
const total = document.querySelector("#total");

let totalPrice = +selectOptions.value;

function updateSelectedSeatsCount() {
    const selectedSeats = document.querySelectorAll(
        ".seatingsAndScreen .seat.selected"
    ).length;
    count.innerText = selectedSeats;
    total.innerText = selectedSeats * totalPrice;
}

selectOptions.addEventListener("change", (e) => {
    totalPrice = +e.target.value;
    updateSelectedSeatsCount();
});

seatingsAndScreen.addEventListener("click", (e) => {
    if (
        e.target.classList.contains("seat") &&
        !e.target.classList.contains("occupied")
    ) {
        e.target.classList.toggle("selected");
        updateSelectedSeatsCount();
    }
});
