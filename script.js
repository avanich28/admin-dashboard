"use strict";

const root = document.documentElement;
const mode = document.querySelector(".mdi-theme-light-dark");
const starBtn = document.querySelectorAll(".mdi-star-outline");
const status = document.querySelectorAll(".status");

mode.addEventListener("click", () => {
  root.classList.toggle("dark");
  root.classList.toggle("light");
});

starBtn.forEach((x, i) =>
  x.addEventListener("click", () => status[i].classList.toggle("favourite"))
);
