let cards = [];
let sum = 0;
let message = "";
let isAlive = false;
let hasBlackJack = false;
let messEl = document.querySelector(".mess-el");
let sumEl = document.querySelector("#sum-El");
let cardsEl = document.querySelector("#cards-El");
function startGame() {
  isAlive = true;
  let firstNumber = randomCards();
  let secondNumber = randomCards();
  cards.push(firstNumber, secondNumber);
  sum = firstNumber + secondNumber;
  renderGame();
}
function randomCards() {
  let randomNum = Math.floor(Math.random() * 13);
  if (randomNum === 1) {
    return 11;
  } else if (randomNum > 10) {
    return 10;
  } else {
    return randomNum;
  }
}

//Onclick events trigger
function renderGame() {
  cardsEl.textContent = "Cards:";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum:" + sum;
  if (sum <= 20) {
    message = "Do you want to draw a message";
  } else if (sum === 21) {
    message = "You have a black jack";
    hasBlackJack = true;
  } else {
    message = "OHH no your are out";
    isAlive = false;
  }
  messEl.textContent = message;
}
function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    console.log(isAlive);
    console.log(hasBlackJack);
    let card1 = randomCards();
    sum += card1;
    cards.push(card1);
    renderGame();
  }
}
