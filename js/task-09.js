"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.body;
const changeBtn = document.querySelector(".change-color");
const inputColor = document.querySelector(".color");

const changeBodyColor = (event) => {
  getRandomHexColor();
  let newColor = getRandomHexColor();
  inputColor.textContent = newColor;
  body.style.backgroundColor = newColor;
};
changeBtn.addEventListener("click", changeBodyColor);
