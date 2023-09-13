const container = document.querySelector(".container");

function createBox() {
  const container = document.querySelector(".container");
  const div = document.createElement("div");
  div.classList.add("box");
  div.style.width = `${square - 2}px`;
  div.style.height = `${square - 2}px`;
  container.appendChild(div);
}
let square = 16;
container.style.height = `${square * square}px`;
container.style.width = `${square * square}px`;
for (let i = 0; i < square * square; i++) {
  createBox();
}

const boxs = document.querySelectorAll(".box");
boxs.forEach((box) =>
  box.addEventListener("mouseover", (e) => {
    console.log(e);
    e.target.style.backgroundColor = "black";
  })
);
