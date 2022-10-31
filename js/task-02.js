"use strict";
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

ingredients.forEach((ingredient) => {
  const ingredientsUl = document.querySelector("#ingredients");
  const listItem = document.createElement("li");
  listItem.textContent = `${ingredient}`;
  listItem.classList.add("item");
  ingredientsUl.after(listItem);
});
