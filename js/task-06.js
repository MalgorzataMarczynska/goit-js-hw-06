"use strict";

const validationInput = document.querySelector("#validation-input");

const stringLength = () => {
  const field = validationInput.value;
  const optlength = validationInput.dataset.length;
  if (field.length == optlength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
    return;
  }
  validationInput.classList.add("invalid");
  validationInput.classList.remove("valid");
  return;
};
validationInput.addEventListener("blur", stringLength);
