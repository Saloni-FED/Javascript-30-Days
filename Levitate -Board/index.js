let container = document.querySelector(".container");
for (let i = 0; i < 300; i++) {
  let createDiv = document.createElement("div");
  createDiv.classList.add("box");
  container.append(createDiv);
  const changeColor = (event) => {
    let randomColor = Math.floor(Math.random() * 255);
    let x = randomColor;
    let y = randomColor;
    let z = randomColor;
    console.log(x, y, z);
    event.target.style.backgroundColor = `rgb(${x},${y},${z})`;
    setTimeout(() => {
      event.target.style.backgroundColor = `rgb(0,0,0)`;
    }, 500);
  };
  createDiv.addEventListener("mouseover", changeColor);
}
