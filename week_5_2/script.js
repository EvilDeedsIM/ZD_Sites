const body = document.querySelector("body");
const range = document.querySelector(".range");
const dots = document.querySelectorAll(".dot");

console.log(dots.length);
const colorPositions = {
  0: "blue",
  1: "red",
  2: "purple",
  3: "orange",
  4: "green",
  5: "yellow",
};

for (let i = 0; i < dots.length; i++) {
  dots[i].style.backgroundColor = `var(--${colorPositions[i]})`;
  dots[i].id = i;
}

range.addEventListener("input", () => {
  changeColor(colorPositions[range.value]);
});

changeColor(colorPositions[range.value]);

function changeColor(color) {
  body.style.backgroundColor = `var(--${color})`;
}

dots.forEach((el) => {
  el.addEventListener("click", () => {
    range.value = el.id;
    changeColor(colorPositions[range.value]);
  });
});
