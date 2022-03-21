'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'correct number! 🎉';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    //document.querySelector('.message').textContent = '⛔ No number!';
    displayMessage('⛔ No number!');
  }
  //When player wins
  else if (guess === secretNumber) {
    displayMessage('Correct Number! 🎉');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //When the guess number wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'too High!!!' : 'too Low!!!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('lost the game!!!');
    }
  }

  //When guess the number too low
  /*else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too Low!!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'lost the game!!!';
    }
  }
  //When guess the number too High
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too High!!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'lost the game!!!';
    }
  } else {
    document.querySelector('.message').textContent = 'it is not a number!!!';
  }*/
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
