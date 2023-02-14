let character = document.querySelector("#characters");
let word = document.querySelector("#word");
let digit = document.querySelector("#number");
let spaces = document.querySelector("#whitespace");
let text = document.querySelector("#textArea");
console.log(word, digit, character, spaces);
text.addEventListener("input", () => {
  let textValue = text.value;
  character.innerHTML = textValue.length;
  //   For a Word
  let count = 0;
  let wordValue = (textValue.match(/\w+/g) || []).length;
  word.innerHTML = wordValue;

  // For digit
  let digitValue = (textValue.match(/\d/g) || []).length;
  digit.innerHTML = digitValue;

  // For Spaces
  let spaceValue = (textValue.match(/\s+/g) || []).length;
  spaces.innerHTML = spaceValue;
});
