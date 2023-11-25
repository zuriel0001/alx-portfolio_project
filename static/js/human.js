// JavaScript code for human game mode

function playWithHuman() {
    // Show the human game page
    showPage("human");
}

function copyLink() {
    // Get the game link element
    const gameLinkElement = document.getElementById("gameLink");

    // Create a temporary input element
    const tempInput = document.createElement("input");
    tempInput.value = gameLinkElement.textContent;
    document.body.appendChild(tempInput);

    // Select the text in the input element
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); /* For mobile devices */

    // Copy the text to the clipboard
    document.execCommand("copy");

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Alert the user that the link has been copied
    alert("Game link copied to clipboard!");
}
