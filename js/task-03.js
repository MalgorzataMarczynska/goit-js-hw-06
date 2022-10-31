"use strict";
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

//--rozwiązanie dłuższe za pomocą petli for--
// for (const { url, alt } of images) {
//   const galleryUl = document.querySelector(".gallery");
//   const galleryItem = document.createElement("li");
//   const galleryImage = document.createElement("img");
//   galleryImage.setAttribute("src", `${url}`);
//   galleryImage.setAttribute("alt", `${alt}`);
//   galleryImage.classList.add("image-item");
//   galleryUl.insertAdjacentElement("afterbegin", galleryItem);
//   galleryItem.insertAdjacentElement("afterbegin", galleryImage);
// }

//--rozwiązanie krótsze z metodą tablicową--
const galleryUl = document.querySelector(".gallery");

const galleryImage = images.map(
  (image) =>
    `<li><img class="image-item" src=${image.url} alt=${image.alt}></img></li>`
);
galleryUl.insertAdjacentHTML("afterbegin", galleryImage);
