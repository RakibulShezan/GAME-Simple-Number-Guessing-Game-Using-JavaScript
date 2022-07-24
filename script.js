'use strict';

/* const confetti = require('canvas-confetti'); */
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

function guessMatch() {
  const guess = Number(document.querySelector('.guess').value);

  /* If the guess input is 0 or empty */
  if (!guess) {
    displayMessage('No Number!');

    /* If the guess input matches with the secret number */
  } else if (guess === secretNumber) {
    displayMessage('🥳 Correct Number!');
    confetti({
      spread: 200,
      particleCount: 300,
    });

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    /* Guess is not equal to the secret number */
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? 'Too High Guess!' : 'Too Low Guess!'
      );
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      /* Attempted 20 times with wrong guess */
      displayMessage('You Lost The Game!');
      document.querySelector('.score').textContent = 0;
    }
  }
}

document.querySelector('.check').addEventListener('click', function () {
  guessMatch();
});
document.querySelector('.guess').addEventListener('keypress', function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    guessMatch();
  }
});

// Play Again Functionality

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
});
