let btn = document.querySelector("#btn");

const generateImage = () => {
  let image = document.querySelector("#img");
  console.log(img);
  var random = Math.floor(Math.random() * 40);
  var url = `https://picsum.photos/200/300?${random}`;
  // https://source.unsplash.com/random/200x200?${random}
  console.log(url);
  image.src = url;
};
btn.addEventListener("click", generateImage);
