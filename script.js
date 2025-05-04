const timeHolder = document.getElementById('time')
let time = 30;
const target = document.querySelector('.target');
const scoreHolder = document.getElementById('score');
const start = document.querySelector('.start')
let startAudio = new Audio('audio/game-start.mp3');
let clickAudio = new Audio('audio/button-click.mp3');
let bgm = new Audio('audio/music.mp3');



start.addEventListener('click', () => {

    
  
    
    start.classList.add('hide');
    timeHolder.classList.remove('hide');
    target.classList.remove('hide');
    bgm.volume = 0.2;
    bgm.play();
    startAudio.play();

    target.addEventListener('click', () => {
        
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
    
});

window.addEventListener('unload', () => {
        let score = JSON.parse(sessionStorage.getItem('score'));
        sessionStorage.setItem('score', 0);
        scoreHolder.textContent = "Score: " + score;
})


window.addEventListener('DOMContentLoaded', () => {
    timeHolder.classList.add('hide');
    let score = JSON.parse(sessionStorage.getItem('score'));
    scoreHolder.textContent = "Score: " + score;
});