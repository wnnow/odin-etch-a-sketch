console.log("Hello World");

function createBox() {
  const container = document.querySelector(".container");
  const div = document.createElement("div");
  div.classList.add("box");
  container.appendChild(div);
}

for (let i = 0; i < 625; i++) {
  createBox();
}
