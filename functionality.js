console.log("Hello");

const allSeats = document.getElementsByClassName("seat");
let click = 0;
let totalFare = 0, grandTotalFare = 0, discountFare = 0;


for (let i of allSeats) {
  i.addEventListener("click", function () {
    if (click < 4) {
      i.classList.remove("bg-gray-200");
      i.classList.add("bg-[#1DD100]");
      i.setAttribute("disabled", true);

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

      const grandTotalField = document.getElementById("grandTotal");
      grandTotalField.innerHTML = " " + totalFare;


      click += 1;
      if (click === 4) {
        const couponApplyBtn = document.getElementById("couponApplyBtn");
        couponApplyBtn.removeAttribute("disabled");
      }

      const phoneNumberField = document.getElementById("phoneNumber");
      phoneNumberField.addEventListener("keyup", function (event) {
        let phoneNumberValue = parseInt(phoneNumberField.value);
        if (phoneNumberValue >= 0 && click > 0) {
          const nextBtn = document.getElementById("nextBtn");
          console.log(nextBtn);
          nextBtn.removeAttribute("disabled")
        }
      })
    }
    else {
      alert("You Cannot Select More Seat");
    }
  })


}



function couponFunction() {
  const fare = parseInt(document.getElementById("totalPrice").innerText);

  const couponInputField = document.getElementById("coupon");
  const couponFieldValue = couponInputField.value;

  const couponField = document.getElementById("couponField");

  if (couponFieldValue === "NEW15") {
    discountFare = fare * 0.15;
    grandTotalFare = fare - discountFare;
  }
  else if (couponFieldValue === "Couple 20") {
    discountFare = fare * 0.20;
    grandTotalFare = fare - discountFare;
  }
  else {
    couponField.classList.add("hidden");
    grandTotalFare = fare;
  }


  if (discountFare > 0) {
    const discountField = document.getElementById("discountField");
    const discountTotalField = document.getElementById("discountTotal")
    discountTotalField.innerText = " " + discountFare;
    discountField.classList.remove("hidden");
    console.log(discountField);
  }


  const grandTotalField = document.getElementById("grandTotal");
  grandTotalField.innerHTML = " " + grandTotalFare;

}