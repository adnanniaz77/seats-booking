const seatingsAndScreen = document.querySelector(".seatingsAndScreen");
const selectOptions = document.querySelector("#moviesSelector");
const count = document.querySelector("#count");
const total = document.querySelector("#total");

let totalPrice = +selectOptions.value;

// Update the total and count
function updateSelectedSeatsCount() {
    const selectedSeats = document.querySelectorAll(
        ".seatingsAndScreen .seat.selected"
    ).length;
    count.innerText = selectedSeats;
    total.innerText = selectedSeats * totalPrice;
}

// Movies selection event
selectOptions.addEventListener("change", (e) => {
    totalPrice = +e.target.value;
    updateSelectedSeatsCount();
});

// create and set indices of selected items
function recordSeatIndices() {
    let seatsArr = [];
    let indices = [];
    const totalSeats = document.querySelectorAll(".seatings .seat");

    totalSeats.forEach((each) => {
        seatsArr.push(each);
    });

    seatsArr.forEach((each, i) => {
        seatsArr.indexOf(
            each.classList.contains("selected") ? indices.push(i) : ""
        );
    });

    localStorage.setItem("indices", indices);
}

//
seatingsAndScreen.addEventListener("click", (e) => {
    if (
        e.target.classList.contains("seat") &&
        !e.target.classList.contains("occupied")
    ) {
        e.target.classList.toggle("selected");
        updateSelectedSeatsCount();
    }

    recordSeatIndices();
});
