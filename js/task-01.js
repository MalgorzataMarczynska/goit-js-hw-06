"use strict";
const categories = document.querySelector("#categories");
const mainListItems = categories.children;

console.log("Number of categories:", mainListItems.length);
[...mainListItems].forEach(function (listItem) {
  console.log("Category:", listItem.firstElementChild.textContent);
  console.log("Elements:", listItem.lastElementChild.children.length);
});
