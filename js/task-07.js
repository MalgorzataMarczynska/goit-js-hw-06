"use strict";

const sizeControlInput = document.querySelector("#font-size-control");
const sizeControlOutput = document.querySelector("#text");

sizeControlOutput.style.fontSize = sizeControlInput.value + "px";
sizeControlInput.addEventListener("input", (event) => {
  sizeControlOutput.style.fontSize = event.currentTarget.value + "px";
});
