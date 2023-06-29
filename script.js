"use strict";

const root = document.documentElement;
const mode = document.querySelector(".mdi-theme-light-dark");

mode.addEventListener("click", () => {
  root.classList.toggle("dark");
  root.classList.toggle("light");
});
