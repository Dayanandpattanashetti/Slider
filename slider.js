const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

let number = images.length;
let slideNumber = 1;

for (let i = 0; i < number; i++) {
  const div = document.createElement("div");
  div.className = "button";
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "#06b89d";

function resetBg() {
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent";
  });
}

function changeColor(slideNumber) {
  resetBg();
  buttons[slideNumber].style.backgroundColor = "#06b89d";
}

buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    slider.style.transform = `translateX(${i * -749}px)`;
    slideNumber = i+1;
    changeColor(i);
  });
});

function nextSlide() {
  if (slideNumber == number) slideNumber = 0;
  slider.style.transform = `translateX(${slideNumber * -749}px)`;
  changeColor(slideNumber);
  slideNumber++;
}

function prevSlide() {
  if (slideNumber == 1) slideNumber = number + 1;
  slider.style.transform = `translateX(${(slideNumber - 2) * -749}px)`;
  changeColor(slideNumber - 2);
  slideNumber--;
}

right.addEventListener("click", () => {
  nextSlide();
});

left.addEventListener("click", () => {
  prevSlide();
});
