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

# Start the game loop
while True:
    # Get the user's choice
    user_action = input("Enter a choice (rock, paper, scissors, or r, p, s): ").lower()

    # Convert the abbreviation to the full word
    if user_action in abbreviations:
        user_action = abbreviations[user_action]

    # Validate the user's choice
    while user_action not in choices:
        print("Invalid choice. Please try again.")
        user_action = input("Enter a choice (rock, paper, scissors, or r, p, s): ").lower()
        # Convert the abbreviation to the full word
        if user_action in abbreviations:
            user_action = abbreviations[user_action]

    # Get the computer's choice
    computer_action = random.choice(choices)

    # Print the choices
    print(f"\nYou chose {user_action}, computer chose {computer_action}.\n")

    # Compare the choices and determine the winner
    if user_action == computer_action:
        print(f"Both players selected {user_action}. It's a tie!")
    elif rules[user_action] == computer_action:
        print(f"{user_action.capitalize()} beats {computer_action}. You win!")
    else:
        print(f"{computer_action.capitalize()} beats {user_action}. You lose.")

    # Ask the user to play again
    play_again = input("Play again? (y/n): ")
    if play_again.lower() != "y":
        break
