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

// function to create and set indices of selected items in local storage
function recordSeatIndices() {
    let indices = [];
    const totalSeats = document.querySelectorAll(".seatings .seat");

    totalSeats.forEach((each, i) => {
        each.classList.contains("selected") ? indices.push(i) : "";
    });
    localStorage.setItem("indices", JSON.stringify(indices));
}

// get items from local storage --------------------------------
function retrieveSelectedSeats() {
    const storedIndicesString = localStorage.getItem("indices");
    storedIndices = JSON.parse(storedIndicesString);
    console.log(storedIndices);

    let allSeats = document.querySelectorAll(".seatings .seat");
    if (storedIndices != null) {
        storedIndices.forEach((each) => {
            allSeats[each].classList.add("selected");
        });
    }

    updateSelectedSeatsCount();
}

retrieveSelectedSeats();

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
