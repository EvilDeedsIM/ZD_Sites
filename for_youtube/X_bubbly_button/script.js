const bubblyButtons = document.querySelectorAll(".bubbly-button");

const animateButton = (e) => {
  e.preventDefault();

  removeAnimateClass(e);

  e.target.classList.add("animate");

  setTimeout(() => {
    removeAnimateClass(e);
  }, 700);
};

bubblyButtons.forEach((el) => {
  el.addEventListener("click", animateButton);
});

function removeAnimateClass(event) {
  event.target.classList.remove("animate");
}
