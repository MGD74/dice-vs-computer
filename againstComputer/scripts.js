// Select all buttons
const buttons = document.querySelectorAll(".btn");
const resultDisplay = document.querySelector("h1");
const startGame = document.querySelector("h2");

// Images to be displayed
const player = document.querySelector(".img1");
const computer = document.querySelector(".img2");

// Function to handle button clicks
buttons.forEach(button => {
    button.addEventListener("click", function() {
        const buttonValue = parseInt(this.getAttribute("data-value")); // Get button value

        //display the right img onclicking the buttons. 

        if (buttonValue === 1){
            player.setAttribute("src", "../images/dice1.png")
        }else if(buttonValue === 2){
            player.setAttribute("src", "../images/dice2.png")
        }else if(buttonValue === 3){
            player.setAttribute("src", "../images/dice3.png")
        }else if(buttonValue === 4){
            player.setAttribute("src", "../images/dice4.png")
        }else if(buttonValue === 5){
            player.setAttribute("src", "../images/dice5.png")
        }else if(buttonValue === 6){
            player.setAttribute("src", "../images/dice6.png")
        }

        //Display the ...
        startPlaying ();

        const computerMove = Math.floor(Math.random() * 6) + 1; // Generate number from 1 to 6

        //Display the right img when the computer choose.

        if (computerMove === 1){
            computer.setAttribute("src", "../images/dice1.png")
        }else if(computerMove === 2){
            computer.setAttribute("src", "../images/dice2.png")
        }else if(computerMove === 3){
            computer.setAttribute("src", "../images/dice3.png")
        }else if(computerMove === 4){
            computer.setAttribute("src", "../images/dice4.png")
        }else if(computerMove === 5){
            computer.setAttribute("src", "../images/dice5.png")
        }else if(computerMove === 6){
            computer.setAttribute("src", "../images/dice6.png")
        }

        const wins = 0;
        const losses = 0;
        const win = document.querySelector(".wins");
        const loss = document.querySelector(".losses");

        // Compare values
        if (buttonValue > computerMove) {
            resultDisplay.textContent = `You win! Computer picked ${computerMove}`;
            wins += 1;
            win.textContent = `Wins: ${wins}`;
        } else if(buttonValue < computerMove){
            resultDisplay.textContent = `You lose! Computer picked ${computerMove}`;
            losses += 1;
            loss.textContent = `Losses: ${losses}`
        } else if (buttonValue === computerMove){
            resultDisplay.textContent = `Draw! Computer picked ${computerMove}`;
        }});


        
    });

// function start game

function startPlaying (){
    startGame.textContent = ` `;
}

// reset function to restart the game

function restScore() {
    resultDisplay.textContent = "Let's Play!";
    player.setAttribute("src", " ");
    computer.setAttribute("src", " ");
    startGame.textContent = "Click a number to choose dice side";
}
































