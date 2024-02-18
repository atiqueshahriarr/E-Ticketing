console.log("Hello");

const allSeats = document.getElementsByClassName("seat");
let click = 0;
let totalFare = 0, grandTotalFare = 0;

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

    const addSeatField = document.getElementById("addSeat");
    const p1 = document.createElement("p");
    p1.innerText = i.innerText;
    addSeatField.appendChild(p1);

    const p2 = document.createElement("p");
    p2.innerText = "Business";
    addSeatField.appendChild(p2);
    p2.setAttribute("class", "text-center");

    const p3 = document.createElement("p");
    p3.innerText = "550";
    addSeatField.appendChild(p3);
    p3.setAttribute("class", "text-right");

    totalFare = totalFare + 550;
    const totalPriceField = document.getElementById("totalPrice");
    totalPriceField.innerText = totalFare;

    click++;
    if (click > 4) {
      alert("You Cannot Select More Seat");
      break;
    }
    if (click >= 4) {
      const couponApplyBtn = document.getElementById("couponApplyBtn");
      couponApplyBtn.removeAttribute("disabled");
    }

  })
}


function couponFunction() {
  const fare = parseInt(document.getElementById("totalPrice").innerText);
  console.log(fare);

  const couponInputField = document.getElementById("coupon");
  const couponFieldValue = couponInputField.value;

  const couponField = document.getElementById("couponField");

  if (couponFieldValue === "NEW15") {
    grandTotalFare = fare - (fare * 0.15);
  }
  else if (couponFieldValue === "Couple 20") {
    grandTotalFare = fare - (fare * 0.20);
  }
  else {
    couponField.classList.add("hidden");
    grandTotalFare = fare;
  }

  const grandTotalField = document.getElementById("grandTotal");
  grandTotalField.innerHTML = " " + grandTotalFare;
}