const card = document.querySelector(".card");
const time = document.querySelector(".time");

const now = new Date();

let hours = document.createElement("h2");
let minutes = document.createElement("h2");
let seconds = document.createElement("h2");
let day = document.createElement("h2");
let month = document.createElement("h2");
let year = document.createElement("h2");

day.classList.add("day");
month.classList.add("month");
year.classList.add("year");
hours.classList.add("hour");
minutes.classList.add("minutes");
seconds.classList.add("seconds");
card.classList.add("card");

const getDay = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
const getMonth = now.getMonth() < 10 ? "0" + now.getMonth() : now.getMonth();
const getYear =
  now.getFullYear() < 10 ? "0" + now.getFullYear() : now.getFullYear();
const getHours = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
const getMinutes =
  now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
const getSeconds =
  now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();

day.textContent = getDay + ".";
month.textContent = getMonth + ".";
year.textContent = getYear;
hours.textContent = getHours + ":";
minutes.textContent = getMinutes + ":";
seconds.textContent = getSeconds;

time.appendChild(hours);
time.appendChild(minutes);
time.appendChild(seconds);
card.appendChild(day);
card.appendChild(month);
card.appendChild(year);

setInterval(updateTime, 1000);

function updateTime() {
  const now = new Date();

  const getDay = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
  const getMonth =
    now.getMonth() + 1 < 10 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1;
  const getYear =
    now.getFullYear() < 10 ? "0" + now.getFullYear() : now.getFullYear();
  const getHours = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
  const getMinutes =
    now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
  const getSeconds =
    now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();

  day.textContent = getDay + ".";
  month.textContent = getMonth + ".";
  year.textContent = getYear;
  hours.textContent = getHours + ":";
  minutes.textContent = getMinutes + ":";
  seconds.textContent = getSeconds;
}
