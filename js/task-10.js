"use strict";
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
//Napisz skrypt tworzenia i usuwania kolekcji elementów. Użytkownik wprowadza liczbę elementów do input i naciska przycisk Utwórz, co rozpoczyna tworzenie się kolekcji. Po naciśnięciu przycisku Usuń, kolekcja elementów zostaje usunięta.

/* <div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>

Utwórz funkcję createBoxes(amount), która bierze jeden parametr - liczbę. Funkcja tworzy tyle <div>, ile ukazano w amount i dodaje je do div#boxes.

Wymiary pierwszego <div> - 30px na 30px.
Każdy następny element powinien być szerszy i wyższy od poprzedniego o 10px.
Wszystkie elementy powinny mieć losowy kolor tła w formacie NEX. Użyj gotowej funkcji getRandomHexColor aby otrzymać kolor.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Utwórz funkcję destroyBoxes(), która usuwa zawartość div#boxes, tym samym usuwając wszystkie utworzone elementy. */
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const controlItems = document.querySelector("#controls");
const input = controlItems.firstElementChild;
const boxes = document.querySelector("#boxes");

let inputValue = input.addEventListener("input", (event) => {
  return event.currentTarget.value;
});

function createBoxes(amount) {
  getRandomHexColor();
  let randomColor = getRandomHexColor();
  for (let i = 0; i < amount; i++) {
    const newBoxRest = document.createElement("div");
    boxes.after(newBoxRest);
    newBoxRest.classList.add("new-boxes");
    let newDivWidth = 30 + i * 10 + "px";
    let newDivHeight = 30 + i * 10 + "px";
    newBoxRest.style.width = newDivWidth;
    newBoxRest.style.height = newDivHeight;
    newBoxRest.style.backgroundColor = randomColor;
  }
}
function destroyBoxes() {
  const newBoxes = document.querySelectorAll(".new-boxes");
  newBoxes.forEach((box) => {
    box.remove();
  });
}
createBoxes();
destroyBoxes();
createBtn.addEventListener("click", createBoxes(inputValue));
destroyBtn.addEventListener("click", destroyBoxes);
