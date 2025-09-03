const grid = document.getElementById("grid");
const resultDisplay = document.getElementById("result");

let cards = [
  { name: "cat", img: "img/cat.png" },
  { name: "dog", img: "img/dog.png" },
  { name: "lion", img: "img/lion.png" },
  { name: "tiger", img: "img/tiger.png" },
  { name: "panda", img: "img/panda.png" },
  { name: "bear", img: "img/bear.png" }
];

// tạo cặp thẻ
cards = [...cards, ...cards];

// trộn ngẫu nhiên
cards.sort(() => 0.5 - Math.random());

let chosenCards = [];
let chosenIds = [];
let matchedCards = [];
let score = 0;

// tạo giao diện
function createBoard() {
  for (let i = 0; i < cards.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-id", i);

    const cardImg = document.createElement("img");
    cardImg.setAttribute("src", cards[i].img);
    card.appendChild(cardImg);

    card.addEventListener("click", flipCard);
    grid.appendChild(card);
  }
}

function flipCard() {
  let cardId = this.getAttribute("data-id");
  if (chosenIds.includes(cardId) || matchedCards.includes(cardId)) return;

  this.classList.add("flipped");
  chosenCards.push(cards[cardId].name);
  chosenIds.push(cardId);

  if (chosenCards.length === 2) {
    setTimeout(checkMatch, 700);
  }
}

function checkMatch() {
  const allCards = document.querySelectorAll(".card");

  if (chosenCards[0] === chosenCards[1]) {
    alert("🎉 Bạn tìm được một cặp!");
    matchedCards.push(...chosenIds);
    allCards[chosenIds[0]].classList.add("matched");
    allCards[chosenIds[1]].classList.add("matched");
    score++;
    resultDisplay.textContent = "Điểm: " + score;
  } else {
    alert("❌ Sai rồi, thử lại nhé!");
    allCards[chosenIds[0]].classList.remove("flipped");
    allCards[chosenIds[1]].classList.remove("flipped");
  }

  chosenCards = [];
  chosenIds = [];

  if (score === cards.length / 2) {
    resultDisplay.textContent = "🎊 Bạn đã thắng toàn bộ game!";
  }
}

createBoard();

