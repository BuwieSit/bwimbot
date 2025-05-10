const timeHolder = document.querySelector('.time')
let time = 30;
const target = document.querySelector('.target');
const scoreHolder = document.getElementById('score');
const start = document.querySelector('.start');
const flash = document.querySelector('.flash');
let startAudio = new Audio('audio/game-start.mp3');
let clickAudio = new Audio('audio/raygun-cut.mp3');
let bgm = new Audio('audio/8bit-bg.mp3');

function countDown() {
    if (time > 0) {
            timeHolder.textContent = time;
            time--;
            setTimeout(countDown, 1000);
    } else {
        timeHolder.textContent = "Time's up!";
        target.classList.add('hide');
        setTimeout( function() {
            start.classList.remove('hide');
        }, 3000);
        
        scoreHolder.style.fontSize = "3rem";
        scoreHolder.style.textAlign = "center";
        bgm.pause();

        start.addEventListener('click', () => {
            window.location.reload();
        });

    }
}
start.addEventListener('click', startGame);

function clickEffect() {
    flash.style.opacity = "1";
    console.log('FLASH!');

    setTimeout(function() {
        flash.style.opacity = "0";
    }, 50)
}
function startGame() {

        start.classList.add('hide');
        timeHolder.classList.remove('hide');
        target.classList.remove('hide');
        bgm.volume = 0.2;
        bgm.play();
        startAudio.play();

        countDown();

        target.addEventListener('click', () => {
            clickEffect();
            clickAudio.play();
            target.classList.add('hide');
            let score = JSON.parse(sessionStorage.getItem('score'));
            score += 1;
            sessionStorage.setItem('score', score);
            scoreHolder.textContent = "Score: " + score;
        
            setTimeout(function() 
            {
                target.classList.remove('hide')
            }, 50);
            
            let val = Math.floor(Math.random() * 90);
            let val2 = Math.floor(Math.random() * 90);
            console.log(val);
            console.log(val2);
            target.style.top = val + "%"
            target.style.left = val2 + "%"
        
        });
        
}

window.addEventListener('unload', () => {
        flash.style.opacity = '0';
        timeHolder.classList.add('hide');
        let score = JSON.parse(sessionStorage.getItem('score'));
        sessionStorage.setItem('score', 0);
        scoreHolder.textContent = "Score: " + score;
})


window.addEventListener('DOMContentLoaded', () => {
    flash.style.opacity = '0';
    timeHolder.classList.add('hide');   
    let score = JSON.parse(sessionStorage.getItem('score'));
    sessionStorage.setItem('score', 0);
    scoreHolder.textContent = "Score: " + score;
});

