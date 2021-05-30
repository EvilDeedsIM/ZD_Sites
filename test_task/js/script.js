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
    !header.classList.contains("header--light")
  ) {
    header.classList.add("header--light");
  } else if (
    window.pageYOffset < 200 &&
    header.classList.contains("header--light")
  ) {
    header.classList.remove("header--light");
  }
}

function showNav() {
  if (window.innerWidth >= 768) {
    nav.style.display = "block";
  } else if (window.innerWidth < 768 && bars.style.opacity === "1") {
    nav.style.display = "none";
  }
}

burger.addEventListener("click", burgerChanger);

document.addEventListener("scroll", colorCheck);
window.addEventListener("resize", showNav);

colorCheck();
init();

// Carousel Clients
function carouselTop() {
  let carouselTop = document.querySelector(".carousel__top");
  let list = document.querySelector(".carousel__top .carousel__list");
  let item = document.querySelectorAll(".carousel__top .carousel__item");
  let list2;

  const speed = 1;

  const listWidth = (80 + 40) * item.length;

  carouselTop.style.minWidth = `${listWidth * 2}px`;
  list.style.minWidth = `${listWidth}px`;

  const width = list.offsetWidth;
  let x = 0;
  let x2 = width;

  function clone() {
    list2 = list.cloneNode(true);
    carouselTop.appendChild(list2);
    list2.style.left = `${width}px`;
  }

  function moveFirst() {
    x -= speed;

    if (width >= Math.abs(x)) {
      list.style.left = `${x}px`;
    } else {
      x = width;
    }
  }

  function moveSecond() {
    x2 -= speed;
    if (list.offsetWidth >= Math.abs(x2)) {
      list2.style.left = `${x2}px`;
    } else {
      x2 = width;
    }
  }

  function hover() {
    clearInterval(a);
    clearInterval(b);
  }
  function unhover() {
    a = setInterval(moveFirst, 10);
    b = setInterval(moveSecond, 10);
  }

  clone();
  let a = setInterval(moveFirst, 10);
  let b = setInterval(moveSecond, 10);

  carouselTop.addEventListener("mouseenter", hover);
  carouselTop.addEventListener("mouseleave", unhover);
}

function carouselBottom() {
  let carouselBottom = document.querySelector(".carousel__bottom");
  let list = document.querySelector(".carousel__bottom .carousel__list");
  let item = document.querySelectorAll(".carousel__bottom .carousel__item");
  let list2;

  const speed = 0.5;

  const listWidth = (80 + 40) * item.length;

  carouselBottom.style.minWidth = `${listWidth * 2}px`;
  list.style.minWidth = `${listWidth}px`;

  const width = list.offsetWidth;
  let x = 0;
  let x2 = width;

  function clone() {
    list2 = list.cloneNode(true);
    carouselBottom.appendChild(list2);
    list2.style.left = `${width}px`;
  }

  function moveFirst() {
    x -= speed;

    if (width >= Math.abs(x)) {
      list.style.left = `${x}px`;
    } else {
      x = width;
    }
  }

  function moveSecond() {
    x2 -= speed;
    if (list.offsetWidth >= Math.abs(x2)) {
      list2.style.left = `${x2}px`;
    } else {
      x2 = width;
    }
  }

  function hover() {
    clearInterval(a);
    clearInterval(b);
  }
  function unhover() {
    a = setInterval(moveFirst, 10);
    b = setInterval(moveSecond, 10);
  }

  clone();
  let a = setInterval(moveFirst, 10);
  let b = setInterval(moveSecond, 10);

  carouselBottom.addEventListener("mouseenter", hover);
  carouselBottom.addEventListener("mouseleave", unhover);
}

carouselTop();
carouselBottom();

// Form Check

function formCheck() {
  const name = document.getElementById("name");
  const nameLabel = document.querySelector("label.name");
  const email = document.getElementById("email");
  const emailLabel = document.querySelector("label.email");
  const emailLabelBottom = document.querySelector(".label-bottom");

  emailLabelBottom.style.display = "none";

  name.addEventListener("focusout", nameCheck);
  email.addEventListener("focusout", emailCheck);

  function nameCheck() {
    if (!name.value) {
      name.classList.remove("valid");
      name.classList.add("invalid");
      nameLabel.classList.remove("valid");
      nameLabel.classList.add("invalid");
    } else if (name.value) {
      name.classList.remove("invalid");
      name.classList.add("valid");
      nameLabel.classList.remove("invalid");
      nameLabel.classList.add("valid");
    }
  }

  function emailCheck() {
    if (!email.value) {
      email.classList.remove("valid");
      email.classList.add("invalid");
      emailLabel.classList.remove("valid");
      emailLabel.classList.add("invalid");

      emailLabelBottom.style.display = "block";
      emailLabelBottom.classList.remove("valid");
      emailLabelBottom.classList.add("invalid");
    } else if (email.value) {
      email.classList.remove("invalid");
      email.classList.add("valid");
      emailLabel.classList.remove("invalid");
      emailLabel.classList.add("valid");
      emailLabelBottom.style.display = "none";
    }
  }
}

formCheck();
