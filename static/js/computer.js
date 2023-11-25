// JavaScript code for computer mode
function playWithComputer() {
    // Show the computer game page
    showPage("computer");

    // Reset scores and rounds played for a new game
    document.getElementById("playerResult").textContent = "0";
    document.getElementById("computerResult").textContent = "0";
    document.getElementById("roundsPlayed").textContent = "0";

    // Start the game with the computer
    playComputerGame();
}

function playComputerGame() {
    // Function to handle a round of the game
    function playRound(playerChoice) {
        // Get the computer's choice
        const computerChoice = getRandomChoice();

        // Update the choices displayed on the page
        document.getElementById("playerChoice").textContent = playerChoice;
        document.getElementById("computerChoice").textContent = computerChoice;

        // Determine the winner of the round
        const roundResult = determineWinner(playerChoice, computerChoice, "");

        // Update the round result displayed on the page
        document.getElementById("roundResult").textContent = roundResult;

        // Update the scores based on the round result
        updateScores(roundResult);

        // Increment the rounds played counter
        const roundsPlayedElement = document.getElementById("roundsPlayed");
        roundsPlayedElement.textContent = parseInt(roundsPlayedElement.textContent) + 1;

        // Check if the game has ended (e.g., after 5 rounds)
        if (parseInt(roundsPlayedElement.textContent) === 5) {
            endGame();
        }
    }

    // Function to get a random choice for the computer
    function getRandomChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    // Function to determine the winner of a round
    function determineWinner(playerChoice, computerChoice, opponentChoice) {
        const rules = {
            "rock": "scissors",
            "paper": "rock",
            "scissors": "paper"
        };

        if (playerChoice === computerChoice) {
            return "It's a tie!";
        } else if (rules[playerChoice] === computerChoice) {
            return `You win! ${playerChoice.capitalize()} beats ${computerChoice}.`;
        } else {
            return `Computer wins! ${computerChoice.capitalize()} beats ${playerChoice}.`;
        }
    }

    // Function to update scores based on the round result
    function updateScores(roundResult) {
        const playerScoreElement = document.getElementById("playerResult");
        const computerScoreElement = document.getElementById("computerResult");

        if (roundResult.includes("win")) {
            playerScoreElement.textContent = parseInt(playerScoreElement.textContent) + 1;
        } else if (roundResult.includes("Computer")) {
            computerScoreElement.textContent = parseInt(computerScoreElement.textContent) + 1;
        }
    }

    // Function to end the game and determine the overall winner
    function endGame() {
        const playerScore = parseInt(document.getElementById("playerResult").textContent);
        const computerScore = parseInt(document.getElementById("computerResult").textContent);

        // Determine the overall winner
        let overallWinner;
        if (playerScore === computerScore) {
            overallWinner = "It's a draw!";
        } else if (playerScore > computerScore) {
            overallWinner = "You are the overall winner!";
        } else {
            overallWinner = "Computer is the overall winner!";
        }

        // Display the overall winner
        alert(`Game Over! ${overallWinner}`);
    }

    // Expose the playRound function to be accessible from the HTML onclick event
    window.playRound = playRound;
}

function goBack() {
    // Hide the game pages and show the home page
    showPage("home");
}
