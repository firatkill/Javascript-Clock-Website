let date = new Date();

document.addEventListener("DOMContentLoaded", assign);

function assign() {
  document.querySelector("#hour").textContent = date.getHours();
  document.querySelector("#minute").textContent = date.getMinutes();
  document.querySelector("#second").textContent = date.getSeconds();
}

let hourCount = date.getHours();
let minuteCount = date.getMinutes();
let secondCount = date.getSeconds();
let ampm = document.querySelector("#ampm");

const secondCounter = setInterval(() => {
  secondCount++;
  afternoon();
  if (secondCount == 60 && minuteCount != 59) {
    secondCount = "00";
    minuteCount++;
  } else if (secondCount == 60 && minuteCount == 59) {
    if (hourCount == 23) {
      hourCount = "00";
    }
    secondCount = "00";
    minuteCount = "00";
    hourCount++;
  }
  hourCount = hourCount < 10 ? "0" + hourCount : hourCount;
  minuteCount =
    minuteCount < 10 && minuteCount.length <= 2
      ? "0" + minuteCount
      : minuteCount;
  secondCount = secondCount < 10 ? "0" + secondCount : secondCount;
  document.querySelector("#second").textContent = secondCount;
  document.querySelector("#minute").textContent = minuteCount;
  document.querySelector("#hour").textContent = hourCount;
}, 1000);
function counter() {
  secondCounter();
}
counter();
function afternoon() {
  if (hourCount < 23 && hourCount > 12) {
    document.querySelector("#ampm").textContent = "PM";
  } else {
    document.querySelector("#ampm").textContent = "AM";
  }
}
