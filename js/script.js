const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const score = document.querySelector('.score');
const reset = document.querySelector('.reset');

let pontos = 0;

const scoreInterval = setInterval(() => {

    pontos += 10;

    score.innerText = `Pontos: ${pontos}`;

}, 1000);

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}


score.innerText = `Pontos: ${pontos}`;

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;

    const marioPosition = +window
        .getComputedStyle(mario)
        .bottom.replace('px', '');

    if (pipePosition <= 120 &&
        pipePosition > 0 &&
        marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './image/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
        clearInterval(scoreInterval);
    }

}, 10);

reset.addEventListener('click', () => {
    location.reload();
});

document.addEventListener('keydown', jump);