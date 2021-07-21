const items = document.querySelectorAll(".item");
const images = document.querySelectorAll(".item__img");
const shuffleBtn = document.querySelector(".shuffle-btn");

console.log(images[1]);
const imageLinks = [
  "https://images.unsplash.com/photo-1452696193712-6cabf5103b63?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
  "https://images.unsplash.com/photo-1546188994-07c34f6e5e1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80",
  "https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1575903013621-1387ce8caa74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1553152531-b98a2fc8d3bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
  "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
];

shuffleBtn.addEventListener("click", shuffleImages);

items.forEach((elem) => {
  elem.addEventListener("click", () => {
    zoomImage(elem);
  });
});

function zoomImage(el) {
  el.classList.toggle("active");
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function shuffleImages() {
  shuffleArray(imageLinks);

  for (let i = 0; i < images.length; i++) {
    images[i].src = imageLinks[i];
  }
}
