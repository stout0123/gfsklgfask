let numberToGuess = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let level = 1;
const baseAttempts = 13;
let easterEggs = [];
const easterEggsFound = [];

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const feedback = document.getElementById('feedback');
    const attemptsDisplay = document.getElementById('attempts');
    const attemptsLeftDisplay = document.getElementById('attemptsLeft');
    const levelDisplay = document.getElementById('level');
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        feedback.textContent = 'Please enter a number between 1 and 100.';
        return;
    }

    attempts++;
    if (guess < numberToGuess) {
        feedback.textContent = 'Too low! Try again.';
    } else if (guess > numberToGuess) {
        feedback.textContent = 'Too high! Try again.';
    } else {
        feedback.textContent = `Congratulations! You've guessed the number ${numberToGuess} in ${attempts} attempts.`;
        level++;
        levelDisplay.textContent = `Level: ${level}`;
        generateEasterEggs();
        resetForNextLevel();
        return;
    }

    if (attempts >= baseAttempts - (level - 1)) {
        feedback.textContent = `Sorry, you've used all ${baseAttempts - (level - 1)} attempts. The number was ${numberToGuess}.`;
        level = 1;  // Reset to level 1
        showGameOverScreen();
        return;
    }

    attemptsDisplay.textContent = `Attempts: ${attempts}/${baseAttempts - (level - 1)}`;
    attemptsLeftDisplay.textContent = baseAttempts - (level - 1) - attempts;
    updateBackgroundColor(baseAttempts - (level - 1) - attempts);
    guessInput.value = '';

    // Check for Easter eggs
    checkForEasterEggs(guess);
}

function resetForNextLevel() {
    numberToGuess = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('attempts').textContent = `Attempts: ${attempts}/${baseAttempts - (level - 1)}`;
    document.getElementById('feedback').textContent = '';
    document.getElementById('attemptsLeft').textContent = baseAttempts - (level - 1);
    updateBackgroundColor(baseAttempts - (level - 1));  // Reset background color
    hideEasterEgg();
}

function resetGame() {
    numberToGuess = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    level = 1; // Reset to level 1
    document.getElementById('level').textContent = `Level: ${level}`;
    document.getElementById('attempts').textContent = `Attempts: ${attempts}/${baseAttempts}`;
    document.getElementById('feedback').textContent = 'Game Restarted fully';
    document.getElementById('attemptsLeft').textContent = baseAttempts;
    updateBackgroundColor(baseAttempts);  // Reset background color
    hideEasterEgg();
    document.getElementById('feedback').textContent = '';
}

function resetAttempts() {
    attempts = 0;
    numberToGuess = Math.floor(Math.random() * 100) + 1;
    document.getElementById('attempts').textContent = `Attempts: ${attempts}/${baseAttempts - (level - 1)}`;
    document.getElementById('attemptsLeft').textContent = baseAttempts - (level - 1);
    document.getElementById('feedback').textContent = '';
    updateBackgroundColor(baseAttempts - (level - 1));
    hideEasterEgg();
}

function updateBackgroundColor(attemptsLeft) {
    const maxAttempts = baseAttempts - (level - 1);
    const percentage = attemptsLeft / maxAttempts;
    const red = Math.floor((1 - percentage) * 255);
    const green = Math.floor(percentage * 255);
    document.body.style.backgroundColor = `rgb(${red}, ${green}, 0)`;
}

function showGameOverScreen() {
    document.querySelector('.container').style.display = 'none';
    const gameOverScreen = document.getElementById('gameOverScreen');
    gameOverScreen.style.display = 'block';
    document.getElementById('gameOverMessage').textContent = `The number was ${numberToGuess}. Try again!`;
}

function restartGame() {
    document.querySelector('.container').style.display = 'block';
    document.getElementById('gameOverScreen').style.display = 'none';
    resetGame();
}

function generateEasterEggs() {
    easterEggs = [];
    for (let i = 0; i < 2; i++) { // Generate 0 Easter eggs per level
        const randomCode = `hi${Math.floor(Math.random() * 10000)}`;
        easterEggs.push(randomCode);
    }
}

function checkForEasterEggs(guess) {
    // Randomly show an Easter egg
    if (Math.random() < 0.0) { // 0% chance to find an Easter egg
        const foundEgg = easterEggs[Math.floor(Math.random() * easterEggs.length)];
        if (!easterEggsFound.includes(foundEgg)) {
            showEasterEgg(foundEgg);
            easterEggsFound.push(foundEgg);
        }
    }
}

function showEasterEgg(code) {
    const easterEggDiv = document.getElementById('easterEgg');
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();

    const randomX = Math.random() * (containerRect.width - 50); // Adjust for the div width
    const randomY = Math.random() * (containerRect.height - 50); // Adjust for the div height

    easterEggDiv.style.left = `${randomX}px`;
    easterEggDiv.style.top = `${randomY}px`;
    easterEggDiv.textContent = `Redeem code: ${code}`;
    easterEggDiv.style.display = 'block';
}

function hideEasterEgg() {
    const easterEggDiv = document.getElementById('easterEgg');
    easterEggDiv.style.display = 'none';
}

function redeemCode() {
    const codeInput = document.getElementById('redeemCodeInput').value;
    if (easterEggsFound.includes(codeInput)) {
        attempts -= 1; // Reduce attempts by 1
        document.getElementById('attempts').textContent = `Attempts: ${attempts}/${baseAttempts - (level - 1)}`;
        document.getElementById('attemptsLeft').textContent = baseAttempts - (level - 1) - attempts;
        alert('Code redeemed! You gained 1 extra attempt.');
        // Remove the redeemed code from the found Easter eggs
        easterEggsFound.splice(easterEggsFound.indexOf(codeInput), 1);
    } else {
        alert('Invalid code. Please try again.');
    }
    document.getElementById('redeemCodeInput').value = ''; // Clear the input
}
