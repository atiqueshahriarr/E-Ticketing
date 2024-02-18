console.log("Hello");

const allSeats = document.getElementsByClassName("seat");
const click = 0;
for (let i of allSeats) {

  i.addEventListener("click", function () {
    i.classList.remove("bg-gray-200");
    i.classList.add("bg-[#1DD100]");

    const leftSeatField = document.getElementById("leftSeat");
    const leftSeatNumber = parseInt(leftSeatField.innerText);
    leftSeatField.innerText = leftSeatNumber - 1;

    const countSeatField = document.getElementById("countSeat");
    const countSeatNumber = parseInt(countSeatField.innerText);
    countSeatField.innerText = countSeatNumber + 1;

  })

}