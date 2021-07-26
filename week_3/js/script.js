const list = document.querySelectorAll(".nav__list");
const items = document.querySelectorAll(".nav__item");
const popup = document.querySelectorAll(".nav__item--popup");
const burger = document.querySelector(".burger");
const burgerPopup = document.querySelector(".burger-popup");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  burgerPopup.classList.toggle("active");
});

items.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    changeLinkColor(el);
  });
  el.addEventListener("mouseleave", () => {
    changeLinkColor(el);
  });
});

popup.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    showPopup(el);
  });
  el.addEventListener("mouseleave", () => {
    showPopup(el);
  });
});

function changeLinkColor(elem) {
  items.forEach((el) => {
    if (el !== elem) {
      el.classList.toggle("light");
    }
  });
}

function showPopup(elem) {
  elem.classList.toggle("visible");
}

function changeDomPosition () {
  
}
