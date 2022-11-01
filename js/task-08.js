"use strict";

const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  const user = {
    email: email.value,
    password: password.value,
    showThis() {
      console.log(this);
    },
  };
  console.log(`E-mail: ${email.value}, Password: ${password.value}`);
  user.showThis();
  event.currentTarget.reset();
}
