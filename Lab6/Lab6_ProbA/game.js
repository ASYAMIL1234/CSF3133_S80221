//Game state
let gameStarted = false;
let wins = 0;
let losses = 0;
let draws = 0;
let results = [];

//Start the game
function startGame() {
    let name = document.getElementById("playerName").value.trim();

    // Stop if the name is empty
    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    // Show welcome message and start date/time
    document.getElementById("welcome").innerHTML = "Welcome, " + name + "!";
    document.getElementById("startTime").innerHTML = "Game started: " + Date();

    gameStarted = true;
}

//Random computer choice
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3);
    return choices[index];
}

//Play one round
function playRound(playerChoice) {
    //Player must start the game first
    if (!gameStarted) {
        alert("Click Start Game first.");
        return;
    }

    let computerChoice = getComputerChoice();
    let outcome;

    // Decide the winner
    if (playerChoice === computerChoice) {
        outcome = "Draw";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        outcome = "Win";
    } else {
        outcome = "Lose";
    }

    // Change both images
    document.getElementById("playerImg").src = playerChoice + ".png";
    document.getElementById("computerImg").src = computerChoice + ".png";

    // Show result message and change its colour
    let result = document.getElementById("result");
    if (outcome === "Win") {
        wins++;
        result.innerHTML = "You chose " + playerChoice + ", computer chose " + computerChoice + ". You Win!";
        result.style.color = "green";
    } else if (outcome === "Lose") {
        losses++;
        result.innerHTML = "You chose " + playerChoice + ", computer chose " + computerChoice + ". You Lose!";
        result.style.color = "red";
    } else {
        draws++;
        result.innerHTML = "You chose " + playerChoice + ", computer chose " + computerChoice + ". It's a Draw!";
        result.style.color = "grey";
    }

    // Update scoreboard
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("draws").innerHTML = draws;

    // Save result and add a row to the history table
    results.push(outcome);
    document.getElementById("historyBody").innerHTML +=
        "<tr><td>" + results.length + "</td><td>" + playerChoice + "</td><td>" +
        computerChoice + "</td><td>" + outcome + "</td></tr>";
}

// ===== Show summary =====
function showSummary() {
    if (results.length === 0) {
        alert("Play at least one round first.");
        return;
    }

    // Count wins with a for loop
    let winCount = 0;
    for (let i = 0; i < results.length; i++) {
        if (results[i] === "Win") {
            winCount++;
        }
    }

    let percent = Math.round((winCount / results.length) * 100);
    document.getElementById("summary").innerHTML =
        "You played " + results.length + " rounds and won " + percent + "%";
}

// ===== Reset everything =====
function resetGame() {
    wins = 0;
    losses = 0;
    draws = 0;
    results = [];

    document.getElementById("wins").innerHTML = 0;
    document.getElementById("losses").innerHTML = 0;
    document.getElementById("draws").innerHTML = 0;

    document.getElementById("historyBody").innerHTML = "";  // clear history rows
    document.getElementById("result").innerHTML = "";
    document.getElementById("summary").innerHTML = "";

    // Hide images again
    document.getElementById("playerImg").removeAttribute("src");
    document.getElementById("computerImg").removeAttribute("src");
}