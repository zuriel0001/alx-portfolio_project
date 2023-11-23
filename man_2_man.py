# Import the random module
import random

# Define the choices
choices = ["rock", "paper", "scissors"]

# Define the abbreviations
abbreviations = {
    "r": "rock",
    "p": "paper",
    "s": "scissors"
}

# Define the rules
rules = {
    "rock": "scissors", # Rock beats scissors
    "paper": "rock", # Paper beats rock
    "scissors": "paper" # Scissors beats paper
}

# Define the number of rounds
rounds = 5

# Define the scores
player1_score = 0
player2_score = 0

# Start the game loop
for i in range(rounds):
    # Print the round number
    print(f"\nRound {i+1} of {rounds}:\n")

    # Get the first player's choice
    player1_action = input("Player 1, enter a choice (rock, paper, scissors, or r, p, s): ").lower()

    # Convert the abbreviation to the full word
    if player1_action in abbreviations:
        player1_action = abbreviations[player1_action]

    # Validate the first player's choice
    while player1_action not in choices:
        print("Invalid choice. Please try again.")
        player1_action = input("Player 1, enter a choice (rock, paper, scissors, or r, p, s): ").lower()
        # Convert the abbreviation to the full word
        if player1_action in abbreviations:
            player1_action = abbreviations[player1_action]

    # Get the second player's choice
    player2_action = input("Player 2, enter a choice (rock, paper, scissors, or r, p, s): ").lower()

    # Convert the abbreviation to the full word
    if player2_action in abbreviations:
        player2_action = abbreviations[player2_action]

    # Validate the second player's choice
    while player2_action not in choices:
        print("Invalid choice. Please try again.")
        player2_action = input("Player 2, enter a choice (rock, paper, scissors, or r, p, s): ").lower()
        # Convert the abbreviation to the full word
        if player2_action in abbreviations:
            player2_action = abbreviations[player2_action]

    # Print the choices
    print(f"\nPlayer 1 chose {player1_action}, player 2 chose {player2_action}.\n")

    # Compare the choices and determine the winner
    if player1_action == player2_action:
        print(f"Both players selected {player1_action}. It's a tie!")
    elif rules[player1_action] == player2_action:
        print(f"{player1_action.capitalize()} beats {player2_action}. Player 1 wins this round!")
        # Update the score of player 1
        player1_score += 1
    else:
        print(f"{player2_action.capitalize()} beats {player1_action}. Player 2 wins this round!")
        # Update the score of player 2
        player2_score += 1

# Print the final scores
print(f"\nFinal scores:\nPlayer 1: {player1_score}\nPlayer 2: {player2_score}\n")

# Print the final result
if player1_score == player2_score:
    print("It's a draw!")
elif player1_score > player2_score:
    print("Player 1 is the overall winner!")
else:
    print("Player 2 is the overall winner!")
