const burger = document.querySelector(".burger");
const bars = document.querySelector(".burger__bars");
const close = document.querySelector(".burger__close");
const nav = document.querySelector(".header__nav");
const header = document.querySelector(".header");
const svg = document.querySelectorAll("svg path");

function init() {
  bars.style.opacity = 1;
  close.style.opacity = 0;
  nav.style.display === "none";
}

function burgerChanger() {
  if (bars.style.opacity === "1") {
    bars.style.opacity = 0;
    close.style.opacity = 1;
    nav.style.display = "block";
  } else {
    bars.style.opacity = 1;
    close.style.opacity = 0;
    nav.style.display = "none";
  }
}

function colorCheck() {
  if (
    window.pageYOffset >= 200 &&
    !nav.classList.contains("header__nav--light")
  ) {
    nav.classList.toggle("header__nav--light");
    header.classList.toggle("header--light");
  } else if (
    window.pageYOffset < 200 &&
    nav.classList.contains("header__nav--light")
  ) {
    nav.classList.remove("header__nav--light");
    header.classList.remove("header--light");
  }
}

function showNav() {
  if (window.innerWidth >= 668) {
    nav.style.display = "block";
  } else if (window.innerWidth < 668 && bars.style.opacity === "1") {
    nav.style.display = "none";
  }
  colorCheck();
}

burger.addEventListener("click", burgerChanger);

document.addEventListener("scroll", colorCheck);
window.addEventListener("resize", showNav);

colorCheck();
init();
