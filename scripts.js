// Select all buttons
const buttons = document.querySelectorAll(".btn");
const buttons2 = document.querySelectorAll("btn-num");
const resultDisplay = document.querySelector("h1");
const startGame = document.querySelector("h2");
const turn = document.querySelector(".turns");
const player1 = document.querySelector(".player-one");
const player2 = document.querySelector(".player-two");
const buttonsAppear = document.querySelector(".container-grid")

// Images to be displayed
const playerOneClick = document.querySelector(".img1");
const playerTwo  = document.querySelector(".img2");

function startPlay(){ // Clear the screen
    turn.textContent = "Player 1 Move";
    player1.textContent = " ";
    player2.textContent = " ";
    playerOne.setAttribute("src", " ");
    playerTwo.setAttribute("src", " ");

}

function pickNumber() { // player 1 move selection and data storage
    buttons.forEach(button => {button.addEventListener("click", function(){
        const playerOneClick = parseInt(this.getAttribute("data-value"));
        return playerOneClick;
    })
        
    });
    
}

function pickNumber2() {
    buttons2.forEach(button =>{button.addEventListener("click", function(){
        const playerTwoClick = parseInt(this.getAttribute("data-value"));

        if (playerOneClick === 1){
            playerOne.setAttribute("src", "/Dice_game_modified/images/dice1.png");
        }else if(playerOneClick=== 2){
            playerOne.setAttribute("src", "/Dice_game_modified/images/dice1.png");
        }else if(playerOneClick=== 3){
            playerOne.setAttribute("src", "/Dice_game_modified/images/dice1.png");
        }else if(playerOneClick === 4){
            playerOne.setAttribute("src", "/Dice_game_modified/images/dice1.png");
        }else if(playerOneClick === 5){
            playerOne.setAttribute("src", "/Dice_game_modified/images/dice1.png");
        }else if(playerOneClick=== 6){
            playerOne.setAttribute("src", "/Dice_game_modified/images/dice1.png");
        }

        
        if (playerTwoClick === 1){
            playerTwo.setAttribute("src", "/Dice_game_modified/images/dice1.png");
        }else if(playerTwoClick=== 2){
            playerTwo.setAttribute("src", "/Dice_game_modified/images/dice1.png");
        }else if(playerTwoClick=== 3){
            playerTwo.setAttribute("src", "/Dice_game_modified/images/dice1.png");
        }else if(playerTwoClick === 4){
            playerTwo.setAttribute("src", "/Dice_game_modified/images/dice1.png");
        }else if(playerTwoClick === 5){
            playerTwo.setAttribute("src", "/Dice_game_modified/images/dice1.png");
        }else if(playerTwoClick=== 6){
            playerTwo.setAttribute("src", "/Dice_game_modified/images/dice1.png");
        }

           // Compare values
        if (playerOneClick > playerTwoClick) {
            resultDisplay.textContent = `You win! Computer picked ${computerMove}`;
        } else if(playerOneClick < playerTwoClick){
            resultDisplay.textContent = `You lose! Computer picked ${computerMove}`;
        } else if (playerOneClick === playerTwoClick){
            resultDisplay.textContent = `Draw! Computer picked ${computerMove}`;
        };
    })

    })
}

// function playerTwoMove()
    //const playerTwoClick = parseInt(this.getAttribute("data-value")); // Get button value from player two