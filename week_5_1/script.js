const body = document.querySelector("body");
const dragElement = document.querySelector(".drag-element");
const dots = document.querySelectorAll(".dot");
const gap = 3;
const colorPositions = {
  blue: 0,
  red: 1,
  purple: 2,
  orange: 3,
  green: 4,
  yellow: 5,
};

dots.forEach((el) => {
  el.addEventListener("click", (ev) => {
    changeColorAndPosition(ev);
  });

  el.addEventListener("dragover", (ev) => {
    allowDrop(ev);
  });
});

dots.forEach((el) => {
  el.addEventListener("drop", (ev) => {
    changeColorAndPosition(ev);
  });
});

function allowDrop(event) {
  event.preventDefault();
}

function dragElementPosition(x) {
  dragElement.style.left = `${x}rem`;
}

function changeColorAndPosition(ev) {
  const color = ev.target.classList[1].slice(4);
  dragElementPosition(colorPositions[color] * (gap + 1));
  body.style.backgroundColor = `var(--${color})`;
}
