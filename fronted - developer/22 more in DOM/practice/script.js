const playerDiv = document.getElementById("player");
const computerDiv = document.getElementById("computer");
const resultDiv = document.getElementById("result");
const button = document.getElementById("flipButton");

button.addEventListener("click", function() {

    // 1. random number generate
    let playerNumber = Math.floor(Math.random() * 6) + 1;
    let computerNumber = Math.floor(Math.random() * 6) + 1;

    // 2. clear old dice
    playerDiv.innerHTML = "";
    computerDiv.innerHTML = "";

    // 3. function to create dots
    function createDots(container, number) {
        for(let i = 0; i < number; i++) {
            let dot = document.createElement("div");
            dot.classList.add("dot");
            container.appendChild(dot);
        }
    }

    // 4. create player dice
    createDots(playerDiv, playerNumber);

    // 5. create computer dice
    createDots(computerDiv, computerNumber);

    // 6. decide winner
    if(playerNumber > computerNumber) {
        resultDiv.innerText = "Player Wins";
    }
    else if(computerNumber > playerNumber) {
        resultDiv.innerText = "Computer Wins";
    }
    else {
        resultDiv.innerText = "Draw";
    }

});


// ## 2. Random Color Card Generator

// Create a card on button click. Generate a random RGB background color
// using `Math.floor()` and `Math.random()`. Set a random width and height.
// Assign a unique `data-id` using `setAttribute()`.

const cardBtn = document.getElementById("cardBtn");
const cardContainer = document.getElementById("cardContainer");

let idCounter = 1;

cardBtn.addEventListener("click", function() {

    // 1. create card div
    const card = document.createElement("div");

    // 2. add class
    card.classList.add("card");

    // 3. random RGB color
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const randomColor = `rgb(${r}, ${g}, ${b})`;

    card.style.backgroundColor = randomColor;

    // 4. random width and height
    const width = Math.floor(Math.random() * 200) + 100;
    const height = Math.floor(Math.random() * 200) + 100;

    card.style.width = width + "px";
    card.style.height = height + "px";

    // 5. unique data-id
    card.setAttribute("data-id", idCounter);

    // optional: show id on card
    card.innerText = "ID: " + idCounter;

    idCounter++;

    // 6. add card to container
    cardContainer.appendChild(card);

});