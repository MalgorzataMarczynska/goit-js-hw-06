"use strict";

const nameInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
nameInput.addEventListener("input", (event) => {
  if (nameInput.value === "") {
    return (output.textContent = "Anonymous");
  }
  return (output.textContent = event.currentTarget.value);
});
