// Define the choices
const choices = ["rock", "paper", "scissors"];

// Define the abbreviations
const abbreviations = {
    "r": "rock",
    "p": "paper",
    "s": "scissors"
};

// Define the rules
const rules = {
    "rock": "scissors", // Rock beats scissors
    "paper": "rock",    // Paper beats rock
    "scissors": "paper" // Scissors beats paper
};

// Define the number of rounds
const rounds = 5;

// Define the scores
let player1Score = 0;
let player2Score = 0;

// Start the game loop
for (let i = 0; i < rounds; i++) {
    // Print the round number
    console.log(`\nRound ${i + 1} of ${rounds}:\n`);

    // Get the first player's choice
    let player1Action = prompt("Player 1, enter a choice (rock, paper, scissors, or r, p, s): ").toLowerCase();

    // Convert the abbreviation to the full word
    if (player1Action in abbreviations) {
        player1Action = abbreviations[player1Action];
    }

    // Validate the first player's choice
    while (!choices.includes(player1Action)) {
        console.log("Invalid choice. Please try again.");
        player1Action = prompt("Player 1, enter a choice (rock, paper, scissors, or r, p, s): ").toLowerCase();

        // Convert the abbreviation to the full word
        if (player1Action in abbreviations) {
            player1Action = abbreviations[player1Action];
        }
    }

    // Get the second player's choice
    let player2Action = prompt("Player 2, enter a choice (rock, paper, scissors, or r, p, s): ").toLowerCase();

    // Convert the abbreviation to the full word
    if (player2Action in abbreviations) {
        player2Action = abbreviations[player2Action];
    }

    // Validate the second player's choice
    while (!choices.includes(player2Action)) {
        console.log("Invalid choice. Please try again.");
        player2Action = prompt("Player 2, enter a choice (rock, paper, scissors, or r, p, s): ").toLowerCase();

        // Convert the abbreviation to the full word
        if (player2Action in abbreviations) {
            player2Action = abbreviations[player2Action];
        }
    }

    // Print the choices
    console.log(`\nPlayer 1 chose ${player1Action}, player 2 chose ${player2Action}.\n`);

    // Compare the choices and determine the winner
    if (player1Action === player2Action) {
        console.log(`Both players selected ${player1Action}. It's a tie!`);
    } else if (rules[player1Action] === player2Action) {
        console.log(`${player1Action.charAt(0).toUpperCase() + player1Action.slice(1)} beats ${player2Action}. Player 1 wins this round!`);
        // Update the score of player 1
        player1Score++;
    } else {
        console.log(`${player2Action.charAt(0).toUpperCase() + player2Action.slice(1)} beats ${player1Action}. Player 2 wins this round!`);
        // Update the score of player 2
        player2Score++;
    }
}

// Print the final scores
console.log(`\nFinal scores:\nPlayer 1: ${player1Score}\nPlayer 2: ${player2Score}\n`);

// Print the final result
if (player1Score === player2Score) {
    console.log("It's a draw!");
} else if (player1Score > player2Score) {
    console.log("Player 1 is the overall winner!");
} else {
    console.log("Player 2 is the overall winner!");
}
