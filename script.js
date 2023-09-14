const container = document.querySelector(".container");
const blackBtn = document.querySelector("#black-color-btn");
const randomBtn = document.querySelector("#random-color-btn");
const eraseBtn = document.querySelector("#erase-color-btn");
const rainbowBtn = document.querySelector("#rainbow-color-btn");
const containerHeight = container.clientHeight;
const containerWidth = container.clientWidth;
let squareNumber;

function createBox() {
  const container = document.querySelector(".container");
  const div = document.createElement("div");
  div.classList.add("box");
  div.style.width = `${containerHeight / squareNumber - 2}px`;
  div.style.height = `${containerWidth / squareNumber - 2}px`;
  container.appendChild(div);
}

function createBoxLoop(squareNumber) {
  for (let i = 0; i < squareNumber * squareNumber; i++) {
    createBox();
  }
}

function applyBoxColor(color) {
  const boxs = document.querySelectorAll(".box");
  boxs.forEach((box) =>
    box.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = `${color}`;
    })
  );
}

function applyBoxRandomColor() {
  const boxs = document.querySelectorAll(".box");
  boxs.forEach((box) =>
    box.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = `rgb(${Math.floor(
        Math.random() * 255
      )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
      )})`;
    })
  );
}

function clearBox() {
  container.replaceChildren();
}

const btn = document.querySelector("#create-square-btn");
btn.addEventListener("click", () => {
  squareNumber = +prompt("How many squre do you want? 1-100", 50);
  if (typeof squareNumber !== "number" || isNaN(squareNumber)) {
    alert("Please input NUMBER!");
    return;
  } else if (squareNumber > 100 || squareNumber < 1) {
    alert("Please input number 1-100");
    return;
  }
  clearBox();
  createBoxLoop(squareNumber);
  applyBoxColor("black");
  return squareNumber;
});

blackBtn.addEventListener("click", () => {
  applyBoxColor("black");
});

randomBtn.addEventListener("click", () => {
  applyBoxColor(
    `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)})`
  );
});

rainbowBtn.addEventListener("click", applyBoxRandomColor);

eraseBtn.addEventListener("click", () => {
  applyBoxColor("white");
});
