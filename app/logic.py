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
    "rock": "scissors",  # Rock beats scissors
    "paper": "rock",     # Paper beats rock
    "scissors": "paper"  # Scissors beats paper
}

def play_with_computer():
    while True:
        # Define the number of rounds
        rounds = 5

        # Initialize scores
        player_score = 0
        computer_score = 0

        # Play for the specified number of rounds
        for round_num in range(1, rounds + 1):
            print(f"\nRound {round_num} of {rounds}:\n")

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

            # Print the user's and computer's choices
            print(f"\nYou chose {user_action}, computer chose {computer_action}.\n")

            # Compare the choices and determine the winner
            if user_action == computer_action:
                print(f"Both players selected {user_action}. It's a tie!")
            elif rules[user_action] == computer_action:
                print(f"{user_action.capitalize()} beats {computer_action}. You win this round!")
                player_score += 1
            else:
                print(f"{computer_action.capitalize()} beats {user_action}. Computer wins this round!")
                computer_score += 1

            # Display the current scores after each round
            print(f"\nCurrent scores:\nYou: {player_score}\nComputer: {computer_score}\n")

        # Print the final result after 5 rounds
        print("\nFinal scores:")
        print(f"You: {player_score}\nComputer: {computer_score}\n")

        # Determine the overall winner
        if player_score == computer_score:
            print("It's a draw!")
        elif player_score > computer_score:
            print("You are the overall winner!")
        else:
            print("Computer is the overall winner!")

        # Ask the user to play again
        play_again = input("Play again? (y/n): ").lower()
        if play_again != "y":
            break

def play_with_human():
    while True:
        # Define the number of rounds
        rounds = 5

        # Initialize scores
        player1_score = 0
        player2_score = 0

        # Play for the specified number of rounds
        for round_num in range(1, rounds + 1):
            print(f"\nRound {round_num} of {rounds}:\n")

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
            print(f"\nPlayer 1 chose {player1_action}, Player 2 chose {player2_action}.\n")

            # Compare the choices and determine the winner
            if player1_action == player2_action:
                print(f"Both players selected {player1_action}. It's a tie for this round!")
            elif rules[player1_action] == player2_action:
                print(f"{player1_action.capitalize()} beats {player2_action}. Player 1 wins this round!")
                player1_score += 1
            else:
                print(f"{player2_action.capitalize()} beats {player1_action}. Player 2 wins this round!")
                player2_score += 1

            # Display the current scores after each round
            print(f"\nCurrent scores:\nPlayer 1: {player1_score}\nPlayer 2: {player2_score}\n")

        # Print the final result after 5 rounds
        print("\nFinal scores:")
        print(f"Player 1: {player1_score}\nPlayer 2: {player2_score}\n")

        # Determine the overall winner
        if player1_score == player2_score:
            print("It's a draw!")
        elif player1_score > player2_score:
            print("Player 1 is the overall winner!")
        else:
            print("Player 2 is the overall winner!")

        # Ask the user to play again
        play_again = input("Play again? (y/n): ").lower()
        if play_again != "y":
            break

# Get user's choice for game mode
game_mode = input("Choose game mode: Enter '1' for playing with computer or '2' for human vs human: ")

# Play the selected game mode
if game_mode == '1':
    play_with_computer()
elif game_mode == '2':
    play_with_human()
else:
    print("Invalid choice for game mode. Please choose '1' or '2'.")
