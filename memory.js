// let count = 5;
// let x;
// const grid = document.querySelector(`#grid`);
// const score = document.querySelector(`#score`);
// const time = document.getElementById(`time`);
// const startButton = document.getElementById(`start`);
// startButton.addEventListener(`click` , start);
// startButton.addEventListener(`click` , board);
// function start() {
//   createBoard();
//   var x = setInterval(function () {
//     if (count == 0) {
//       clearInterval(x);
//       stop();
//     }
//     time.innerText = `Time: ${count}`;
//     count--;
//   }, 1000);
// }

document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    {
      name: "fries",
      img: "fries.png",
    },
    {
      name: "cheeseburger",
      img: "cheeseburger.png",
    },
    {
      name: "ice-cream",
      img: "ice-cream.png",
    },
    {
      name: "pizza",
      img: "pizza.png",
    },
    {
      name: "milkshake",
      img: "milkshake.png",
    },
    {
      name: "hotdog",
      img: "hotdog.png",
    },
    {
      name: "fries",
      img: "fries.png",
    },
    {
      name: "cheeseburger",
      img: "cheeseburger.png",
    },
    {
      name: "ice-cream",
      img: "ice-cream.png",
    },
    {
      name: "pizza",
      img: "pizza.png",
    },
    {
      name: "milkshake",
      img: "milkshake.png",
    },
    {
      name: "hotdog",
      img: "hotdog.png",
    },
  ];

  
  const grid = document.querySelector('.grid');
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];
  const time = document.getElementById(`time`); 
  const header = document.getElementById(`header`);
  const background = document.getElementById(`background`);
  const startButton = document.getElementById(`start`);
  startButton.addEventListener(`click`, start);

  
  let count=30;
  function start() {
    createBoard();
    var x = setInterval(function () {
      if (count == 0 || cardsWon.length === cardArray.length / 2) {
        startButton.innerText = "Reset";
        background.style.zIndex = `2`
        startButton.addEventListener('click' , reset);
        clearInterval(x);
        if(count==0)
        {
          header.innerText = "LOOSER"
        }
        
      }
      time.innerText = `Time: ${count}`;
      count--;
    }, 1000);
  }


  cardArray.sort(() => 0.5 - Math.random());
  function createBoard() {
    startButton.removeEventListener(`click`, start);
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.addEventListener("click", flipCard);
      card.setAttribute("src", "questionmark.jpg");
      card.setAttribute("data-id", i); 
      grid.appendChild(card);
    }
  }


  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", "questionmark.jpg");
      cards[optionTwoId].setAttribute("src", "questionmark.jpg");
      // alert("You have clicked the same image!");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      // alert("You found a match");
      cards[optionOneId].setAttribute("src", "white.png");
      cards[optionTwoId].setAttribute("src", "white.png");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "questionmark.jpg");
      cards[optionTwoId].setAttribute("src", "questionmark.jpg");
      // alert("Sorry, try again");
    }
    cardsChosen = [];
    cardsChosenId = [];
    // resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      
      header.innerText = "You found them all!";
    }
    background.style.zIndex = `-1`
  }


  function flipCard() {
    
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length == 2) {

        background.style.zIndex = `2`;
      setTimeout(checkForMatch, 600);
      
    }
  }

  function reset()
  {
    location.reload();
  }
});
