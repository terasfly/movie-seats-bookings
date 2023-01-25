const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

// Update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    // console.log(selectedSeats);
    const selectedSeatsCount = selectedSeats.length;
    // console.log(selectedSeatsCount);
    count.textContent = selectedSeatsCount.length;
    total.textContent = selectedSeatsCount * ticketPrice;
}

// Seat click event
// Movie select event

movieSelect.addEventListener('change', (e) => {
    ticketPrice = e.target.value;
    updateSelectedCount();
});

container.addEventListener('click', (e) => {
    if (
        e.target.classList.contains('seat') &&
        !e.target.classList.contains('occupied')
    ) {
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }
});