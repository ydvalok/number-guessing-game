let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessfield');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lasresult');
const lowOrHi = document.querySelector('.Loworhi');
const startOver = document.querySelector('.resultparas');

let p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playgame = true;

if (playgame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number greater than 0');
    } else if (guess > 100) {
        alert('Please enter a number less than 100');
    } else {
        prevGuess.push(guess);

        if (numGuess === 10) {
            displayGuess(guess);
            displayMessage(`Game Over! Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(` You guessed it right!`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is too LOW`);
    } else {
        displayMessage(`Number is too HIGH`);
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');

    p.classList.add('button');
    p.innerHTML = `<button id="newGame">Start New Game</button>`;
    startOver.appendChild(p);

    playgame = false;
    newGame();
}

function newGame() {
    const newGameBtn = document.querySelector('#newGame');

    newGameBtn.addEventListener('click', function () {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;

        guessSlot.innerHTML = '';
        lowOrHi.innerHTML = '';
        remaining.innerHTML = '10';

        userInput.removeAttribute('disabled');
        p.remove();

        playgame = true;
    });
}
