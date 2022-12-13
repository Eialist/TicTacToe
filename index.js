/* Listeners and setting player names */
let gameTurn = 0;
let turn = 0; 
let currentPlayer, playerOneName, playerTwoName, players;
const playerOneInput = document.querySelector(".p1-namefield");
const playerTwoInput = document.querySelector(".p2-namefield");
const gameTurnLbl = document.querySelector(".gameturn-lbl");
const gameStartBtn = document.querySelector(".gamestart-btn");
const cards = document.querySelectorAll(".card");
const gameturnWindow = document.querySelector(".gameturn");
const gameboard = document.querySelector(".game-container");
const inputField = document.querySelector(".input-field");

function startGame() {
    playerOneName = playerOneInput.value;
    playerTwoName = playerTwoInput.value;
    
    
    let playerOne = {
        name: playerOneName,
        symbol: 'O',
    }
    let playerTwo = {
        name: playerTwoName,
        symbol: 'X',
    }

    players = [playerOne, playerTwo];

    updateDisplay(players);

    inputField.style.display = 'none';

    return playerOne, playerTwo;
    }

function showGame() {
    gameboard.style.visibility = 'visible';
    gameturnWindow.style.visibility = 'visible';
}

gameStartBtn.addEventListener('click', startGame);
gameStartBtn.addEventListener('click', showGame);


function updateDisplay() {
    currentPlayer = players[gameTurn];
    gameTurnLbl.innerText = currentPlayer.name;
    console.log('works')
}



cards.forEach(card => {
    card.addEventListener("click", addSymbols);
});



function addSymbols(event) {
    event.target.innerText = players[gameTurn].symbol;
    gameTurn = (gameTurn + 1) % 2;
    console.log(gameTurn);
    turn++; 
    console.log(turn);
    updateDisplay();
    if (turn === 9) {
        alert ('game over');
    }
}
