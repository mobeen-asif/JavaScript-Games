console.log('welcome to tic tac toe');
let turnMusic = new Audio('ting.mp3');
let gameOverMusic = new Audio('gameover.mp3');
let turn = 'X';
let gameover = false;
let reset = document.getElementById('reset');

const changeTurn = () => {
    return turn === 'X'?'0':'X'
}

const checkWin = ()=>{
    let boxTxt = document.getElementsByClassName('box-txt');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
        if((boxTxt[e[0]].innerText === boxTxt[e[1]].innerText) && (boxTxt[e[2]].innerText === boxTxt[e[1]].innerText) && (boxTxt[e[0]].innerText !== '')){
            document.querySelector('.info').innerText = boxTxt[e[0]].innerText + ' Won';
            gameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '200px'
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector('.line').style.width = '20vw';
        }
    })
}

let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxTxt = element.querySelector('.box-txt');
    element.addEventListener('click', ()=>{
        if(boxTxt.innerText === ''){
            boxTxt.innerText = turn;
            turn = changeTurn();
            turnMusic.play();
            checkWin();
            if(!gameover) {
                document.getElementsByClassName('info')[0].innerText = 'Turn for = ' + turn;
            }
        }
    })
});

reset.addEventListener('click', ()=>{
    let boxTxt = document.querySelectorAll('.box-txt');
    Array.from(boxTxt).forEach(element => {
        element.innerText = ''
    });
    trun = 'X';
    gameover = false;
    document.getElementsByClassName('info')[0].innerText = 'Turn for = ' + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0px';
    document.querySelector('.line').style.width = '0vw';
})