const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const digits = "0123456789";
const special = "!\"#$%&'*+,./:;=?@\\^`|~";

//Selector
let uppercase = document.querySelector("#UpperValue");
let lowercase = document.querySelector("#LowerValue");
let number = document.querySelector("#NumericValue");
let symbol = document.querySelector("#Symbols");
let range = document.querySelector("#numberValue");
let btn = document.querySelector(".btn");
let inbox = document.querySelector(".Password");

//Function to generate the password
const generate = () => {
  let password = "";
  let charCode = "";
  if (uppercase.checked) charCode = charCode.concat(upperCase);
  if (lowercase.checked) charCode = charCode.concat(lowerCase);
  if (symbol.checked) charCode = charCode.concat(special);
  if (number.checked) charCode = charCode.concat(digits);
  for (var i = 1; i <= range.value; i++) {
    let pass = Math.floor(Math.random() * charCode.length);
    password += charCode[pass];
  }
inbox.textContent = password;
};
//Eventlistener
btn.addEventListener("click", generate);
