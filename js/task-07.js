"use strict";

const sizeControlInput = document.querySelector("#font-size-control");
const sizeControlOutput = document.querySelector("#text");
sizeControlInput.addEventListener("input", (event) => {
  const fontValue = event.currentTarget.value;
  sizeControlOutput.style.fontSize = fontValue + "px";
});
