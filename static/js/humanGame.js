// JavaScript code for human game mode
function generateGameLink() {
    const gameLinkElement = document.getElementById("gameLink");

    // Generate a unique game ID (you can use a more robust method if needed)
    const gameID = generateUniqueID();

    // Set the game link in the element
    gameLinkElement.textContent = `https://alx-portfolio-project-seven.vercel.app/game/${gameID}`;
}

function generateUniqueID() {
    // You can use your preferred method to generate a unique ID
    // Here's a simple example using the current timestamp
    return Date.now().toString(36);
}

