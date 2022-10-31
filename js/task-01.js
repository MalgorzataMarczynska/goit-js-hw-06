"use strict";
const categories = document.querySelector("#categories");
const mainListItems = categories.children;

const firstListItem = categories.firstElementChild;
const firstListTitle = firstListItem.firstElementChild;
const firstUl = firstListItem.lastElementChild.children;

const secondListItem = firstListItem.nextElementSibling;
const secondListTitle = secondListItem.firstElementChild;
const secondUl = secondListItem.lastElementChild.children;

const thirdListItem = categories.lastElementChild;
const thirdListTitle = thirdListItem.firstElementChild;
const thirdUl = thirdListItem.lastElementChild.children;

console.log("Number of categories:", mainListItems.length);
console.log("Category:", firstListTitle.textContent);
console.log("Elements:", firstUl.length);
console.log("Category:", secondListTitle.textContent);
console.log("Elements:", secondUl.length);
console.log("Category:", thirdListTitle.textContent);
console.log("Elements:", thirdUl.length);
