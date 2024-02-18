const box = document.querySelector(".box");
const start = document.querySelector(".start");
const pouse = document.querySelector(".pouse");
const num = document.querySelector(".num");

let number = 0;
let timeInterval;
start.addEventListener("click", () => {
  timeInterval = setInterval(() => {
    number++;
    num.classList.add("num");
    num.textContent = `${number}`;
  }, 2000);
});

pouse.addEventListener("click", () => {
  setTimeout(() => {
    clearTimeout(timeInterval);
    num.classList.remove("num");
  });
});
