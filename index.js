// Task1
const textEl = document.querySelector(".text");
const buttonEl = document.querySelector(".btn");
buttonEl.textContent = textEl.textContent;

// Task2
const photoEl = document.querySelector(".first-photo");
photoEl.src = "./cat2.jpg";

// Task3
const photoSecondEl = document.querySelector(".second-photo");
const linkEl = document.querySelector(".link");
linkEl.href = "https://github.com/i-skachkova/hw17_js";
photoSecondEl.alt = "it`s another cat";

// Task4
const listEl = document.querySelector(".list");
const firstItem = listEl.firstElementChild;
firstItem.textContent = "It`s new text!";