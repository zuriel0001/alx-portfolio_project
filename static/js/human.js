// JavaScript code for human game mode
function playWithHuman() {
    // Show the human game page
    showPage("human");
}

function copyLink() {
    // Generate a unique game ID
    const gameID = generateGameID();

    // Update the game link in the HTML
    document.getElementById("gameLink").textContent = `https://alx-portfolio-project-seven.vercel.app/${gameID}`;

    // Copy the text to the clipboard
    copyToClipboard(`https://alx-portfolio-project-seven.vercel.app/${gameID}`);

    // Alert the user that the link has been copied
    alert("Game link copied to clipboard!");
}

// Function to generate a unique game ID
function generateGameID() {
    // Use the current timestamp as a unique identifier
    const timestamp = Date.now();
    return `game_${timestamp}`;
}

// Function to copy text to clipboard
function copyToClipboard(text) {
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999); /* For mobile devices */

    document.execCommand("copy");
    document.body.removeChild(tempInput);
}
