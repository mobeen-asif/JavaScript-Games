const resetBtn = document.querySelector('#reset');
const checkBtn = document.querySelector('#check');
const num = document.querySelector('#value');
const msg = document.querySelector('#update');
const scoreContent = document.querySelector('#player-score');
const highScoreContent = document.querySelector('#highscore')

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

checkBtn.addEventListener('click', () => {
    const guess = Number(num.value);

    if (guess) {
        if (guess != secretNumber) {

            if (score > 1) {
                score--;
                scoreContent.textContent = score;
                msg.textContent = guess > secretNumber ? 'Too High' : 'Too Low';
                scoreContent.textContent = score
            } else {
                msg.textContent = "You've Lossed the Gamed";
                document.body.style.background = '#fff'
                document.body.style.color = 'black'
                scoreContent.textContent = 0;
            }

        } else {
            document.querySelector('.mark').textContent = secretNumber;
            document.body.style.background = 'green';
            msg.textContent = 'Correct Number!'
            highScoreContent.textContent = score;
        }

    } else {
        msg.textContent = 'Please Enter the number :(';
    }
})

resetBtn.addEventListener('click', () => {
    score = 20;
    secretNumber = Math.floor(Math.random() * 20) + 1;
    scoreContent.textContent = score;
    document.body.style.background = 'black';
    document.querySelector('.mark').textContent = '?';
    num.value = ' ';
    msg.textContent = 'Start Guessing......';
})