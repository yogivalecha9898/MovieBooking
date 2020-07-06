const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieselect = document.getElementById('movie');
let ticketprice = +movieselect.value;
// + sign is for converting it from string to number...!


function updatecount() { 
    const select = document.querySelectorAll('.row .seat.selected');
    const seatscount = select.length;
    count.innerText = seatscount;
    total.innerText = seatscount * ticketprice;
}

movieselect.addEventListener('change', (e)=> {
    ticketprice = +e.target.value;
    updatecount();
})
container.addEventListener('click', e => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        updatecount();
    }
});