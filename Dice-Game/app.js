const player1 = document.querySelector('.player-1');
const player2 = document.querySelector('.player-2');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');
const score1 = document.querySelector('.score-1');
const current1 = document.querySelector('.current-1');
const score2 = document.querySelector('.score-2');
const current2 = document.querySelector('.current-2');

let scores = [0, 0];
let activePlayer = 1;
let currentScore = 0;
let playing = true;

const switchPlayer = function () {
    player1.classList.toggle('player.active');
    player2.classList.toggle('player.active');
    currentScore = 0;
    document.querySelector(`#current-${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 1 ? 2 : 1;
}

btnRoll.addEventListener('click', () => {
    const diceNum = Math.floor((Math.random() * 6) + 1);
    dice.classList.remove('hidden');
    dice.src = `./assets/dice-${diceNum}.png`;

    if (diceNum !== 1) {
        currentScore += diceNum;
        document.querySelector(`#current-${activePlayer}`).textContent = currentScore;
    } else {
        currentScore += diceNum;
        switchPlayer();
    }
});

btnHold.addEventListener('click', () => {
    scores[activePlayer] += currentScore;
    document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 100) {
        document.querySelector(`.player-${activePlayer}`).classList.add('player-winner');
    } else {
        switchPlayer();
    }
})