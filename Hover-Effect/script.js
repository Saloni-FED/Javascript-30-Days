let container = document.querySelector(".container");
console.log(container);
let image = document.querySelector("img");
console.log(image);
container.addEventListener('mousemove',(e)=>{
const x = e.clientX - e.target.offsetLeft;
const y = e.clientY - e.target.offsetTop;
image.style.transformOrigin = `${x}px ${y}px`;
image.style.transform = `scale(2)`;
})
container.addEventListener('mouseleave',()=>{
    image.style.transformOrigin = "center";
    image.style.transform = `scale(1)`
})
