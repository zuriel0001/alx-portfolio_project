// JavaScript code to handle the user's choice
function playWithComputer() {
    // Hide the home page and show the computer game page
    document.getElementById("home").style.display = "none";
    document.getElementById("computer").style.display = "block";
}

function playWithHuman() {
    // Hide the home page and show the human game page
    document.getElementById("home").style.display = "none";
    document.getElementById("human").style.display = "block";
}

function goBack() {
    // Hide the game pages and show the home page
    document.getElementById("computer").style.display = "none";
    document.getElementById("human").style.display = "none";
    document.getElementById("home").style.display = "block";
}
