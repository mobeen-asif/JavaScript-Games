const resetBtn = document.querySelector('#reset');
const checkBtn = document.querySelector('#check');
const num = document.querySelector('#value');
const numberToGuess = Math.ceil(Math.random() * 20);

resetBtn.addEventListener('click', () => {
    document.querySelector('#update').textContent = ' ';
    document.body.style.background = 'black';
    document.querySelector('.mark').textContent = '?';
    num.value = ' ';
    numberToGuess += (Math.ceil(Math.random() * 20));
})


checkBtn.addEventListener('click', () => {
    const val = parseInt(num.value)
    if (val > numberToGuess) {
        document.querySelector('#update').textContent = 'Too High';
    } else if (val < numberToGuess) {
        document.querySelector('#update').textContent = 'Too low';
    } else {
        document.querySelector('#update').textContent = 'Correct Number';
        document.body.style.background = 'green';
        document.querySelector('.mark').textContent = numberToGuess;
    }
})