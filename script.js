const container = document.querySelector(".container");

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

const boxs = document.querySelectorAll(".box");
boxs.forEach((box) =>
  box.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "black";
  })
);

const btn = document.querySelector("#create-square-btn");
btn.addEventListener("click", () => {
  squareNumber = +prompt("How many squre do you want? (Max 100)", 100);
  console.log(squareNumber);
  createBoxLoop(squareNumber);
  return squareNumber;
});
